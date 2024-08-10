import React from "react";
import Menu from "../Components/Menu/Menu";
import ClubHeader from "../Components/Header/ClubHeader";
import '../styles/Frames.css';

const ClubStatistics = () => {
    return (
        <div className="club-frame">
            <Menu />
            <ClubHeader selectedTab="Statistik"/>
        </div>
    )
    }

export default ClubStatistics;