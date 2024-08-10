import React from "react";
import PlayerTitleRow from "./PlayerTitleRow";
import Trennlinie from "../Trennlinie";
import '../../styles/Player.css'

const PlayerTitles = () => {
    return (
        <div className="section">
            <div className="headline-player">
                <p>Titel</p>
            </div>
            <div className="title-overview">
                <PlayerTitleRow competition="Wettbewerb" title="Titel" season="Saison"/>
                <Trennlinie />
                <PlayerTitleRow competition="Bundesliga" logo="Bundesliga" title="1x Meister" season="2026/2027"/>
                <Trennlinie />
                <PlayerTitleRow competition="DFB-Pokal Frauen" logo="DFB-Pokal" title="3x Sieger" season="2024/2025, 2027/2028, 2028/2029"/>
                <Trennlinie />
                <PlayerTitleRow competition="Women's Champions League" logo="Champions_League" title="1x Sieger" season="2026/2027"/>
                <Trennlinie />
            </div>
        </div>
    )

}

export default PlayerTitles;