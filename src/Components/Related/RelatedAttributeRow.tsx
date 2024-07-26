import React from "react";
import "../../styles/Related.css";

interface RelatedAttributeRowProps {
    title: string;
    input: string;
}

const RelatedAttributeRow: React.FC<RelatedAttributeRowProps> = ({ title, input }) => {
  return (
    <div className="related-attribute-row">
      <div className="related-attribute-title">
                        <p>{title}:</p>
                    </div>
                    <div className="related-attribute-input">
                        <p>{input}</p>
                    </div>
    </div>
  )
}

export default RelatedAttributeRow;