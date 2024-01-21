import React from 'react';
import { Link } from 'react-router-dom';

import './PopReviewer.scss';

const PopReviewer = ({ reviewer }) => {
    return (
        <div className='pop-reviewer'>
            <img src={reviewer.profileImg} alt={reviewer.name} />
            <div className='reviewer-description-container'>
                <h2>{reviewer.name}</h2>
                <div className='interaction-count-container'>
                    <Link
                        to='/'
                        onClick={(e) => e.preventDefault()}
                        className='interaction-count-link'
                    >
                        <span>
                            {/* Comma seperate breaks on numbers */}
                            {reviewer.films
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </span>
                        Films
                    </Link>
                    <Link
                        to='/'
                        onClick={(e) => e.preventDefault()}
                        className='interaction-count-link'
                    >
                        <span>
                            {reviewer.reviews
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </span>
                        Reviews
                    </Link>
                    <Link
                        to='/'
                        onClick={(e) => e.preventDefault()}
                        className='interaction-count-link'
                    >
                        <span>
                            {reviewer.followers
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </span>
                        Followers
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopReviewer;
