export const SearchBar = ({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    type="text"
    id="search-input"
    placeholder="Search for a tool..."
    value={searchTerm}
    onChange={onSearchChange}
  />
);
