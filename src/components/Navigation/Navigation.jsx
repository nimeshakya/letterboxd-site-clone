import React from 'react';

import WideNavigation from './WideNavigation';
import NarrowNavigation from './NarrowNavigation';

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

    return (
        <>
            <WideNavigation navLinks={navLinks} />
            <NarrowNavigation navLinks={navLinks} />
        </>
    );
};

export default Navigation;
