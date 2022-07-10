import { useState } from "react";
import { SearchResults } from "./SearchResults";

export const Searchbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Haz tu busqueda..."
        value={search}
      />
      <SearchResults keyword={search} />
    </div>
  );
};
