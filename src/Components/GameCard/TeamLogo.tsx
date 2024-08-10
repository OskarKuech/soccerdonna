import React from "react";
import "../../styles/Logo.css";

interface TeamLogoProps {
    image: string;
}

const TeamLogo: React.FC<TeamLogoProps> = ({ image }) => {
    return (
        <div className="logo60">
            <img src= {image} alt="Team Logo" />
        </div>
    );
}

export default TeamLogo;