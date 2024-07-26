import React from 'react';
import ArticleHeadline from '../Artikel/ArticleHeadline';
import ArticleImage from '../Artikel/ArticleImage';
import ArticleText from '../Artikel/ArticleText';
import Suggestion from '../Artikel/Suggestion';
import '../../styles/Frames.css';

const ArticleFrame = () => {
    return (
        <div className='article-frame-outline'>
            <div className='article-frame'>
                <ArticleHeadline date="04. Juli 2024, 13:37 Uhr" headline="Stürmerin Freigang bleibt bis 2027 bei Eintracht Frankfurt" />
                <ArticleImage />
                <ArticleText />
            </div>
            <div className='article-frame'>
                <Suggestion />
            </div>
        </div>
    )
}

export default ArticleFrame;