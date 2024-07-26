import React from "react";
import "../../styles/Article.css";
import "../../styles/textstyle.css";
import PreviewSmallDescription from "./PreviewSmallDescription";

interface ArtikelProps {
    image: string;
    headline: string;
    text: string;
    date: string;
}
const PreviewSmall: React.FC<ArtikelProps> = ({ image, headline, text, date }) => {
    return (
        <div className="preview-small">
            <img src={image} alt={headline} />
            <PreviewSmallDescription headline={headline} text={text} />
            <p className="verdana12regular">{date}</p>
        </div>
    );
}

export default PreviewSmall;