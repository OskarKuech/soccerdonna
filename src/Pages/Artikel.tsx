import React from "react"; 
import ArticleFrame from "../Components/Frames/ArticleFrame";
import Related from "../Components/Related/Related";
import '../styles/Frames.css';

const Article = () => {
  return (
    <div className="full-frame">
      <ArticleFrame />

      <div>
        <Related />
      </div>

    </div>
  );
}

export default Article;