import React, { useRef, useEffect, useState } from 'react';

import Button from '../../components/Button/Button';

import './Hero.scss';

const Hero = () => {
    const corouselImgRef = useRef();
    const [displayedImg, setDisplayedImg] = useState(0); // index for shown image

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('this running', displayedImg);
            console.log(corouselImgRef);
            switch (displayedImg) {
                case 0:
                    corouselImgRef.current.classList.add('no-translate');
                    corouselImgRef.current.classList.remove('mid-translate');
                    corouselImgRef.current.classList.remove('end-translate');
                    break;
                case 1:
                    corouselImgRef.current.classList.remove('no-translate');
                    corouselImgRef.current.classList.add('mid-translate');
                    corouselImgRef.current.classList.remove('end-translate');
                    break;
                case 2:
                    corouselImgRef.current.classList.remove('no-translate');
                    corouselImgRef.current.classList.remove('mid-translate');
                    corouselImgRef.current.classList.add('end-translate');
                    break;

                default:
                    break;
            }

            // change displayed image index
            if (displayedImg < 2) {
                setDisplayedImg((displayedImg) => {
                    return displayedImg + 1;
                });
            } else {
                setDisplayedImg(0);
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [displayedImg]);

    return (
        <section className='section-hero'>
            <div className='hero-corousel-container'>
                <div
                    className='hero-img-container mid-translate'
                    ref={corouselImgRef}
                >
                    <div className='hero-img hero-img-1'></div>
                    <div className='hero-img hero-img-2'></div>
                    <div className='hero-img hero-img-3'></div>
                </div>
            </div>

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
                        fillOpacity='0.8'
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
