import { useState, useMemo } from "react";

import "./App.css";
import toolsData from "../toolsData.json";
import { Footer } from "./components/Footer";
import { ToolCard } from "./components/ToolCard";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { FilterButtons } from "./components/FilterButtons";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    toolsData.forEach((tool: Tool) => {
      tool.category.split(",").forEach((cat: string) => {
        const trimmedCat = cat.trim();
        if (trimmedCat) categorySet.add(trimmedCat);
      });
    });
    return ["All", ...Array.from(categorySet).sort()];
  }, []);

  const filteredTools = useMemo(() => {
    return toolsData.filter((tool) => {
      const lowerSearchTerm = searchTerm.toLowerCase();

      const categoryMatch =
        activeCategory === "All" ||
        tool.category
          .toLowerCase()
          .split(",")
          .map((c) => c.trim())
          .includes(activeCategory.toLowerCase());

      const searchMatch =
        !lowerSearchTerm ||
        tool.tool.toLowerCase().includes(lowerSearchTerm) ||
        tool.description.toLowerCase().includes(lowerSearchTerm) ||
        tool.category.toLowerCase().includes(lowerSearchTerm);

      return categoryMatch && searchMatch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="container">
      <Header />

      <div className="controls">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterButtons
          categories={categories}
          activeCategory={activeCategory}
          onFilterChange={setActiveCategory}
        />
      </div>

      <main id="tools-grid">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => <ToolCard key={tool.tool} tool={tool} />)
        ) : (
          <p className="no-results">No tools found matching your criteria.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
