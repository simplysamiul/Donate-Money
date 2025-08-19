import React from 'react';
import Header from '../components/Header';
import CharityService from '../components/CharityService';
import Volunteer from '../components/Volunteer';
import About from '../components/About';
import NeedPeople from '../components/NeedPeople';
import Companies from '../shared/Companies';
import Faq from '../components/Faq';

const HomePage = () => {
    return (
        <div>
            <Header />
            <CharityService />
            <Volunteer />
            <About />
            <NeedPeople />
            <Companies />
            <Faq />
        </div>
    );
};

export default HomePage;