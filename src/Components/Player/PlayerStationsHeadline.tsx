import React from "react";
import '../../styles/Player.css'

interface PlayerStationsHeadlineProps {
    season: string;
    club: string;
    appereances: string;
    value: string;
    more: string;
}

const PlayerStationsHeadline: React.FC <PlayerStationsHeadlineProps> = ({season, club, appereances, value, more}) => {
    return (
        <div className="stations-row">
            <div className="stations-season">
                <p>{season}</p>
            </div>
            <div className="stations-club">
                <p>{club}</p>
            </div>
            <div className="stations-appereances">
                <p>{appereances}</p>
            </div>
            <div className="stations-stats">
                <p>{value}</p>
            </div>
            <div className="stations-more">
                <p>{more}</p>
            </div>
        </div>
    )
}

export default PlayerStationsHeadline;