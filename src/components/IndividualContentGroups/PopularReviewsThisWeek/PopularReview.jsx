import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegComment, FaStar, FaStarHalfAlt } from 'react-icons/fa';

import './PopularReview.scss';

const PopularReview = ({ movie, reviewer }) => {
    console.log(movie, reviewer);

    const genRatingStar = (rating) => {
        const stars = [];
        let fullStar = Math.floor(rating);
        for (let i = 0; i < fullStar; ++i) {
            stars.push(<FaStar />);
        }
        if (rating - fullStar == 0.5) stars.push(<FaStarHalfAlt />);
        return stars;
    };

    return (
        <div className='popular-review'>
            <div className='movie-img-container'>
                <img src={movie.img} alt={movie.name} />
            </div>
            <div className='review-container'>
                <h1>
                    <span>{movie.name}</span> <span>{movie.releaseYear}</span>{' '}
                    <span>
                        <p>{movie.type}</p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='57'
                            height='36'
                            viewBox='0 0 57 36'
                            fill='none'
                        >
                            <path
                                d='M33.6202 33.8772C30.5353 32.0092 26.1752 31.9531 23.052 33.7397C20.8947 34.9739 18.4526 35.6698 15.866 35.6698C7.10347 35.6698 0 27.6847 0 17.8349C0 7.9848 7.10347 0 15.866 0C18.5844 0 21.1432 0.768538 23.3798 2.12286C26.4647 3.99091 30.8248 4.0469 33.9477 2.26025C36.1053 1.02607 38.5474 0.330281 41.134 0.330281C49.8966 0.330281 57 8.31525 57 18.1651C57 28.0152 49.8966 36 41.134 36C38.4156 36 35.8568 35.2316 33.6202 33.8772Z'
                                fill='#3B98DF'
                            />
                        </svg>
                    </span>
                </h1>
                <div className='reviewer-info-container'>
                    <img src={reviewer.profileImg} alt='profile image' />
                    <div>
                        <p className='reviewer-name'>{reviewer.name}</p>
                        <p className='review-date'>{reviewer.dateTime}</p>
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
