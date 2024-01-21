import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaComment } from 'react-icons/fa6';

import './PopList.scss';

const PopList = ({ list }) => {
    return (
        <div className='pop-list'>
            <div className='posters-container'>
                {list.movies.map((movie, index) => {
                    console.log(movie);
                    return (
                        <div key={index} className='pop-list-posters'>
                            <img src={movie.img} alt='movie poster' />
                        </div>
                    );
                })}
            </div>
            <div className='list-author-container'>
                <p>{list.description}</p>
                <div className='author-and-interaction'>
                    <img src={list.authorImg} alt={list.author} />
                    <p>{list.author}</p>
                    <Link
                        to='/'
                        className='interaction-link'
                        onClick={(e) => e.preventDefault()}
                    >
                        <FaHeart className='interaction-icon heart' />{' '}
                        {/* changing numbers to comma seperated string here */}
                        {list.likes
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                        likes
                    </Link>
                    <Link
                        to='/'
                        className='interaction-link'
                        onClick={(e) => e.preventDefault()}
                    >
                        <FaComment className='interaction-icon comment' />{' '}
                        {list.comments
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopList;
