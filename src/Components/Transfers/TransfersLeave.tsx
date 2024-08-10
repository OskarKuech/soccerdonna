import React from "react";
import TransfersHeadline from "./TransfersHeadline";
import Trennlinie from "../Trennlinie";
import TransferTableHeadline from "./TransferTableHeadline";
import TransfersPlayer from "./TransfersPlayer";
import '../../styles/Transfers.css';

const TransfersLeave = () => {
    return (
        <div className="transfers-container">
            <TransfersHeadline headline="Abgänge"/>
            <Trennlinie />
            <TransferTableHeadline club="Abgebender Verein"/>
            <Trennlinie />
            <TransfersPlayer firstName="Verena" lastName="Hanshaw" position="Abwehr, links" age={30} nationality="Germany" club="AS Roma" logo="AS_Roma.svg" nationalFlagLeague="Italy" league="Serie A" fee="ablösefrei"/>
            <Trennlinie />
            <TransfersPlayer firstName="Hannah" lastName="Johan" position="Tor" age={21} nationality="Germany" club="North Carolina Tar Heels" logo="North_Carolina_Tar_Heels.svg" nationalFlagLeague="USA" league="University of North Carolina Athletics" fee="ablösefrei"/>
            <Trennlinie />
            <TransfersPlayer firstName="Virginia" lastName="Kirchberger" position="Abwehr" age={31} nationality="Austria" club="FK Austria Wien" logo="Austria_Wien.svg" nationalFlagLeague="Austria" league=" Frauen Bundesliga" fee="ablösefrei"/>
            <TransfersPlayer firstName="Jonna" lastName="Brengel" position="Mittelfeld, offensiv" age={19} nationality="Germany" club="1. FC Nürnberg" logo="1._FC_Nuernberg.svg" nationalFlagLeague="Germany" league="2. Bundesliga" fee="unbekannt"/>
            <Trennlinie />
            <TransfersPlayer firstName="Cara" lastName="Bösl" position="Tor" age={27} nationality="Germany" club="1. FC Union Berlin" logo="1._FC_Union_Berlin.svg" nationalFlagLeague="Germany" league="2. Bundesliga" fee="ablösefrei"/>
        </div>
    )
}

export default TransfersLeave;