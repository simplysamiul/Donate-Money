
import Header from '../components/Header';
import CharityService from '../components/CharityService';
import Volunteer from '../components/Volunteer';
import NeedPeople from '../components/NeedPeople';
import Companies from '../shared/Companies';
import Faq from '../components/Faq';
import About from '../shared/About';
import { Helmet } from 'react-helmet';

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