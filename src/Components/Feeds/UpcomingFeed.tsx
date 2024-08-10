import React from 'react';
import '../../styles/Frames.css';
import Überschrift from './Überschrift';
import Trennlinie from '../Trennlinie';
import UpcomingGame from '../GameCard/UpcomingGame';

const UpcomingFeed = () => {
    return (
        <div className="live-feed">
            <Überschrift league="Nächste Spiele"/>
            <Trennlinie />
            <UpcomingGame teamNameHome="Eintracht Frankfurt" teamLogoHome='/logo/club/Eintracht_Frankfurt.svg' teamNameAway="1. FC Nürnberg" teamLogoAway='/logo/club/1._FC_Nuernberg.svg' date='17.08.' kickoff='14:00' competition='Testspiel'/>
            <Trennlinie />
            <UpcomingGame teamNameHome="Eintracht Frankfurt" teamLogoHome='/logo/club/Eintracht_Frankfurt.svg' teamNameAway="TSG Hoffenheim" teamLogoAway='/logo/club/TSG_Hoffenheim.svg' date='24.08.' kickoff='14:00' competition='Testspiel'/>
            <Trennlinie />
            <UpcomingGame teamNameHome="Eintracht Frankfurt" teamLogoHome='/logo/club/Eintracht_Frankfurt.svg' teamNameAway="Carl Zeiss Jena" teamLogoAway='/logo/club/Carl_Zeiss_Jena.png' date='01.09.' kickoff='' competition='Bundesliga'/>
            <Trennlinie />
            <UpcomingGame teamNameHome="Eintracht Frankfurt" teamLogoHome='/logo/club/Eintracht_Frankfurt.svg' teamNameAway="Sporting Clube de Portugal" teamLogoAway='/logo/club/Sporting_Clube_de_Portugal.png' date='04.09.' kickoff='16:00' competition='Champions League Qualifikation'/>
            <Trennlinie />
            <UpcomingGame teamNameHome="Bayer 04 Leverkusen" teamLogoHome='/logo/club/Bayer_04_Leverkusen.png' teamNameAway="Eintracht Frankfurt" teamLogoAway='/logo/club/Eintracht_Frankfurt.svg' date='15.09.' kickoff='' competition='Bundesliga'/>
        </div>
    )
}

export default UpcomingFeed;