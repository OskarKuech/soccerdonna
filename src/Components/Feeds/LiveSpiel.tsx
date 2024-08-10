import React from "react";
import Team from "../GameCard/Team";
import "../../styles/Liga.css";
import "../../styles/textstyle.css";

interface UpcomingSpielProps {
    teamNameHome: string;
    teamLogoHome: string;
    teamNameAway: string;
    teamLogoAway: string;
    score: string;
}

const LiveSpiel: React.FC<UpcomingSpielProps> = ({ teamNameHome, teamLogoHome, teamNameAway, teamLogoAway, score }) => {
    return (
        <div className="live-spiel">
            <Team teamName={teamNameHome} teamLogo={teamLogoHome}/>
            <p className="verdana30bold ">{score}</p>
            <Team teamName={teamNameAway} teamLogo= {teamLogoAway} />
        </div>
    );
}

export default LiveSpiel;