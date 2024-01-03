import React from 'react';

import Button from '../../components/Button/Button';

import './Hero.scss';

const Hero = () => {
    return (
        <section className='section-hero'>
            <div className='hero-img-container'></div>
            <div className='hero-interaction-container'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='56'
                    height='8'
                    viewBox='0 0 56 8'
                    fill='none'
                >
                    <circle cx='4' cy='4' r='4' fill='#E3B55F' />
                    <circle
                        cx='28'
                        cy='4'
                        r='4'
                        fill='white'
                        fill-opacity='0.8'
                    />
                    <circle cx='52' cy='4' r='4' fill='white' />
                </svg>
                <Button className='get-started-btn'>
                    Get Started - It's Free!
                </Button>
            </div>
        </section>
    );
};

export default Hero;
