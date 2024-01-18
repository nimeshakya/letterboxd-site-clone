import React, { useState } from 'react';

import PopularThisWeek from '../../components/IndividualContentGroups/PopularThisWeek/PopularThisWeek';
import PopularReviewsThisWeek from '../../components/IndividualContentGroups/PopularReviewsThisWeek/PopularReviewsThisWeek';
import RateMovieYourself from '../../components/IndividualContentGroups/RateMovieYourself/RateMovieYourself';
import RecentStories from '../../components/IndividualContentGroups/RecentStories/RecentStories';
import RecentNews from '../../components/IndividualContentGroups/RecentNews/RecentNews';

import './Main.scss';

const Main = () => {
    return (
        <main>
            <PopularThisWeek />
            <PopularReviewsThisWeek />
            <RateMovieYourself />
            <RecentStories />
            <RecentNews />
        </main>
    );
};

export default Main;
