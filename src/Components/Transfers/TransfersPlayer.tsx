import React from "react";
import '../../styles/Transfers.css';
import '../../styles/textstyle.css';
import '../../styles/Logo.css';

interface TransfersPlayerProps {
    firstName: string;
    lastName: string;
    position: string;
    age: number;
    nationality: string;
    club: string;
    logo: string;
    nationalFlagLeague: string;
    league: string;
    fee: string;
}

const TransfersPlayer: React.FC <TransfersPlayerProps> = ({firstName, lastName, position, age, nationality, club, logo, nationalFlagLeague, league, fee}) => {
    const imageUrl = `/images/player/${firstName}_${lastName}.png`;
    const altText = `${firstName} ${lastName}`;
    const nationalFlag =`/logo/country/Flag_${nationality}.png`;
    const flagLeague =`/logo/country/Flag_${nationalFlagLeague}.png`;

    return (
        <div className="player">
            <div className="transfer-player-image">
                <img src={imageUrl} alt={altText}/>
            </div>

            <div className="player-name-position">
                <p className="verdana18regular">{firstName} {lastName}</p>
                <p className="verdana16regular">{position}</p>
            </div>
            <div className="player-age">
                <p className="verdana18regular">{age} Jahre</p>
            </div>
            <div className="player-nationality logo32">
                <img src={nationalFlag} alt={nationality}/>
            </div>
            <div className="player-club-league">
                <div className="logo48">
                    <img src={`/logo/club/${logo}`} alt={club} />
                </div>
                <div className="player-club">
                    <p className="verdana18regular">{club}</p>
                    <div className="player-league"> 
                        <div className="logo16">
                            <img src={flagLeague} alt={league}/>
                        </div>
                            <p className="verdana16regular">{league}</p>
                    </div>
                </div>
            </div>
            <div className="player-fee">
                <p className="verdana18regular">{fee}</p>
            </div>
        </div>
    )
}

export default TransfersPlayer;