import React from "react";
import "../../styles/Liga.css";
import "../../styles/textstyle.css"

interface HeadlineProps {
    league: string;
}
const Headline: React.FC<HeadlineProps> = ({ league }) => {
    return (
        <div className="feed-headline verdana18bold">
            <p>{league}</p>
        </div>

    )
}

export default Headline;