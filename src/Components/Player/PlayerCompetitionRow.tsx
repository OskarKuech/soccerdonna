import React from "react";
import '../../styles/Player.css'

interface PlayerCompetitionRowProps {
    competition: string;
    logo?: string;
    appereances: string;
    value: string;
}

const PlayerCompetitionRow: React.FC <PlayerCompetitionRowProps> = ({competition, logo, appereances, value}) => {
    return (
        <div className="competition-row">
            <div className="competition-season"></div>
            <div className="competition-club">
                {logo && <img src={`/logo/competition/${logo}.png`} alt={`${competition} logo`} />}
                <p>{competition}</p>
            </div>
            <div className="competition-appereances">
                <p>{appereances}</p>
            </div>
            <div className="competition-stats">
                <p>{value}</p>
            </div>
            <div className="competition-more">
            </div>
        </div>
    )
}

export default PlayerCompetitionRow;