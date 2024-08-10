import React from "react";
import TransfersHeadline from "./TransfersHeadline";
import Trennlinie from "../Trennlinie";
import TransferTableHeadline from "./TransferTableHeadline";
import TransfersPlayer from "./TransfersPlayer";
import '../../styles/Transfers.css';

const TransfersJoin = () => {
    return (
        <div className="transfers-container">
            <TransfersHeadline headline="Zugänge"/>
            <Trennlinie />
            <TransferTableHeadline club="Abgebender Verein"/>
            <Trennlinie />
            <TransfersPlayer firstName="Nina" lastName="Lührßen" position="Abwehr, links" age={24} nationality="Germany" club="SV Werder Bremen" logo="SV_Werder_Bremen.svg" nationalFlagLeague="Germany" league="Bundesliga" fee="ablösefrei"/>
            <Trennlinie />
            <TransfersPlayer firstName="Pia-Sophie" lastName="Wolter" position="Mittelfeld" age={26} nationality="Germany" club="VfL Wolfsburg" logo="Vfl_Wolfsburg.svg" nationalFlagLeague="Germany" league="Bundesliga" fee="75.000€"/>
            <Trennlinie />
            <TransfersPlayer firstName="Lea" lastName="Paulick" position="Tor" age={24} nationality="Germany" club="1. FC Nürnberg" logo="1._FC_Nuernberg.svg" nationalFlagLeague="Germany" league="2. Bundesliga" fee="25.000€"/>
            <TransfersPlayer firstName="Elisa" lastName="Senß" position="Mittelfeld, defensiv" age={26} nationality="Germany" club="Bayer 04 Leverkusen" logo="Bayer_04_Leverkusen.png" nationalFlagLeague="Germany" league="Bundesliga" fee="unbekannt"/>
            <Trennlinie />
            <TransfersPlayer firstName="Lina" lastName="Altenburg" position="Tor" age={19} nationality="Germany" club="Eintracht Frankfurt" logo="Eintracht_Frankfurt.svg" nationalFlagLeague="Germany" league="2. Bundesliga" fee="-"/>
        </div>
    )
}

export default TransfersJoin;