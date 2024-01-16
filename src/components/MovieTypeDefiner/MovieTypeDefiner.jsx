import React from 'react';

import './MovieTypeDefiner.scss';

const MovieTypeDefiner = ({ type }) => {
    return (
        <span className='movie-type-definer'>
            <p>{type}</p>
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
    );
};

export default MovieTypeDefiner;
