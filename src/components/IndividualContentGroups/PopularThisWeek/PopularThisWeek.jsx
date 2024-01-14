import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuChevronRightCircle, LuChevronLeftCircle } from 'react-icons/lu';

import ContentGroup from '../../ContentGroup/ContentGroup';
import { pop_week_movies } from '../../../images/ImagesData';

import './PopularThisWeek.scss';

const PopularThisWeek = () => {
    const [scrolledLeft, setScrolledLeft] = useState(false);

    const handleScroll = () => {
        setScrolledLeft(!scrolledLeft);
    };

    return (
        <ContentGroup
            id='pop-week-content'
            headingText={'Popular this week'}
            hasMore={true}
        >
            <div
                className={`pop-week-movies-container ${
                    scrolledLeft ? 'scroll-left' : 'scroll-right'
                }`}
            >
                {pop_week_movies.map((movie, index) => {
                    return (
                        <Link
                            key={index}
                            className='pop-week-movie-link'
                            onClick={(e) => e.preventDefault()}
                        >
                            <img src={movie.img} alt={movie.description} />
                        </Link>
                    );
                })}
            </div>
            {!scrolledLeft && (
                <button
                    className='scroll-btn scroll-left-btn'
                    onClick={handleScroll}
                >
                    <LuChevronRightCircle />
                </button>
            )}
            {scrolledLeft && (
                <button
                    className='scroll-btn scroll-right-btn'
                    onClick={handleScroll}
                >
                    <LuChevronLeftCircle />
                </button>
            )}
        </ContentGroup>
    );
};

export default PopularThisWeek;
