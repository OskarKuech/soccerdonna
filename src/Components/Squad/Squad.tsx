import React from "react";
import Filter from "./Filter";
import SquadPosition from "./SquadPosition";
import '../../styles/Squad.css';

const Squad = () => {
    return (
        <div className="squad">
            <Filter selectedTab="Alle" />
            <SquadPosition />
        </div>
    )
}

export default Squad;