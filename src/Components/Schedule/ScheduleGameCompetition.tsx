import React from "react";
import '../../styles/Schedule.css';

interface ScheduleGameCompetitionProps {
    competition: string;
    logo: string;
}

const ScheduleGameCompetition: React.FC <ScheduleGameCompetitionProps> = ({ competition, logo }) => {
    return (
        <div className="schedule-game-competition">
            <div className="schedule-game-logo">
                <img src={`/logo/competition/${logo}`} alt={competition} />
            </div>
            <p>{competition}</p>
        </div>
    )
}

export default ScheduleGameCompetition;