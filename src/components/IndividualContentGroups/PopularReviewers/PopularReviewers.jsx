import React from 'react';

import ContentGroup from '../../ContentGroup/ContentGroup';
import PopReviewer from './PopReviewer';

import './PopularReviewers.scss';

const popReviewersData = [
    {
        name: 'HORROR_FREAK',
        films: 21873,
        reviews: 1822,
        followers: 121822,
        profileImg: new URL('/assets/user_profiles/pfp4.png', import.meta.url)
            .href,
    },
    {
        name: 'James (Schaffrillas)',
        films: 4873,
        reviews: 699,
        followers: 21892,
        profileImg: new URL('/assets/user_profiles/pfp5.jpeg', import.meta.url)
            .href,
    },
    {
        name: 'davidehrlich',
        films: 3873,
        reviews: 18422,
        followers: 1121822,
        profileImg: new URL('/assets/user_profiles/pfp6.jpeg', import.meta.url)
            .href,
    },
    {
        name: 'movie enjoyer',
        films: 873,
        reviews: 822,
        followers: 1822,
        profileImg: new URL('/assets/user_profiles/pfp1.jpeg', import.meta.url)
            .href,
    },
    {
        name: 'BRYAN Ruth',
        films: 21873,
        reviews: 1222,
        followers: 5422,
        profileImg: new URL('/assets/user_profiles/pfp3.jpeg', import.meta.url)
            .href,
    },
    {
        name: 'Spooky Astronauts',
        films: 21,
        reviews: 2,
        followers: 87,
        profileImg: new URL('/assets/user_profiles/pfp7.jpeg', import.meta.url)
            .href,
    },
];

const PopularReviewers = () => {
    return (
        <ContentGroup
            id='popular-reviewers'
            headingText='Popular reviewers'
            hasMore={true}
        >
            <div className='pop-reviewers-container'>
                {popReviewersData.map((reviewer, index) => {
                    return <PopReviewer key={index} reviewer={reviewer} />;
                })}
            </div>
        </ContentGroup>
    );
};

export default PopularReviewers;
