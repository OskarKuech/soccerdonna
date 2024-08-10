import React, { useState } from "react";
import '../../styles/Player.css';

interface PlayerStationsRowProps {
    season: string;
    club: string;
    logo?: string;
    appereances: string;
    value: string;
    more?: string;
    children?: React.ReactNode;
}

const PlayerStationsRow: React.FC<PlayerStationsRowProps> = ({
    season, club, logo, appereances, value, more, children
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div className="stations-row">
                <div className="stations-season">
                    <p>{season}</p>
                </div>
                <div className="stations-club">
                    {logo && <img src={`/logo/club/${logo}`} alt={`${club} logo`} />}
                    <p>{club}</p>
                </div>
                <div className="stations-appereances">
                    <p>{appereances}</p>
                </div>
                <div className="stations-stats">
                    <p>{value}</p>
                </div>
                <div className="stations-more" onClick={toggleExpand}>
                    <img src="/icons/arrow.svg" alt="Arrow" style={{ transform: isExpanded ? 'rotate(270deg)' : 'rotate(90deg)' }} />
                </div>
            </div>
            {isExpanded && children}
        </div>
    );
}

export default PlayerStationsRow;