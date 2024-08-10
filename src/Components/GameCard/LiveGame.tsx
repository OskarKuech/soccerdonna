import React from "react";
import Team from "./Team";
import "../../styles/Liga.css";
import "../../styles/textstyle.css";

interface LiveGameProps {
    teamNameHome: string;
    teamLogoHome: string;
    teamNameAway: string;
    teamLogoAway: string;
    score: string;
}

const LiveGame: React.FC<LiveGameProps> = ({ teamNameHome, teamLogoHome, teamNameAway, teamLogoAway, score }) => {
    return (
        <div className="live-spiel">
            <Team teamName={teamNameHome} teamLogo={teamLogoHome}/>
            <p className="verdana30bold ">{score}</p>
            <Team teamName={teamNameAway} teamLogo= {teamLogoAway} />
        </div>
    );
}

export default LiveGame;