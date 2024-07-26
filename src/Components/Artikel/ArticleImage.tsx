import React from "react";
import "../../styles/Article.css";
import "../../styles/textstyle.css";

const ArticleImage = () => {
    return (
        <div className="">
            <div className="article-image">
                <img src="/images/Laura_Freigang_Vertragsverlangerung.webp" alt="Freigang" />
            </div>
            <div className="article-image-caption">
                <p className="verdana12regular">Laura Freigang hat ihren Vertrag verlängert.</p>
                <p className="verdana12regular">© Eintracht Frankfurt</p>
            </div>
        </div>
    )
}

export default ArticleImage;