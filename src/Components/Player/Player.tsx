import React from "react";
import PlayerStatistic from "./PlayerStatistic";
import PlayerTitles from "./PlayerTitles";
import PlayerStations from "./PlayerStations";
import PlayerNews from "./PlayerNews";
import '../../styles/Player.css'

const Player = () => {
    return (
        <div className="player-frame">
            <PlayerStatistic />
            <PlayerTitles />
            <PlayerStations />
            <PlayerNews />
        </div>
    )
}

export default Player;