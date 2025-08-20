import { Link } from 'react-router-dom';
import '../style/PageHeader.css';
import { FaArrowRightLong } from 'react-icons/fa6';

const PageHeader = ({ pageName }) => {
    return (
        <div className="text-center text-white page-header flex flex-col items-center justify-center mb-40">
            <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-extrabold">{pageName}</h1>
            <p className="flex justify-center items-center"><Link className="text-yellowOp mr-2 font-bold" to="/">Home</Link> <FaArrowRightLong /> <span className="ml-2">{pageName}</span> </p>
        </div>
    );
};

export default PageHeader;