import React from "react";
import RelatedAttributeRow from "./RelatedAttributeRow";
import "../../styles/Related.css";

const Nationalteam = () => {
  return (
    <div className="related-container">
        <img src="/logo/nationalteam/Germany.png" alt="nationalteam logo"/>
            <div className="related">
                <div className="related-name">
                    <p>Eintract Frankfurt</p>
                </div>

                <RelatedAttributeRow title="Weltringliste" input="3."/>
                <RelatedAttributeRow title="Trainer" input="Horst Hrubesch"/>
                <RelatedAttributeRow title="Marktwert" input="3.515.000€"/>
            </div>

    </div>
  )
}

export default Nationalteam;