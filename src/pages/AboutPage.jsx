
import AboutComponent from "../components/AboutComponent";
import PageHeader from "../shared/PageHeader";


const AboutPage = () => {
    return (
        <div>
            <PageHeader pageName="About" />
            <AboutComponent />
        </div>
    );
};

export default AboutPage;