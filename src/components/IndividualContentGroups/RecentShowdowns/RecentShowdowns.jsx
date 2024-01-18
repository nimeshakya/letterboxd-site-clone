import React from 'react';

import ContentGroup from '../../ContentGroup/ContentGroup';
import Showdown from './Showdown';

import { recentShowdownsData } from './RecentShowdownsData';

import './RecentShowdowns.scss';

const RecentShowdowns = () => {
    return (
        <ContentGroup
            id='recent-showdowns'
            headingText='Recent Showdowns'
            hasMore={true}
        >
            <div className='showdowns-container'>
                {recentShowdownsData.map((showdown, index) => {
                    return <Showdown key={index} showdown={showdown} />;
                })}
            </div>
        </ContentGroup>
    );
};

export default RecentShowdowns;
