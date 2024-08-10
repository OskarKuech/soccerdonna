import React from "react";
import '../../styles/Filter.css';

interface FilterSelectedProps {
    name: string;
}
const FilterSelected: React.FC<FilterSelectedProps> = ({ name }) => {
    return (
            <div className="filter-tab">
                <div className="title-frame">
                    <p>{name}</p>
                </div>
                <div className="underline-selected"></div>
            </div>
    )
}

export default FilterSelected;