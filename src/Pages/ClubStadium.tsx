import React from "react";
import Menu from "../Components/Menu/Menu";
import ClubHeader from "../Components/Header/ClubHeader";
import Stadium from "../Components/Stadium/Stadium";
import '../styles/Frames.css';

const ClubStadium = () => {
    return (
        <div className="club-frame">
            <Menu />
            <ClubHeader selectedTab="Stadion"/>
            <div className="full-frame">
                <Stadium />
            </div>
        </div>
    )
}

export default ClubStadium;