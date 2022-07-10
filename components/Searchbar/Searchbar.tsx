import { SearchBarProps } from "./SearchBarProps";
import { SearchResults } from "./SearchResults";
import { useState } from "react";

export const Searchbar = ({ searchInDatabase }: SearchBarProps) => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Haz tu busqueda..."
        value={search}
      />
      <SearchResults searchInDatabase={searchInDatabase} keyword={search} />
    </div>
  );
};
