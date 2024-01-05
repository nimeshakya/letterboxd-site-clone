import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';

const App = () => {
    return (
        <div className='app-container'>
            <Navigation />
            <Hero />
            <About />
        </div>
    );
};

export default App;
