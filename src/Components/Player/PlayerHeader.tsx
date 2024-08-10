import React from "react";
import PlayerInformation from "./PlayerInformation";
import '../../styles/Player.css';

const PlayerHeader = () => {
    return (
        <div className="header-frame">
            <div className="club-header-frame">
                <div className="player-image">
                    <img src="/images/player/Stina_Johannes.png" alt="Stina Johannes" />
                </div>
                <div className="informations">
                    <div className="personal">
                        <div className="name">
                            <p>Stina</p>
                            <p>Johannes</p>
                        </div>
                        <div className="player-position">  
                            <p>Torhüterin</p>
                        </div>
                    </div>
                    <PlayerInformation nationality="deutsch" birthday="01.01.2000" height={170} clubEntry="01.07.2022" />
                </div>
                <div className="number">
                    <p>1</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerHeader;