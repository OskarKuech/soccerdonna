import React from "react";
import '../../styles/Schedule.css';

interface ScheduleGameDateProps {
    date: string;
}

const ScheduleGameDate: React.FC<ScheduleGameDateProps> = ({ date }) => {
    return (
        <div className="schedule-game-date">
            <p>{date}</p>
        </div>
    )
}

export default ScheduleGameDate;