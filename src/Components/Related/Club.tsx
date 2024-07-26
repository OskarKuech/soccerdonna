import React from "react";
import RelatedAttributeRow from "./RelatedAttributeRow";
import "../../styles/Related.css";

const Club = () => {
  return (
    <div className="related-container">
        <img src="/logo/club/Eintracht_Frankfurt.svg" alt="Club Logo"/>
            <div className="related">
                <div className="related-name">
                    <p>Eintract Frankfurt</p>
                </div>

                <RelatedAttributeRow title="Liga" input="Bundesliga"/>
                <RelatedAttributeRow title="Trainer" input="Niko Arnautis"/>
                <RelatedAttributeRow title="Marktwert" input="1.750.000€"/>
            </div>

    </div>
  )
}

export default Club;