import DonateComponent from "../components/DonateComponent";
import PageHeader from "../shared/PageHeader";


const DonatePage = () => {
    return (
        <div>
            <PageHeader pageName="Donate" />
            <DonateComponent />
        </div>
    );
};

export default DonatePage;