import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuChevronRightCircle, LuChevronLeftCircle } from 'react-icons/lu';

import ContentGroup from '../../ContentGroup/ContentGroup';
import { pop_week_movies } from '../../../images/ImagesData';

import './PopularThisWeek.scss';

const PopularThisWeek = () => {
    const [scrolledLeft, setScrolledLeft] = useState(false);
    const [hasContentLeft, setHasContentLeft] = useState(false);
    const [hasContentRight, setHasContentRight] = useState(false);
    const moviesContainerRef = useRef();
    const moviesSubContainerRef = useRef();
    const [subcontainerTranslateX, setSubcontainerTranslateX] = useState(0);

    // when scroll right button is clicked (when content is in left)
    const handleScrollRight = () => {
        const containerRect =
            moviesContainerRef.current.getBoundingClientRect();
        const subcontainerRect =
            moviesSubContainerRef.current.getBoundingClientRect();
        setSubcontainerTranslateX((subcontainerTranslateX) => {
            return subcontainerTranslateX + 190;
        });
    };

    // when scroll left button is clicked (when there is content in right)
    const handleScrollLeft = () => {
        const containerRect =
            moviesContainerRef.current.getBoundingClientRect();
        const subcontainerRect =
            moviesSubContainerRef.current.getBoundingClientRect();
        setSubcontainerTranslateX((subcontainerTranslateX) => {
            return subcontainerTranslateX - 190;
        });
    };

    useEffect(() => {
        handleScrollButtonToggle();
    }, [subcontainerTranslateX]);

    const handleScrollButtonToggle = () => {
        const containerRect =
            moviesContainerRef.current.getBoundingClientRect();
        const subcontainerRect =
            moviesSubContainerRef.current.getBoundingClientRect();
        const offsetX = 20;
        console.log(containerRect);
        console.log(subcontainerRect);
        if (subcontainerRect.x - offsetX < 0) {
            setHasContentLeft(true);
        } else {
            setHasContentLeft(false);
        }

        if (
            subcontainerRect.width + subcontainerRect.x - offsetX >
            containerRect.width
        ) {
            setHasContentRight(true);
        } else {
            setHasContentRight(false);
        }
    };

    useEffect(() => {
        handleScrollButtonToggle();
    }, []);

    return (
        <ContentGroup
            id='pop-week-content'
            headingText={'Popular this week'}
            hasMore={true}
        >
            {/* <div
                className={`pop-week-movies-container ${
                    scrolledLeft ? 'scroll-left' : 'scroll-right'
                }`}
            > */}
            <div
                className={`pop-week-movies-container`}
                ref={moviesContainerRef}
            >
                <div
                    className='pop-week-movies-subcontainer'
                    ref={moviesSubContainerRef}
                    style={{
                        transform: `translateX(${subcontainerTranslateX}px)`,
                        transition: 'transform 0.2s linear',
                    }}
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
            </div>
            {hasContentRight && (
                <button
                    className='scroll-btn scroll-left-btn'
                    onClick={handleScrollLeft}
                >
                    <LuChevronRightCircle />
                </button>
            )}
            {hasContentLeft && (
                <button
                    className='scroll-btn scroll-right-btn'
                    onClick={handleScrollRight}
                >
                    <LuChevronLeftCircle />
                </button>
            )}
        </ContentGroup>
    );
};

export default PopularThisWeek;
