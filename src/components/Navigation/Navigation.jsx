import React from 'react';
import { Link } from 'react-router-dom';

import { ContentSearchIcon } from '../Icons/ContentIcons';

import siteLogo from '../../images/site-logo.png';

import './Navigation.scss';

const Navigation = () => {
    const navLinks = [
        {
            name: 'films',
            link: '/',
        },
        {
            name: 'lists',
            link: '/',
        },
        {
            name: 'members',
            link: '/',
        },
        {
            name: 'journals',
            link: '/',
        },
    ];

    const handleLinkPress = (e) => {
        e.preventDefault();
    };

    return (
        <div className='nav-bar'>
            <nav className='nav-container'>
                <Link
                    to='/'
                    className='site-logo-link'
                    onClick={handleLinkPress}
                >
                    <img src={siteLogo} alt='site-logo' />
                </Link>

                <ul className='nav-links'>
                    {navLinks.map((link) => {
                        return (
                            <li key={link.name}>
                                <Link to={link.link} className='nav-link'>
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className='nav-form-container'>
                <form className='search-form'>
                    <input
                        type='search'
                        name='movie-search-input'
                        id='movie-search-input'
                    />
                    <ContentSearchIcon className='content-search-icon' />
                </form>
            </div>
        </div>
    );
};

export default Navigation;
