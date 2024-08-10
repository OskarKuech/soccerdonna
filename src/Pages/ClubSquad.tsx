import React from "react";
import Menu from "../Components/Menu/Menu";
import ClubHeader from "../Components/Header/ClubHeader";
import Squad from "../Components/Squad/Squad";
import '../styles/Frames.css';

const ClubSquad = () => {
    return (
        <div className="club-frame">
            <Menu />
            <ClubHeader selectedTab="Kader"/>
            <div className="full-frame">
                <Squad/>
            </div>
        </div>
    )
}

export default ClubSquad;