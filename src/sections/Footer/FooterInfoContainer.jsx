import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaTiktok,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import './FooterInfoContainer.scss';

const FooterInfoContainer = () => {
    const companyInfoLinks = [
        {
            name: 'About us',
            link: '/',
        },
        {
            name: 'Help',
            link: '/',
        },
        {
            name: 'Terms',
            link: '/',
        },
        {
            name: 'API',
            link: '/',
        },
    ];

    const featuresInfoLinks = [
        {
            name: 'News',
            link: '/',
        },
        {
            name: 'Podcast',
            link: '/',
        },
        {
            name: 'Year in Review',
            link: '/',
        },
        {
            name: 'Git Guide',
            link: '/',
        },
    ];

    const knowMoreInfo = [
        {
            name: 'Apps',
            link: '/',
        },
        {
            name: 'Pro',
            link: '/',
        },
    ];

    const mediaLinks = [
        {
            name: 'facebook',
            icon: <FaFacebook />,
            link: '/',
        },
        {
            name: 'twitter',
            icon: <FaTwitter />,
            link: '/',
        },
        {
            name: 'youtube',
            icon: <FaYoutube />,
            link: '/',
        },
        {
            name: 'instagram',
            icon: <FaInstagram />,
            link: '/',
        },
        {
            name: 'tiktok',
            icon: <FaTiktok />,
            link: '/',
        },
    ];

    return (
        <div className='footer-info-container'>
            <div className='site-description-container'>
                <img
                    src={new URL('/assets/site-logo.png', import.meta.url).href}
                    alt=''
                />
                <p>
                    Letterboxd is a social platform for sharing your taste in
                    film. Use it as a diary to record your opinion about films
                    as you watch them, or just to keep it yourself. Create your
                    own list. It is one of the easiest platform to know how much
                    of Cinephile you are.
                </p>
            </div>
            <div className='site-info-links-group-container'>
                <div className='info-links-container'>
                    <h1>
                        <span></span>Company
                    </h1>
                    <ul className='footer-link-list'>
                        {companyInfoLinks.map((info, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to={info.link}
                                        onClick={(e) => e.preventDefault()}
                                        className='footer-link'
                                    >
                                        {info.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='info-links-container'>
                    <h1>
                        <span></span>Features
                    </h1>
                    <ul className='footer-link-list'>
                        {featuresInfoLinks.map((info, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to={info.link}
                                        onClick={(e) => e.preventDefault()}
                                        className='footer-link'
                                    >
                                        {info.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='info-links-container'>
                    <h1>
                        <span></span>Know more
                    </h1>
                    <ul className='footer-link-list'>
                        {knowMoreInfo.map((info, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to={info.link}
                                        onClick={(e) => e.preventDefault()}
                                        className='footer-link'
                                    >
                                        {info.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='info-links-container'>
                    <h1>
                        <span></span>Get latest news
                    </h1>
                    <ul className='footer-link-list footer-link-list-icons'>
                        {mediaLinks.map((info, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to={info.link}
                                        onClick={(e) => e.preventDefault()}
                                        className='footer-link-icon'
                                    >
                                        {info.icon}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterInfoContainer;
