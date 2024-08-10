import React from "react";
import Team from "./Team";
import "../../styles/Liga.css";
import "../../styles/textstyle.css";

interface PreviousGameProps {
    teamNameHome: string;
    teamLogoHome: string;
    teamNameAway: string;
    teamLogoAway: string;
    score: string;
    competition: string;
}

const PreviousGame: React.FC<PreviousGameProps> = ({ teamNameHome, teamLogoHome, teamNameAway, teamLogoAway, score, competition }) => {
    return (
        <div className="live-spiel-outline">
            <div className="live-spiel">
                <Team teamName={teamNameHome} teamLogo={teamLogoHome}/>
                <p className="verdana30bold ">{score}</p>
                <Team teamName={teamNameAway} teamLogo= {teamLogoAway} />
            </div>
            <div className="competition">
            <p className="verdana14regular">{competition}</p>
            </div>
        </div>
    );
}

export default PreviousGame;