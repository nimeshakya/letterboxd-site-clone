import React from 'react';
import AboutIcon from '../AboutIcon/AboutIcon';

import './AboutDescription.scss';

const AboutDescription = ({ icon, description }) => {
    return (
        <div className='about-description'>
            <AboutIcon className='about-icon'>{icon}</AboutIcon>
            <p>{description}</p>
        </div>
    );
};

export default AboutDescription;
