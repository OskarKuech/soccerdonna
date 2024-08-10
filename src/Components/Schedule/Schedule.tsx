import React from "react";
import ScheduleMonth from "./ScheduleMonth";
import "../../styles/Frames.css";

const Schedule = () => {
    return (
        <div className="schedule-month-overview">
            <ScheduleMonth/>
            <ScheduleMonth/>
            <ScheduleMonth/>
            <ScheduleMonth/>
        </div>
    )
}

export default Schedule;