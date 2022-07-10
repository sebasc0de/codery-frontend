export interface SearchBarProps {
  type: "";
  searchInDatabase: (token: string, keyword: string) => Promise<void>;
}

export interface SearchResultsProps extends SearchBarProps {
  keyword: string;
}
