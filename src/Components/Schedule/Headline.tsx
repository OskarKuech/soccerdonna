import React from "react";
import "../../styles/Schedule.css";

interface HeadlineProps {
    month: string;
}
const Headline: React.FC<HeadlineProps> = ({ month }) => {
    return (
        <div className="headline">
            <p>{month}</p>
        </div>

    )
}

export default Headline;