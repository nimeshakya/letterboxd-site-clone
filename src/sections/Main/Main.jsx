import React, { useState } from 'react';

import PopularThisWeek from '../../components/IndividualContentGroups/PopularThisWeek/PopularThisWeek';
import PopularReviewsThisWeek from '../../components/IndividualContentGroups/PopularReviewsThisWeek/PopularReviewsThisWeek';

import './Main.scss';

const Main = () => {
    return (
        <main>
            <PopularThisWeek />
            <PopularReviewsThisWeek />
        </main>
    );
};

export default Main;
