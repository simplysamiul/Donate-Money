import '../style/Header.css';
import headerShape from '../assets/hero-bg-shape1-1.png';
import { FiArrowUpRight } from 'react-icons/fi';

const Header = () => {
    return (
        <div className='header-area lg:top-3 -z-1'>
            <div className='header-container'>
                <p className='font-secondary'>Welcome to Donat Charity</p>
                <h2 className='font-primary text-4xl md:text-6xl lg:text-7xl font-extrabold text-white text-center'>Helping Each Other Can </h2>
                <h2 className='font-primary text-4xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mt-2'>Make World Better </h2>
                <div className='flex justify-center items-center space-x-8 mt-6'>
                    <button className='text-white bg-greenLg rounded-full text-xl font-bold p-6 border-greenLg shadow-md shadow-yellowOp btn flex items-center justify-center header-donation-btn'>Donate Now</button>
                    <button className='text-white bg-yellowOp rounded-full text-xl font-bold p-6 border-yellowOp shadow-md shadow-greenLg btn'>
                        About Us
                    </button>
                </div>
            </div>
            <div className="header-shape hidden md:block">
                <img src={headerShape} alt="Header-Shape" />
            </div>
        </div>
    );
};

export default Header;