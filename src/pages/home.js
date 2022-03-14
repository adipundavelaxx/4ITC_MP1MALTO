import React from 'react';
import '../App.css';
import './index.css';
import FirstSection from './index';
import Cards from './cards';
import Feature from './feature';
import AboutMe from './aboutme';
import Trainings from './trainings';
import Footer from './footer';

function Home() {
    return (
        <>
            <FirstSection />
            <AboutMe />
            <Cards />
            <Feature />
            <Trainings />
            <Footer />
            
        </>
    )
}

export default Home;