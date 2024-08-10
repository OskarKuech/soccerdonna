import React from "react";
import Team from "./Team";
import "../../styles/Liga.css";
import "../../styles/textstyle.css";

interface UpcomingGameProps {
    teamNameHome: string;
    teamLogoHome: string;
    teamNameAway: string;
    teamLogoAway: string;
    date: string;
    kickoff: string;
    competition: string;
}

const UpcomingGame: React.FC<UpcomingGameProps> = ({ teamNameHome, teamLogoHome, teamNameAway, teamLogoAway, date, kickoff, competition }) => {
    return (
        <div className="live-spiel-outline">
            <div className="live-spiel">
                <Team teamName={teamNameHome} teamLogo={teamLogoHome}/>
                <div className="upcoming-game">
                <p className="verdana14regular ">{date}</p>
                <p className="verdana12regular ">{kickoff}</p>
                </div>
                <Team teamName={teamNameAway} teamLogo= {teamLogoAway} />
            </div>
            <div className="competition-live-previous">
                <p className="verdana14regular">{competition}</p>
            </div>
        </div>
    );
}

export default UpcomingGame;