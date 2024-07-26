import React from "react";
import "../../styles/Liga.css";

interface HeadlineProps {
    league: string;
}
const Headline: React.FC<HeadlineProps> = ({ league }) => {
    return (
        <div className="headline">
            <p>{league}</p>
        </div>

    )
}

export default Headline;