import React from "react";
import "../../styles/Article.css";
import "../../styles/textstyle.css";
import PreviewKleinBeschreibung from "./PreviewKleinBeschreibung";

interface ArtikelProps {
    image: string;
    headline: string;
    text: string;
    date: string;
}
const PreviewKlein: React.FC<ArtikelProps> = ({ image, headline, text, date }) => {
    return (
        <div className="preview-klein">
            <img src={image} alt={headline} />
            <PreviewKleinBeschreibung headline={headline} text={text} />
            <p className="verdana12regular">{date}</p>
        </div>
    );
}

export default PreviewKlein;