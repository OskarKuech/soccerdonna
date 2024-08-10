import React, { useState } from "react";
import PlayerCardInfo from "./PlayerCardInfo";
import PlayerCardInfoHover from "./PlayerCardInfoHover";
import '../../styles/Playercard.css';

interface PlayerCardProps {
    number: string;
    firstName: string;
    lastName: string;
    type: string;
}

const PlayerCard: React.FC <PlayerCardProps> = ({number, firstName, lastName, type}) => {
    const [isHovered, setIsHovered] = useState(false);
    const imageUrl = `/images/player/${firstName}_${lastName}.png`;
    const altText = `${firstName} ${lastName}`;

    return (
        <div
            className="playercard"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? <PlayerCardInfoHover number={number} firstName={firstName} lastName={lastName} type={type}/> : <PlayerCardInfo number={number} firstName={firstName} lastName={lastName}/>}
            <img src={imageUrl} alt={altText}/>
        </div>
    );
};

export default PlayerCard;
