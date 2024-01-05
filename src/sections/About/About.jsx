import React from 'react';
import { FaApple } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa6';
import {
    FaRegEye,
    FaRegHeart,
    FaListUl,
    FaRegStar,
    FaRegCalendar,
} from 'react-icons/fa6';
import { BsGrid } from 'react-icons/bs';
import AboutDescription from '../../components/AboutDescriptions/AboutDescription';

import './About.scss';

const About = () => {
    const descriptionSet1 = [
        {
            icon: <FaRegEye className='desc-icon' />,
            description:
                '    Keep track of every film you’ve ever watched (or just start from the day you join)',
        },
        {
            icon: <FaRegHeart className='desc-icon' />,
            description:
                '  Show some love for your favorite films, lists & reviews with a “like”',
        },
        {
            icon: <FaListUl className='desc-icon' />,
            description:
                'Write and share reviews, and follow friends and other memebers to read theirs',
        },
    ];
    const descriptionSet2 = [
        {
            icon: <FaRegStar className='desc-icon' />,
            description:
                '    Rate each film on a five-star scale (with halves) to record and share your reaction',
        },
        {
            icon: <FaRegCalendar className='desc-icon' />,
            description:
                'Keep a diary of your film watching (and upgrade to Pro for comprehensive stats)',
        },
        {
            icon: <BsGrid className='desc-icon' />,
            description:
                'Complile and share lists of films on any topic and keep a watchlist of films to see',
        },
    ];
    return (
        <section className='section-about'>
            <div className='about-container'>
                <div className='about-description-set about-description-set-1'>
                    {descriptionSet1.map((desc, index) => {
                        return (
                            <AboutDescription
                                key={index}
                                icon={desc.icon}
                                description={desc.description}
                            />
                        );
                    })}
                </div>

                <div className='description-header-container'>
                    <h1>
                        <FaQuoteLeft id='about-quote' /> Letterboxd lets you
                    </h1>
                    <p>The social network for film lovers</p>
                    <p>
                        Also available on <FaApple id='apple-icon' />
                    </p>
                </div>

                <div className='about-description-set about-description-set-2'>
                    {descriptionSet2.map((desc, index) => {
                        return (
                            <AboutDescription
                                key={index}
                                icon={desc.icon}
                                description={desc.description}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
