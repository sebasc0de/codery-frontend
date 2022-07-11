import { Product } from "../types";
import { ProductCard } from "./ProductCard";
import { SearchBarProps } from "./Searchbar";
import { useEffect, useState } from "react";
import authStore from "../store/auth";

export const SearchProduct = ({ keyword, searchInDatabase }: Props) => {
  const [results, setResults] = useState<Product[]>([]);

  // User token
  const token = authStore((state) => state.token);

  useEffect(() => {
    searchInDatabase(token, keyword).then(setResults);
  }, [keyword]);

  return (
    <div className="h-72 overflow-y-scroll">
      {results.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

interface Props extends SearchBarProps {
  keyword: string;
}
