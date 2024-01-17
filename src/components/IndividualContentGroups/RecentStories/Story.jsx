import React from 'react';
import { Link } from 'react-router-dom';
import { FaCirclePlay } from 'react-icons/fa6';

import './Story.scss';

const Story = ({ story }) => {
    return (
        <div className='recent-story'>
            <h1>
                <span>
                    <img src={story.userImg} alt='user image' />
                    {story.username}
                </span>
                <span>{story.date}</span>
            </h1>
            <div className='story-media-container'>
                <img src={story.movieImg} alt='movie image' />
                {story.hasVideo && (
                    <Link
                        to='/'
                        onClick={(e) => e.preventDefault()}
                        className='video-play-btn'
                    >
                        <FaCirclePlay />
                    </Link>
                )}
            </div>
            <div className='story-desc-container'>
                <h2>{story.heading}</h2>
                <p>{story.description}</p>
                <Link
                    to='/'
                    onClick={(e) => e.preventDefault()}
                    className='story-read-more'
                >
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default Story;
