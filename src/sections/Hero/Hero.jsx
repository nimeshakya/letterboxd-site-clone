import React, { useRef, useEffect, useState } from 'react';

import Button from '../../components/Button/Button';
import CorouselSlideIndicator from '../../components/CorouselSlideIndicator/CorouselSlideIndicator';

import './Hero.scss';

const Hero = () => {
    const corouselImgRef = useRef();
    const [displayedImg, setDisplayedImg] = useState(0); // index for shown image

    useEffect(() => {
        const timer = setInterval(() => {
            // change displayed image index
            if (displayedImg < 2) {
                setDisplayedImg((displayedImg) => {
                    return displayedImg + 1;
                });
            } else {
                setDisplayedImg(0);
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [displayedImg]);

    return (
        <section className='section-hero'>
            <div className='hero-corousel-container'>
                <div
                    className={`hero-img-container ${
                        displayedImg == 0
                            ? 'no-translate'
                            : displayedImg == 1
                            ? 'mid-translate'
                            : 'end-translate'
                    }`}
                    ref={corouselImgRef}
                >
                    <div className='hero-img hero-img-1'>
                        <h1>
                            <span>Track</span> films you've watched.
                        </h1>
                    </div>
                    <div className='hero-img hero-img-2'>
                        <h1>
                            <span>Save</span> those you want to see.
                        </h1>
                    </div>
                    <div className='hero-img hero-img-3'>
                        <h1>
                            <span>Tell</span> your friends what's good.
                        </h1>
                    </div>
                </div>
            </div>

            <div className='hero-interaction-container'>
                <CorouselSlideIndicator highlightedPosition={displayedImg} />
                <Button className='get-started-btn'>
                    Get Started - It's Free!
                </Button>
            </div>
        </section>
    );
};

export default Hero;
