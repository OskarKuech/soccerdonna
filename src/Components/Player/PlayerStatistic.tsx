import React from "react";
import Filter from "./Filter";
import PlayerStatisticVisualSingle from "./PlayerStatisticVisualSingle";
import PlayerStatisticVisualMulti from "./PlayerStatisticVisualMulti";
import '../../styles/Player.css'
import '../../styles/textstyle.css'

const PlayerStatistic = () => {
    return (

            <div className="section">
                <div className="headline-player">
                    <p>Statistik</p>
                </div>
                <Filter selectedTab="Gesamt"/>
                <div className="stats-overview">
                    <PlayerStatisticVisualMulti 
                    category="Einsätze" value={19}
                    subCategoryFirst="Startelf" valueSubFirst={12}
                    subCategorySecond="Eingewechselt" valueSubSecond={7}/>
                    <PlayerStatisticVisualMulti 
                    category="Karten" value={1}
                    subCategoryFirst="Gelb" valueSubFirst={1}
                    subCategorySecond="Rot" valueSubSecond={0}/>
                    <PlayerStatisticVisualSingle category="gespielte Minuten" value={1119}/>
                    <PlayerStatisticVisualSingle category="Spiele zu Null" value={13}/>
                </div>
            </div>
    )
}

export default PlayerStatistic;