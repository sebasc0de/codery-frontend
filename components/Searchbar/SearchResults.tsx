import { SearchResultsProps } from "./SearchBarProps";
import { useEffect, useState } from "react";
import authStore from "../../store/auth";

export const SearchResults = ({
  keyword,
  searchInDatabase,
}: SearchResultsProps) => {
  const [results, setResults] = useState<any>([]);

  // User token
  const token = authStore((state) => state.token);

  useEffect(() => {
    searchInDatabase(token, keyword).then(setResults);
  }, [keyword]);

  return (
    <div className="h-10">
      {results.map((item: any) => (
        <li className="search-card" key={item.id}>
          {item.name}
        </li>
      ))}
    </div>
  );
};
