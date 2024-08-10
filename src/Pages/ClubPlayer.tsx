import React from "react";
import Menu from "../Components/Menu/Menu";
import PlayerHeader from "../Components/Player/PlayerHeader";
import Player from "../Components/Player/Player";
import '../styles/Frames.css';

const ClubSquad = () => {
    return (
        <div className="club-frame">
            <Menu />
            <PlayerHeader />
            <div className="full-frame">
                <Player />
            </div>
        </div>
    )
}

export default ClubSquad;