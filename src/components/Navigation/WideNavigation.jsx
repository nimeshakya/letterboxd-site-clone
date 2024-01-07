import React from 'react';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import siteLogo from '../../images/site-logo.png';

import './WideNavigation.scss';
/*
    Navigation for wider screen (above width of 1000px)
*/
const WideNavigation = ({ navLinks }) => {
    const handleLinkPress = (e) => {
        e.preventDefault();
    };

    return (
        <div className='wide-nav-bar'>
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
            <form className='search-form' onSubmit={(e) => e.preventDefault()}>
                <input
                    type='search'
                    name='movie-search-input'
                    id='movie-search-input'
                />
                <FaMagnifyingGlass className='content-search-icon' />
            </form>
            <div className='account-handle-btn-container'>
                <Link
                    to='/'
                    onClick={handleLinkPress}
                    className='account-handle-btn account-login-btn'
                >
                    Log In
                </Link>
                <Link
                    to='/'
                    onClick={handleLinkPress}
                    className='account-handle-btn account-signup-btn'
                >
                    Sign up
                </Link>
            </div>
        </div>
    );
};

export default WideNavigation;
