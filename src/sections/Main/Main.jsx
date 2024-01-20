import React, { useState } from 'react';

import PopularThisWeek from '../../components/IndividualContentGroups/PopularThisWeek/PopularThisWeek';
import PopularReviewsThisWeek from '../../components/IndividualContentGroups/PopularReviewsThisWeek/PopularReviewsThisWeek';
import RateMovieYourself from '../../components/IndividualContentGroups/RateMovieYourself/RateMovieYourself';
import PopularLists from '../../components/IndividualContentGroups/PopularLists/PopularLists';
import PopularReviewers from '../../components/IndividualContentGroups/PopularReviewers/PopularReviewers';
import RecentStories from '../../components/IndividualContentGroups/RecentStories/RecentStories';
import RecentNews from '../../components/IndividualContentGroups/RecentNews/RecentNews';
import RecentShowdowns from '../../components/IndividualContentGroups/RecentShowdowns/RecentShowdowns';

import './Main.scss';

const Main = () => {
    return (
        <main>
            <PopularThisWeek />
            <PopularReviewsThisWeek />
            <RateMovieYourself />
            <div className='popular-container'>
                <PopularLists />
                <PopularReviewers />
            </div>
            <RecentStories />
            <RecentNews />
            <RecentShowdowns />
        </main>
    );
};

export default Main;
