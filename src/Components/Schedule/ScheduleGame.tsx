import React from "react";
import ScheduleGameDate from "./ScheduleGameDate";
import ScheduleGameMatchup from "./ScheduleGameMatchup";
import ScheduleGameCompetition from "./ScheduleGameCompetition";
import '../../styles/Schedule.css';

interface ScheduleGameProps {
    date: string;
    clubHome: string;
    clubAway: string;
    score: string;
    logoHome: string;
    logoAway: string;
    competition: string;
    logo: string;
}

const ScheduleGame: React.FC <ScheduleGameProps> = ({date, clubHome, clubAway, score, logoHome, logoAway, competition, logo}) => {
    return (
        <div className="schedule-game">
            <ScheduleGameDate date={date}/>
            <ScheduleGameMatchup clubHome={clubHome} clubAway={clubAway} score={score} logoHome={logoHome} logoAway={logoAway}/>
            <ScheduleGameCompetition logo={logo} competition={competition}/>
        </div>
    )
}

export default ScheduleGame;