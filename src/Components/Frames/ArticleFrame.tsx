import React from 'react';
import PreviewGroß from '../Artikel/PreviewGroß';
import PreviewKleinFrame from './PreviewKleinFrame';
import '../../styles/Frames.css';

const ArticleFrame = () => {
    return (
        <div className='article-frame'>
            <PreviewGroß />
            <PreviewKleinFrame />
        </div>
    )
}

export default ArticleFrame;