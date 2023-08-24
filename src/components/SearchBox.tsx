import React, { useState } from "react";
import articles, { Article } from "../data/demoData";
import SearchResults from "./SearchResults";
import { XCircleIcon } from "@heroicons/react/24/solid";

const SearchBox = () => {
  const [value, setValue] = useState<string>("");
  const [searchResults, setSearchResult] = useState(articles);
  const [highlightedCount, setHighlightedCount] = useState<number>(0); // State for highlighted word count

  const handleSearch = (e: any) => {
    const term = e.target.value.toLowerCase();
    setValue(term);
    const filteredResults: any = articles.filter(
      (article) =>
        article.content.toLowerCase().includes(term) ||
        article.title.toLowerCase().includes(term)
    );
    setSearchResult(filteredResults);
    setHighlightedCount(filteredResults.length);
  };

  const handleClear = () => {
    setValue(""); // Clear the search input
    setSearchResult(articles); // Reset search results to all articles
    setHighlightedCount(0); // Reset highlighted word count
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-start w-full h-full">
        <div className=" text-3xl font-bold">Search</div>
        <div className="relative w-full">
          <input
            className="mt-6 w-full p-4 text-base text-gray-900 focus:outline-none border-2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Search..."
            value={value}
            onChange={handleSearch}
          />
          {value.length > 0 && (
            <XCircleIcon
              className="w-7 h-7 absolute text-blue-700 right-3 bottom-3.5 cursor-pointer"
              onClick={handleClear}
            />
          )}
        </div>
        {value.length > 0 && (
          <p className="text-base mt-2">
            <span className="font-bold">{highlightedCount === 1 ? `${highlightedCount} article` : `${highlightedCount} articles`}</span> were
            found.
          </p>
        )}
      </div>
      <SearchResults results={searchResults} searchTerm={value} />
    </div>
  );
};

export default SearchBox;
