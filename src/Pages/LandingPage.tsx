import React from 'react';
import Menu from '../Components/Menu/Menu';
import MenuDropdown from '../Components/Menu/MenuDropdown';
import ArticlePreviewFrame from '../Components/Frames/ArticlePreviewFrame';
import LiveFeed from '../Components/Feeds/LiveFeed';
import '../styles/Frames.css';

const LandingPage = () => {
    return (
        <div className='club-frame'>
            <Menu />
            <MenuDropdown />
            <div className="full-frame">
                <ArticlePreviewFrame />
                    <div className='live-feed-frame'>
                        <LiveFeed />
                        <LiveFeed />
                        <LiveFeed />
                    </div>
                </div>
        </div>
    )
}

export default LandingPage;