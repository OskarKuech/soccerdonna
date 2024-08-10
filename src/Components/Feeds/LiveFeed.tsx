import React from 'react';
import '../../styles/Frames.css';
import Überschrift from './Überschrift';
import Trennlinie from '../Trennlinie';
import LiveSpiel from './LiveSpiel';

const LiveFeed = () => {
    return (
        <div className="live-feed">
            <Überschrift league="Bundesliga"/>
            <Trennlinie />
            <LiveSpiel teamNameHome="Eintracht Frankfurt" teamLogoHome='/logo/club/Eintracht_Frankfurt.svg' teamNameAway="SGS Essen" teamLogoAway='/logo/club/SGS_Essen.png' score="2 : 3" />
            <Trennlinie />
            <LiveSpiel teamNameHome="Turbine Potsdam" teamLogoHome='/logo/club/Turbine_Potsdam.png' teamNameAway="Eintracht Frankfurt" teamLogoAway='/logo/club/Eintracht_Frankfurt.svg' score="-:-" />
        </div>
    )
}

export default LiveFeed;