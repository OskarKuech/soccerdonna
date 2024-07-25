import React from 'react';
import '../../styles/Frames.css';
import ArticleFrame from './ArticleFrame';
import LiveFeedFrame from './LiveFeedFrame';

const FullFrame = () => {
    return (
        <div className="full-frame">
           <ArticleFrame />
           <LiveFeedFrame />
        </div>
    )
}

export default FullFrame;