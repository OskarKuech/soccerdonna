import React from "react";
import "../../styles/textstyle.css";
import "../../styles/Article.css";

interface ArticleHeadlineProps {
    date: string;
    headline: string;
}
const ArticleHeadline: React.FC<ArticleHeadlineProps> = ({ date, headline }) => {
  return (
    <div className="article-headline">
        <p className="verdana12regular">{date}</p>
      <h1 className="verdana30bold">{headline}</h1>
    </div>
  );
}

export default ArticleHeadline;