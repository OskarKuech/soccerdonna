import React from 'react';
import PreviewLarge from '../Artikel/PreviewLarge';
import PreviewSmallFrame from './PreviewSmallFrame';
import '../../styles/Frames.css';

const ArticlePreviewFrame = () => {
    return (
        <div className='article-frame'>
            <PreviewLarge/>
            <PreviewSmallFrame />
        </div>
    )
}

export default ArticlePreviewFrame;