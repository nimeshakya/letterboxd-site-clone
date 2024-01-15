import React from 'react';

import ContentGroup from '../../ContentGroup/ContentGroup';
// individual review component
import PopularReview from './PopularReview';
// popular reviews data
import { popularReviews } from './PopReviews';

import './PopularReviewsThisWeek.scss';

const PopularReviewsThisWeek = () => {
    return (
        <ContentGroup
            id='pop-week-reviews'
            headingText={'Popular reviews this week'}
            hasMore={true}
        >
            <div className='pop-reviews-container'>
                {popularReviews.map((review, index) => {
                    return (
                        <PopularReview
                            key={index}
                            movie={review.movie}
                            reviewer={review.reviewer}
                        />
                    );
                })}
            </div>
        </ContentGroup>
    );
};

export default PopularReviewsThisWeek;
