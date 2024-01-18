import React from 'react';

import './Showdown.scss';

const Showdown = ({ showdown }) => {
    return (
        <div className='showdown'>
            <img src={showdown.img} alt='movie poster' />
            <div className='description-container'>
                <h1>
                    <span>{showdown.movie}</span>
                    <span>|</span>
                    <span>{showdown.year}</span>
                </h1>
                <p>{showdown.description}</p>
            </div>
        </div>
    );
};

export default Showdown;
