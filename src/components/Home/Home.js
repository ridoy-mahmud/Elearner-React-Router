import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <About></About>
            <Services></Services>
            <Pricing></Pricing>
            <Contact></Contact>
        </div>
    );
};

export default Home;