import React from "react";
import { Article } from "../data/demoData";

interface Props {
  article: Article;
  searchTerm: string;
}

// Function to split and highlight the search term
const highlightSearchTerm: any = (content: any, searchTerm: any) => {
  const parts = content.split(new RegExp(`(${searchTerm})`, "gi"));

  return parts.map((part: any, index: any) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} className="bg-yellow-400">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const ArticleComponent = ({ article, searchTerm }: Props) => {
  return (
    <div className="flex flex-col text-left">
      <h2 className="font-bold">
        {highlightSearchTerm(article.title, searchTerm)}
      </h2>
      <h3 className="italic text-lg">{article.date}</h3>
      <p className="text-lg">
        {highlightSearchTerm(article.content, searchTerm)}
      </p>
    </div>
  );
};

export default ArticleComponent;
