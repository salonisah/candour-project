import React from "react";
import { useParams } from "react-router-dom";
import ArticlePage from "./ArticlePage";
import { tableData } from "./mockData";

const DynamicArticlePage = () => {
  const { id } = useParams(); // Extracts the 'id' from the URL (e.g., '1' from '/article/1')
  const article = tableData.find((item) => item.id === id); // Finds the article with matching id

  if (!article) return <div>Article not found.</div>; // Handles invalid ids

  return (
    <ArticlePage
      title={article.title}
      category={article.category}
      tags={article.tags}
      imageSrc={article.imageSrc}
      imageAlt={article.imageAlt}
      views={article.views}
      suggestions={article.suggestions || "0"}
      comments={article.comments}
      content={article.content}
    />
  ); // Passes article data as props to ArticlePage
};

export default DynamicArticlePage;