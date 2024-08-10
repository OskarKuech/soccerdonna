import React from "react";
import '../../styles/Stadium.css';

interface StadiumInfoProps {
    category: string;
    value: string;
}

const StadiumInfo: React.FC <StadiumInfoProps> = ({category, value}) => {
    return (
        <div className="stadium-info-row">
            <p>{category}</p>
            <p>{value}</p>
        </div>
    )
}

export default StadiumInfo;