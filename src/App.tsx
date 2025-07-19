import { useState, useMemo } from "react";

import "./App.css";
import toolsData from "../toolsData.json";
import { Footer } from "./components/Footer";
import { ToolCard } from "./components/ToolCard";
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

  // Update the header with dynamic tool count
  const HeaderWithCount = () => (
    <header>
      <h1>The Modern Developer's Toolkit</h1>
      <p>
        A curated collection of powerful tools, services, and libraries for
        building modern applications. This list focuses on practical,
        battle-tested solutions that developers actually use in production.
      </p>
      <div className="header-links">
        <a
          href="https://github.com/Shreyaan/developer-toolkit"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          ⭐ Star on GitHub
        </a>
        <span className="divider">•</span>
        <span className="tool-count">
          Discover {toolsData.length}+ carefully selected tools
        </span>
      </div>
    </header>
  );

  return (
    <div className="container">
      <HeaderWithCount />

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
          <div className="no-results">
            <p>No tools found matching your criteria.</p>
            <p className="no-results-suggestion">
              Try adjusting your search or{" "}
              <a
                href="https://github.com/Shreyaan/developer-toolkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                suggest a new tool on GitHub
              </a>
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
