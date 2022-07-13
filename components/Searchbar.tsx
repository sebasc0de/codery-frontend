import { SearchProduct } from "./SearchProduct";
import { useState } from "react";
import { Product } from "../interfaces/index";

export const Searchbar = ({ searchInDatabase }: SearchBarProps) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Haz tu busqueda..."
        value={search}
      />
      <SearchProduct searchInDatabase={searchInDatabase} keyword={search} />
    </div>
  );
};

export interface SearchBarProps {
  searchInDatabase: (token: string, keyword: string) => Promise<Product[]>;
}
