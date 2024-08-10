import React from "react";
import Menu from "../Components/Menu/Menu";
import ClubHeader from "../Components/Header/ClubHeader";
import Schedule from "../Components/Schedule/Schedule";
import '../styles/Frames.css';

const ClubFixtures = () => {
    return (
        <div className="club-frame">
            <Menu />
            <ClubHeader selectedTab="Termine"/>
            <div className="full-frame">
                <Schedule />
            </div>
        </div>
    )
}

export default ClubFixtures;