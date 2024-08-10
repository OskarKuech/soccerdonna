import React from "react";
import FilterSelected from "./FilterSelected";
import FilterUnselected from "./FilterUnselected";
import '../../styles/Filter.css';

interface FilterProps {
    selectedTab: string;
}

const Filter: React.FC<FilterProps> = ({ selectedTab }) => {
    const tabs = ["Alle", "Tor", "Abwehr", "Mittelfeld", "Sturm", "Trainerteam"];

    return (
        <div className="filter-frame">
            {tabs.map(tab => 
                tab === selectedTab ? 
                <FilterSelected key={tab} name={tab} /> : 
                <FilterUnselected key={tab} name={tab} />
            )}
        </div>
    )
}

export default Filter;