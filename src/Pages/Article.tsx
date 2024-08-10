import React from "react"; 
import Menu from "../Components/Menu/Menu";
import ArticleFrame from "../Components/Frames/ArticleFrame";
import Related from "../Components/Related/Related";
import '../styles/Frames.css';

const Article = () => {
  return (
    <div className='club-frame'>
            <Menu />
      <div className="full-frame">
        <ArticleFrame />

        <div>
          <Related />
        </div>
      </div>
    </div>
  );
}

export default Article;