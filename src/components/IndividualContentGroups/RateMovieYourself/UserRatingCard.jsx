import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';

import MovieTypeDefiner from '../../MovieTypeDefiner/MovieTypeDefiner';

import './UserRatingCard.scss';

const UserRatingCard = ({ movie }) => {
    const [ratingStars, setRatingStars] = useState([]);

    useEffect(() => {
        if (ratingStars.length < 5) {
            for (let i = 0; i < 5; ++i) {
                setRatingStars((ratingStars) => {
                    return [
                        ...ratingStars,
                        <FaRegStar key={i} className='rating-stars' />,
                    ];
                });
            }
        }
    }, []);

    const handleRatingClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className='user-rating-card'>
            <div className='rating-desc-container'>
                <h1>
                    {movie.name} <MovieTypeDefiner type={movie.type} />
                </h1>
                <img src={movie.img} alt={movie.name} />
                <p>Directed by {movie.director}</p>
                <div className='rating-movie-desc'>
                    <h2>{movie.descHeading}</h2>
                    <p>{movie.desc}</p>
                </div>
            </div>
            <Link
                to='/'
                onClick={handleRatingClick}
                className='rating-stars-container'
            >
                {ratingStars}
            </Link>
        </div>
    );
};

export default UserRatingCard;
