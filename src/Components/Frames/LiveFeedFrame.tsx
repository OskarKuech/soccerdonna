import React from 'react';
import LiveFeed from '../LiveFeed/LiveFeed';
import '../../styles/Frames.css';

const LiveFeedFrame = () => {
    return (
        <div className='live-feed-frame'>
            <LiveFeed />
            <LiveFeed />
            <LiveFeed />
        </div>
    )
}

export default LiveFeedFrame;