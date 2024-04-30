import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegComment, FaStar, FaStarHalfAlt } from 'react-icons/fa';

import MovieTypeDefiner from '../../MovieTypeDefiner/MovieTypeDefiner';

import './PopularReview.scss';

const PopularReview = ({ movie, reviewer }) => {
    const genRatingStar = (rating) => {
        const stars = [];
        let fullStar = Math.floor(rating);
        for (let i = 0; i < fullStar; ++i) {
            stars.push(<FaStar key={i} />);
        }
        if (rating - fullStar == 0.5)
            stars.push(<FaStarHalfAlt key={rating} />);
        return stars;
    };

    return (
        <div className='popular-review'>
            <div className='movie-img-container'>
                <img src={movie.img} alt={movie.name} />
            </div>
            <div className='review-container'>
                <h1>
                    <span>{movie.name}</span>{' '}
                    <span>
                        <span>{movie.releaseYear}</span>{' '}
                        <MovieTypeDefiner type={movie.type} />
                    </span>
                </h1>
                <div className='reviewer-info-container'>
                    <div className='reviewer-profile'>
                        <img src={reviewer.profileImg} alt='profile image' />
                        <div>
                            <p className='reviewer-name'>{reviewer.name}</p>
                            <p className='review-date'>{reviewer.dateTime}</p>
                        </div>
                    </div>
                    <p>
                        {
                            /* we have to call fuction here (must use an expression)*/
                            genRatingStar(reviewer.rating)
                        }
                    </p>
                </div>
                <p className='reviewer-review'>
                    {reviewer.review}{' '}
                    <Link
                        to='/'
                        onClick={(e) => e.preventDefault()}
                        className='review-read-link'
                    >
                        Read More
                    </Link>
                </p>
                <div className='interaction-info-container'>
                    <Link
                        to='/'
                        onClick={(e) => e.preventDefault()}
                        className='interaction-link'
                    >
                        <FaHeart className='interaction-icon heart' />
                        <span>{reviewer.likes} likes</span>
                    </Link>
                    <Link
                        to='/'
                        onClick={(e) => e.preventDefault()}
                        className='interaction-link'
                    >
                        <span>{reviewer.comments}</span>
                        <FaRegComment className='interaction-icon comment' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularReview;
