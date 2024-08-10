import React from "react";
import '../../styles/Playercard.css';

interface PlayerCardInfoProps {
    number: string;
    firstName: string;
    lastName: string;
}

const PlayerCardInfo: React.FC <PlayerCardInfoProps> = ({number, firstName, lastName}) => {
    return (
        <div className="playercard-info gradient-background">
            <div className="playercard-name">
                <p>{number}</p>
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
        </div>
    )
}

export default PlayerCardInfo;