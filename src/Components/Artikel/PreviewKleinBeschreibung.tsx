import React from "react";
import "../../styles/Article.css";
import "../../styles/textstyle.css";

interface ArtikelProps {
    headline: string;
    text: string;
}
const PreviewKleinBeschreibung: React.FC<ArtikelProps> = ({ headline, text }) => {
    return (
        <div className="preview-klein-beschreibung">
            <h1 className="verdana14bold">{headline}</h1>
            <p className="verdana14regular">{text}</p>
        </div>
    );
    }

export default PreviewKleinBeschreibung;