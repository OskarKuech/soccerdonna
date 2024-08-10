import React from "react";
import "../../styles/Article.css";
import "../../styles/textstyle.css";

interface PreviewLargeClubProps {
    image: string;
    headline: string;
    date: string;
}

const PreviewLargeClub: React.FC<PreviewLargeClubProps> = ({ image, headline, date }) => {
    return (
        <div className="preview-large">
            <img src={image} alt={headline} />

            <div className="preview-large-text">
            <h1 className="verdana18bold">{headline}</h1>
            <p className="verdana14regular">{date}</p>
            </div>
        </div>
    );
}

export default PreviewLargeClub;