import { useEffect, useState } from "react";
import { getProducts } from "../helpers/product";
import authStore from "../store/auth";

export const SearchResults = ({ keyword }: { keyword: string }) => {
  const [results, setResults] = useState([]);

  // User token
  const token = authStore((state) => state.token);

  useEffect(() => {
    getProducts(token, keyword).then(setResults);
  }, [keyword]);

  return <div className="box h-10 column"></div>;
};
