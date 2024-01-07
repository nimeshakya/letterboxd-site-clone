import React, { useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md';

import siteLogo from '../../images/site-logo.png';

import './NarrowNavigation.scss';

const NarrowNavigation = ({ navLinks }) => {
    const [navSidebarVisible, setNavSidebarVisible] = useState(false);

    return (
        <div className='narrow-nav-bar'>
            <div className='search-form-container'>
                <MdOutlineMenu
                    className='nav-open-btn'
                    onClick={() => {
                        setNavSidebarVisible(true);
                    }}
                />
                <form
                    className='search-form'
                    onSubmit={(e) => preventDefault()}
                >
                    <FaMagnifyingGlass className='content-search-icon' />
                    <input
                        type='search'
                        name='movie-search-input'
                        id='movie-search-input'
                    />
                </form>
            </div>
            <Link
                to='/'
                className='site-logo-link'
                onClick={(e) => e.preventDefault()}
            >
                <img src={siteLogo} alt='site-logo' />
            </Link>
            <div
                className={`nav-sidebar ${
                    navSidebarVisible
                        ? 'nav-sidebar-visible'
                        : 'nav-sidebar-hidden'
                }`}
            >
                <MdOutlineClose
                    onClick={() => {
                        setNavSidebarVisible(false);
                    }}
                    className='nav-close-btn'
                />
                <nav className='nav-container'>
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
                <div className='account-handle-btn-container'>
                    <Link
                        to='/'
                        onClick={(e) => e.preventDefault()}
                        className='account-handle-btn account-login-btn'
                    >
                        Log In
                    </Link>
                    <Link
                        to='/'
                        onClick={(e) => e.preventDefault()}
                        className='account-handle-btn account-signup-btn'
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NarrowNavigation;
