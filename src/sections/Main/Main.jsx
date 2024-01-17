import React, { useState } from 'react';

import PopularThisWeek from '../../components/IndividualContentGroups/PopularThisWeek/PopularThisWeek';
import PopularReviewsThisWeek from '../../components/IndividualContentGroups/PopularReviewsThisWeek/PopularReviewsThisWeek';
import RateMovieYourself from '../../components/IndividualContentGroups/RateMovieYourself/RateMovieYourself';
import RecentStories from '../../components/IndividualContentGroups/RecentStories/RecentStories';

import './Main.scss';

const Main = () => {
    return (
        <main>
            <PopularThisWeek />
            <PopularReviewsThisWeek />
            <RateMovieYourself />
            <RecentStories />
        </main>
    );
};

export default Main;
