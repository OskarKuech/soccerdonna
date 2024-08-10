import React from "react";
import Trennlinie from "../Trennlinie";
import PlayerStationsHeadline from "./PlayerStationsHeadline";
import PlayerStationsRow from "./PlayerStationsRow";
import PlayerCompetitionRow from "./PlayerCompetitionRow";
import '../../styles/Player.css';

const PlayerStations = () => {
    return (
        <div className="section">
            <div className="headline-player">
                <p>Laufbahn</p>
            </div>
            <div className="stations-overview">
                <PlayerStationsHeadline season="Saison" club="Verein" appereances="Einsätze" value="Zu Null" more="Mehr" />
                <Trennlinie />
                <PlayerStationsRow season="seit 2022" club="Eintracht Frankfurt" logo="Eintracht_Frankfurt.svg" appereances="19" value="12">
                    <PlayerCompetitionRow competition="Bundesliga" logo="Bundesliga" appereances="12" value="9" />
                    <PlayerCompetitionRow competition="DFB-Pokal" logo="DFB-Pokal" appereances="5" value="3" />
                    <PlayerCompetitionRow competition="Women's Champions League Qualifikation" logo="Champions_League" appereances="2" value="0" />
                </PlayerStationsRow>
                <Trennlinie />
                <PlayerStationsRow season="2022" club="INAC Kōbe Leonessa" logo="Inac_Kobe_Leonessa.png" appereances="17" value="6">
                    <PlayerCompetitionRow competition="WE League" appereances="17" value="6" />
                </PlayerStationsRow>
                <Trennlinie />
                <PlayerStationsRow season="2018 - 2022" club="SGS Essen" logo="SGS_Essen.png" appereances="42" value="17">
                    <PlayerCompetitionRow competition="Bundesliga" logo="Bundesliga" appereances="37" value="14" />
                    <PlayerCompetitionRow competition="DFB-Pokal" logo="DFB-Pokal" appereances="5" value="3" />
                </PlayerStationsRow>
                <Trennlinie />
                <PlayerStationsRow season="2016 - 2018" club="FF USV Jena" logo="FF_USV_Jena.svg" appereances="36" value="29">
                    <PlayerCompetitionRow competition="Bundesliga" logo="Bundesliga" appereances="32" value="27" />
                    <PlayerCompetitionRow competition="DFB-Pokal" logo="DFB-Pokal" appereances="4" value="2" />
                </PlayerStationsRow>
                <Trennlinie />
            </div>
        </div>
    );
}

export default PlayerStations;