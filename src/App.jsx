import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Main from './sections/Main/Main';
import Footer from './sections/Footer/Footer';

const App = () => {
    return (
        <div className='app-container'>
            <Navigation />
            <Hero />
            <About />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
