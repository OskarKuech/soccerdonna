import React from "react";
import TeamLogo from "./TeamLogo";
import "../../styles/Liga.css";
import "../../styles/textstyle.css";

interface TeamProps {
    teamName: string;
}

const Team: React.FC<TeamProps> = ({ teamName }) => {
    return (
        <div className="team">
            <TeamLogo />
            <p className="verdana12regular centered">{teamName}</p>
        </div>
    );
}

export default Team;