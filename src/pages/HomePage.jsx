import React from 'react';
import Header from '../components/Header';
import CharityService from '../components/CharityService';
import Volunteer from '../components/Volunteer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <CharityService />
            <Volunteer />
        </div>
    );
};

export default HomePage;