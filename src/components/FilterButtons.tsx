export const FilterButtons = ({
  categories,
  activeCategory,
  onFilterChange,
}: {
  categories: string[];
  activeCategory: string;
  onFilterChange: (category: string) => void;
}) => (
  <div className="filter-buttons">
    {categories.map((category) => (
      <button
        key={category}
        className={`filter-btn ${activeCategory === category ? "active" : ""}`}
        onClick={() => onFilterChange(category)}
      >
        {category}
      </button>
    ))}
  </div>
);
