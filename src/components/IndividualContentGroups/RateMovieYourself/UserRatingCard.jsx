import React from 'react';
import { FaRegStar } from 'react-icons/fa';

import MovieTypeDefiner from '../../MovieTypeDefiner/MovieTypeDefiner';

import './UserRatingCard.scss';

const UserRatingCard = ({ movie }) => {
    const renderRatingStars = () => {
        const stars = [];
        for (let i = 0; i < 5; ++i) {
            stars.push(<FaRegStar key={i} className='rating-stars' />);
        }
        return stars;
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
            <div className='rating-stars-container'>{renderRatingStars()}</div>
        </div>
    );
};

export default UserRatingCard;
