import React from "react";
import ScheduleGameMatchupScore from "./ScheduleGameMatchupScore";
import '../../styles/Schedule.css';

interface ScheduleGameMatchupProps {
    clubHome: string;
    clubAway: string;
    score: string;
    logoHome: string;
    logoAway: string;
}

const ScheduleGameMatchup: React.FC <ScheduleGameMatchupProps> = ({ clubHome, clubAway, score, logoHome, logoAway }) => {
    return (
        <div className="schedule-game-matchup">
            <p className="schedule-game-club-home">{clubHome}</p>
            <ScheduleGameMatchupScore score={score} logoHome= {logoHome} logoAway={logoAway}/>
            <p className="schedule-game-club-away">{clubAway}</p>
        </div>
    )
}

export default ScheduleGameMatchup;