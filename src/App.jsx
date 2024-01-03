import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Hero from './sections/Hero/Hero';

const App = () => {
    return (
        <div className='app-container'>
            <Navigation />
            <Hero />
        </div>
    );
};

export default App;
