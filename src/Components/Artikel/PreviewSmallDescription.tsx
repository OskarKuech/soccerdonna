import React from "react";
import "../../styles/Article.css";
import "../../styles/textstyle.css";

interface ArtikelProps {
    headline: string;
    text: string;
}
const PreviewSmallDescription: React.FC<ArtikelProps> = ({ headline, text }) => {
    return (
        <div className="preview-small-description">
            <h1 className="verdana14bold">{headline}</h1>
            <p className="verdana14regular">{text}</p>
        </div>
    );
    }

export default PreviewSmallDescription;