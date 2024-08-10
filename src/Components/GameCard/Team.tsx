import React from "react";
import TeamLogo from "./TeamLogo";
import "../../styles/Liga.css";
import "../../styles/textstyle.css";

interface TeamProps {
    teamName: string;
    teamLogo: string;
}

const Team: React.FC<TeamProps> = ({ teamName, teamLogo }) => {
    return (
        <div className="team">
            <TeamLogo image={teamLogo}/>
            <p className="verdana12regular centered">{teamName}</p>
        </div>
    );
}

export default Team;