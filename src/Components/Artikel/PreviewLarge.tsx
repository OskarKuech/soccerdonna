import React from "react";
import "../../styles/Article.css";
import "../../styles/textstyle.css";


const PreviewLarge = () => {
    return (
        <div className="preview-large">
            <img src="/images/Laura_Freigang_Vertragsverlangerung.webp" alt="Laura Freigang Vertragsverlängerung" />
            <div className="preview-large-text">
                <h1 className="verdana18bold">Stürmerin Freigang bleibt bis 2028 bei Eintracht Frankfurt</h1>
                <p className="verdana18regular">Nationalspielerin Laura Freigang geht auch in den nächsten drei Jahren für Eintracht Frankfurt auf Torejagd. Die 26 Jahre alte Stürmerin hat ihren im nächsten Sommer auslaufenden Vertrag beim Fußball-Bundesligisten vorzeitig um zwei Jahre bis zum 30. Juni 2027 verlängert.</p>
                <p className="verdana14regular">04. Juli 2024</p>
            </div>
        </div>
    );
    }

export default PreviewLarge;