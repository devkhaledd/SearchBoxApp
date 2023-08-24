import React from "react";
import { Article } from "../data/demoData";
import ArticleComponent from "./ArticleComponent";

interface SearchResultsProps {
  results: Article[];
  searchTerm: string;
}

const SearchResults = ({ results, searchTerm }: SearchResultsProps) => {
  return (
    <>
      <ul className="divide-y-2 divide-gray-300">
        {results.map((article: Article, index: number) => (
          <li key={index} className="py-5">
            <ArticleComponent article={article} searchTerm={searchTerm} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchResults;
