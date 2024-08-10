import React from "react";
import Menu from "../Components/Menu/Menu";
import ClubHeader from "../Components/Header/ClubHeader";
import Transfers from "../Components/Transfers/Transfers";
import '../styles/Frames.css';

const ClubTransfers = () => {
    return (
        <div className="club-frame">
            <Menu />
            <ClubHeader selectedTab="Transfers"/>
            <div className="full-frame">
                <Transfers />
            </div>
        </div>
    )
}

export default ClubTransfers;