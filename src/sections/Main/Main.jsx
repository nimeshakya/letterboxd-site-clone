import React, { useState } from 'react';

import PopularThisWeek from '../../components/IndividualContentGroups/PopularThisWeek/PopularThisWeek';
import PopularReviewsThisWeek from '../../components/IndividualContentGroups/PopularReviewsThisWeek/PopularReviewsThisWeek';
import RateMovieYourself from '../../components/IndividualContentGroups/RateMovieYourself/RateMovieYourself';

import './Main.scss';

const Main = () => {
    return (
        <main>
            <PopularThisWeek />
            <PopularReviewsThisWeek />
            <RateMovieYourself />
        </main>
    );
};

export default Main;
