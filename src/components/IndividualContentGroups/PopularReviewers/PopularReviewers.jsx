import React from 'react';

import ContentGroup from '../../ContentGroup/ContentGroup';

import './PopularReviewers.scss';

const PopularReviewers = () => {
    return (
        <ContentGroup
            id='popular-reviewers'
            headingText='Popular reviewers'
            hasMore={true}
        >
            PopularReviews
        </ContentGroup>
    );
};

export default PopularReviewers;
