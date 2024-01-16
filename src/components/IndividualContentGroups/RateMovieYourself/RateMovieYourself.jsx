import React from 'react';

import ContentGroup from '../../ContentGroup/ContentGroup';
import UserRatingCard from './UserRatingCard';

import { userRatableMovies } from './RatingMoviesData';

import './RateMovieYourself.scss';

const RateMovieYourself = () => {
    return (
        <ContentGroup
            id='self-rate-group'
            headingText='Rate movies yourself'
            description='Write and share reviews. Compile your own lists. Share your life in film.'
        >
            <div className='rating-movies-container'>
                {userRatableMovies.map((movie, index) => {
                    return <UserRatingCard key={index} movie={movie} />;
                })}
            </div>
        </ContentGroup>
    );
};

export default RateMovieYourself;
