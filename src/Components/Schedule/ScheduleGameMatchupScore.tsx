import React from "react";
import '../../styles/Schedule.css';

interface ScheduleGameMatchupScoreProps {
    score: string;
    logoHome: string;
    logoAway: string;
}

const ScheduleGameMatchupScore: React.FC <ScheduleGameMatchupScoreProps> = ({score, logoHome, logoAway}) => {
    return (
        <div className="schedule-game-score-logo">
            <img src={`/logo/club/${logoHome}`} alt="Logo" />
            <p>{score}</p>
            <img src={`/logo/club/${logoAway}`} alt="Logo" />
        </div>
    )
}

export default ScheduleGameMatchupScore;