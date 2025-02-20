import { useState } from "react";
import SearchLogo from "../../images/search.png";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "10px", alignItems: "center" }}
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Rechercher un film..."
        style={{
          backgroundColor: "transparent",
          border: "none",
          borderBottom: "1px solid white",
          padding: ".3vw 1vw",
          color: "white",
          outline: "none",
        }}
      />
      <img
        src={SearchLogo}
        alt="Rechercher"
        onClick={handleSubmit}
        style={{
          width: "1.5vw",
          height: "1.5vw",
          cursor: "pointer",
        }}
      />
    </form>
  );
};

export default SearchBar;
