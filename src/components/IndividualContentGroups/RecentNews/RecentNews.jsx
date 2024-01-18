import React from 'react';

import ContentGroup from '../../ContentGroup/ContentGroup';
import News from './News';

import { recentNewsData } from './RecentNewsData';

import './RecentNews.scss';

const RecentNews = () => {
    return (
        <ContentGroup id='recent-news' headingText='Recent News' hasMore={true}>
            <div className='news-container'>
                {recentNewsData.map((news, index) => {
                    return <News key={index} news={news} />;
                })}
            </div>
        </ContentGroup>
    );
};

export default RecentNews;
