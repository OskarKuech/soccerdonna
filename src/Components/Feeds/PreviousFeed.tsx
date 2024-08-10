import React from 'react';
import '../../styles/Frames.css';
import Überschrift from './Überschrift';
import Trennlinie from '../Trennlinie';
import PreviousGame from '../GameCard/PreviousGame';

const PreviousFeed = () => {
    return (
        <div className="live-feed">
            <Überschrift league="Letzte Ergbegnisse"/>
            <Trennlinie />
            <PreviousGame teamNameHome="Eintracht Frankfurt" teamLogoHome='/logo/club/Eintracht_Frankfurt.svg' teamNameAway="SV Hegnach" teamLogoAway='/logo/club/SV_Hegnach.jpeg' score="2 : 0" competition='Testspiel'/>
            <Trennlinie />
            <PreviousGame teamNameHome="Bayer 04 Leverkusen" teamLogoHome='/logo/club/Bayer_04_Leverkusen.png' teamNameAway="Eintracht Frankfurt" teamLogoAway='/logo/club/Eintracht_Frankfurt.svg' score="1 : 1" competition='Testspiel'/>
            <Trennlinie />
            <PreviousGame teamNameHome="1. FC Köln" teamLogoHome='/logo/club/1._FC_Koeln.svg' teamNameAway="Eintracht Frankfurt" teamLogoAway='/logo/club/Eintracht_Frankfurt.svg' score="0 : 1" competition='Bundesliga'/>
            <Trennlinie />
            <PreviousGame teamNameHome="Eintracht Frankfurt" teamLogoHome='/logo/club/Eintracht_Frankfurt.svg' teamNameAway="SC Freiburg" teamLogoAway='/logo/club/SC_Freiburg.svg' score="4 : 2" competition='Bundesliga'/>
            <Trennlinie />
            <PreviousGame teamNameHome="TSG Hoffenheim" teamLogoHome='/logo/club/TSG_Hoffenheim.svg' teamNameAway="Eintracht Frankfurt" teamLogoAway='/logo/club/Eintracht_Frankfurt.svg' score="1 : 3" competition='Bundesliga'/>
        </div>
    )
}

export default PreviousFeed;