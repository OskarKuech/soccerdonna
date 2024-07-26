import React from "react";
import "../../styles/Article.css";

interface PreviewSuggestionProps {
    image: string;
    headline: string;
    text: string;
}

const PreviewSuggestion: React.FC<PreviewSuggestionProps> = ({ image, headline, text }) => {
    return (
        <div className="preview-suggestion">
            <img src= {image} alt= {headline} />
            <div className="preview-suggestion-content-container">
                <div className="preview-suggestion-content">
                    <h1>{headline}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default PreviewSuggestion;