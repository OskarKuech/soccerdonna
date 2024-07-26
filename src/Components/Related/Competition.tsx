import React from "react";
import "../../styles/Related.css";

interface CompetitionProps {
    name: string;
}

const Competition: React.FC<CompetitionProps> = ({ name }) => {
  const imagePath = `/logo/competition/${name}.png`;

  return (
    <div className="competition">
        <img src={imagePath} alt={`${name} Logo`} />
        <div className="competition-name">
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Competition;