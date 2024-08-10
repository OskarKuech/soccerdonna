import React from "react";
import FilterSelected from "../Squad/FilterSelected";
import FilterUnselected from "../Squad/FilterUnselected";
import '../../styles/Filter.css';

interface FilterProps {
    selectedTab: string;
}

const Filter: React.FC<FilterProps> = ({ selectedTab }) => {
    const tabs = ["Gesamt", "Bundesliga", "DFB-Pokal", "Champions League"];

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