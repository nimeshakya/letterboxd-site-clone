import React from 'react';
import { Link } from 'react-router-dom';

import './News.scss';

const News = ({ news }) => {
    return (
        <div className='news-card'>
            <img src={news.img} alt='movie poster' />
            <div className='news-desc-container'>
                <p>
                    <span>{news.type}</span>
                    <span>{news.date}</span>
                </p>
                <div className='news-desc'>
                    <h1>{news.heading}</h1>
                    <p>
                        {news.description}{' '}
                        <Link
                            to='/'
                            onClick={(e) => e.preventDefault()}
                            className='news-more-link'
                        >
                            Read more
                        </Link>
                    </p>
                </div>
                <div className='news-more-info-container'>
                    <div className='user-container'>
                        <img src={news.authorImg} alt={news.author} />
                        <p>{news.author}</p>
                    </div>
                    <ul className='media-links'>
                        {
                            // make use of mediaLinks key here
                            news.mediaLinks.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <Link
                                            to='/'
                                            className='news-media-link'
                                        >
                                            {link.icon}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default News;
