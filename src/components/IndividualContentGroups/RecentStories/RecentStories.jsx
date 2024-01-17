import React from 'react';

import ContentGroup from '../../ContentGroup/ContentGroup';
import Story from './Story';

import { storiesData } from './StoriesData';

import './RecentStories.scss';

const RecentStories = () => {
    return (
        <ContentGroup
            id='recent-stories'
            headingText='Recent stories'
            hasMore={true}
        >
            <div className='stories-container'>
                {storiesData.map((story, index) => {
                    return <Story story={story} />;
                })}
            </div>
        </ContentGroup>
    );
};

export default RecentStories;
