import { IoCallOutline, IoLocationOutline, IoLogoYoutube } from 'react-icons/io5';
import logo from '../assets/logo.svg';
import { FaFacebookF, FaLinkedin, FaRegEnvelopeOpen } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import "../style/Navbar.css";
import Menubar from '../components/Menubar';
import Menubar1 from '../components/Menubar1';

const Navbar = () => {

    return (
        <div>
            <div className='w-11/12 mx-auto hidden lg:block'>
                {/* navbar header */}
                <div className='flex justify-between items-center pt-6 pb-10 relative'>
                    {/* logo */}
                    <img src={logo} alt="Donate-Logo" />
                    {/* navbar header location */}
                    <div className='flex items-center space-x-8'>
                        {/* address */}
                        <div className='flex items-center space-x-4  border-r-2 border-gray-300 pr-4'>
                            <div className='nav-heaader-icon flex items-center justify-center text-white'>
                                <IoLocationOutline className='nav-icon' />
                                <div className='green-shape'></div>
                            </div>
                            <div>
                                <h5 className='text-gray-600 text-sm mb-2'>Locate Address:</h5>
                                <h4 className='font-bold text-xl'>Dhaka, Bangladesh</h4>
                            </div>
                        </div>
                        {/* contact number */}
                        <div className='flex items-center space-x-4 border-r-2 border-gray-300 pr-4'>
                            <div className='nav-heaader-icon flex items-center justify-center text-white'>
                                <IoCallOutline className='nav-icon' />
                                <div className='green-shape'></div>
                            </div>
                            <div>
                                <h5 className='text-gray-600 text-sm mb-2'>Call us any time:</h5>
                                <h4 className='font-bold text-xl'>+88017350-07456</h4>
                            </div>
                        </div>
                        {/* contact email*/}
                        <div className='flex items-center space-x-4'>
                            <div className='nav-heaader-icon flex items-center justify-center text-white'>
                                <FaRegEnvelopeOpen className='nav-icon' />
                                <div className='green-shape'></div>
                            </div>
                            <div>
                                <h5 className='text-gray-600 text-sm mb-2'>Email us any time:</h5>
                                <h4 className='font-bold text-xl'>info@donat.com</h4>
                            </div>
                        </div>
                    </div>
                    {/* social icon */}
                    <div className='mx-6 hidden xl:block'>
                        <ul className='flex justify-between items-center space-x-4'>
                            <li className='border-1 border-gray-400 rounded-full p-3 flex items-center justify-center cursor-pointer hover:bg-greenLg hover:text-white duration-300'><a href=""><FaFacebookF /></a></li>
                            <li className='border-1 border-gray-400 rounded-full p-3 flex items-center justify-center cursor-pointer hover:bg-greenLg hover:text-white duration-300'><a href=""><FaXTwitter /></a></li>
                            <li className='border-1 border-gray-400 rounded-full p-3 flex items-center justify-center cursor-pointer hover:bg-greenLg hover:text-white duration-300'><a href=""><IoLogoYoutube /></a></li>
                            <li className='border-1 border-gray-400 rounded-full p-3 flex items-center justify-center cursor-pointer hover:bg-greenLg hover:text-white duration-300'><a href=""><FaLinkedin /></a></li>
                        </ul>
                    </div>
                </div>
                {/* menu bar */}
                <div className='w-11/12 absolute top-24 mx-auto'>
                    <Menubar />
                </div>
            </div>
            {/* menubar for small device */}
            <div className='lg:hidden'>
                <Menubar1 />
            </div>
        </div>
    );
};

export default Navbar;