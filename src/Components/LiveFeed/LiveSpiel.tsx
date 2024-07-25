import React from "react";
import Team from "./Team";
import "../../styles/Liga.css";

interface LiveSpielProps {
    teamNameHome: string;
    teamNameAway: string;
    score: string;
}

const LiveSpiel: React.FC<LiveSpielProps> = ({ teamNameHome, teamNameAway, score }) => {
    return (
        <div className="live-spiel">
            <Team teamName={teamNameHome}/>
            <p className="verdana30bold height60">{score}</p>
            <Team teamName={teamNameAway}/>
        </div>
    );
}

export default LiveSpiel;