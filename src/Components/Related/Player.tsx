import React from "react";
import RelatedAttributeRow from "./RelatedAttributeRow";
import "../../styles/Related.css";

const Player = () => {
  return (
    <div className="related-container">
        <img src="/images/player/Laura_Freigang.png" alt="Player"/>
            <div className="related">
                <div className="related-name">
                    <p>Laura Freigang</p>
                </div>

                <RelatedAttributeRow title="Verein" input="Eintracht Frankfurt"/>
                <RelatedAttributeRow title="Position" input="Mittelfeld"/>
                <RelatedAttributeRow title="Vertrag bis" input="30.07.2027"/>
            </div>

    </div>
  )
}

export default Player;