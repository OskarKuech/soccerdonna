import React from "react";
import '../../styles/Filter.css';

interface FilterUnselectedProps {
    name: string;
}
const FilterUnselected: React.FC<FilterUnselectedProps> = ({ name }) => {
    return (
        <div className="filter-tab">
            <div className="title-frame">
                <p>{name}</p>
            </div>
            <div className="underline-unselected"></div>
        </div>
    )
}

export default FilterUnselected;