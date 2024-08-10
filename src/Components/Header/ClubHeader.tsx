import React from "react";
import Navigation from "./Navigation";
import '../../styles/Frames.css';
import '../../styles/Logo.css';

interface ClubHeaderProps {
    selectedTab: string;
}

const ClubHeader: React.FC<ClubHeaderProps> = ({ selectedTab }) => {
    return (
        <div className="header-frame">
            <div className="club-header-frame">
                <div className="logo200">
                    <img src="/logo/club/Eintracht_Frankfurt.svg" alt="Eintracht Frankfurt" />
                </div>
                <div className="name-stadium">
                    <h1>Eintracht Frankfurt</h1>
                    <p>Stadion am Brentanobad</p>
                </div>
            </div>
            <Navigation selectedTab={selectedTab} />
        </div>
    )
}

export default ClubHeader;