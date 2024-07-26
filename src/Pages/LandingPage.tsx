import React from 'react';
import ArticlePreviewFrame from '../Components/Frames/ArticlePreviewFrame';
import LiveFeed from '../Components/LiveFeed/LiveFeed';
import '../styles/Frames.css';

const LandingPage = () => {
    return (
        <div className="full-frame">
           <ArticlePreviewFrame />
            <div className='live-feed-frame'>
                <LiveFeed />
                <LiveFeed />
                <LiveFeed />
            </div>
        </div>
    )
}

export default LandingPage;