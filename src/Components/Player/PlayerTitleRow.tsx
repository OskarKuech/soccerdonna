import React from "react";
import '../../styles/Player.css';

interface PlayerTitleLineProps {
    competition: string;
    logo?: string;
    title: string;
    season: string;
}

const PlayerTitleRow: React.FC<PlayerTitleLineProps> = ({ competition, logo, title, season }) => {
    return (
        <div className="title-row">
            <div className="title-competition">
                {logo && <img src={`/logo/competition/${logo}.png`} alt={`${competition} logo`} />}
                <p>{competition}</p>
            </div>
            <div className="title-titles">
                <p>{title}</p>
            </div>
            <div className="title-season">
                <p>{season}</p>
            </div>
        </div>
    );
}

export default PlayerTitleRow;