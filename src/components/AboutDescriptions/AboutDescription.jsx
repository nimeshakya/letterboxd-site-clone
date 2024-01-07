import React from 'react';

import './AboutDescription.scss';

const AboutDescription = ({ icon, description }) => {
    return (
        <div className='about-description'>
            <div className='about-icon'>{icon}</div>
            <p>{description}</p>
        </div>
    );
};

export default AboutDescription;
