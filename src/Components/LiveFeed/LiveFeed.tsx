import React from 'react';
import '../../styles/Frames.css';
import Überschrift from '../LiveFeed/Überschrift';
import Trennlinie from '../Trennlinie';
import LiveSpiel from '../LiveFeed/LiveSpiel';

const LiveFeed = () => {
    return (
        <div className="live-feed">
            <Überschrift league="Bundesliga"/>
            <Trennlinie />
            <LiveSpiel teamNameHome="Eintracht Frankfurt" teamNameAway="Eintracht Frankfurt" score="2 : 3" />
            <Trennlinie />
            <LiveSpiel teamNameHome="Eintracht Frankfurt" teamNameAway="Eintracht Frankfurt" score="-:-" />
        </div>
    )
}

export default LiveFeed;