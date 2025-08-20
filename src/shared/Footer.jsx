import { BsFillSendFill } from "react-icons/bs";
import footerLogo from '../assets/logo-white.svg';
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import '../style/Footer.css';


const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className=" w-10/12 mx-auto py-30 px-10">
                    {/* footer header */}
                    <div className="flex flex-col lg:flex-row justify-between items-center border-b-1 border-gray-400 py-12 mb-6 text-white">
                        {/* footer newsletter text */}
                        <div>
                            <h2 className="font-bold font-primary text-3xl">Subscribe to Our Newsletter</h2>
                            <p className="text-gray-400 text-sm">Regular inspections and feedback mechanisms</p>
                        </div>
                        {/* footer newsletter input */}
                        <div className="footer-newsletter my-4 flex flex-col xl:flex-row items-center justify-center">
                            <input type="email" className="input w-sm md:w-xl rounded-full py-6 text-gray-500" placeholder="Enter Your Email" list="browsers" />
                            <button className="bg-yellowOp btn rounded-full text-white text-2xl p-6 border-yellowOp ml-4 mt-4 xl:mt-0"><BsFillSendFill /></button>
                        </div>
                    </div>
                    {/* footer menu */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
                        <div>
                            <img className="mb-4" src={footerLogo} alt="" />
                            <p className="text-gray-300 mb-4">Our secure online donation platform allows you to make contributions quickly and safely. Choose from various.</p>
                            <Link to="/donate">
                                <button className="btn bg-greenLg border-greenLg py-4 px-6 text-[16px] font-bold text-white hover:bg-yellowOp duration-300">Donate Now</button>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center" >
                            <h3 className="font-extrabold font-primary text-white text-2xl border-b-1 border-yellowOp pb-2">Quick Links</h3>
                            <ul className="text-gray-500">
                                <li className="footr-item hover:text-yellowOp duration-300 cursor-pointer mb-3 mt-6"><FiArrowUpRight className="footer-menu-icon" /> About Us</li>
                                <li className="footr-item hover:text-yellowOp duration-300 cursor-pointer mb-3"><FiArrowUpRight className="footer-menu-icon" /> Our News</li>
                                <li className="footr-item hover:text-yellowOp duration-300 cursor-pointer mb-3"><FiArrowUpRight className="footer-menu-icon" /> Our Campaign</li>
                                <li className="footr-item hover:text-yellowOp duration-300 cursor-pointer mb-3"><FiArrowUpRight className="footer-menu-icon" /> Privacy policy</li>
                                <li className="footr-item hover:text-yellowOp duration-300 cursor-pointer mb-3"><FiArrowUpRight className="footer-menu-icon" /> Contact Us</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="font-extrabold font-primary text-white text-2xl border-b-1 border-yellowOp pb-2">Our Service</h3>
                            <ul className="text-gray-500">
                                <li className="footr-item hover:text-yellowOp duration-300 cursor-pointer mb-3 mt-6"><FiArrowUpRight className="footer-menu-icon" /> Give Donation</li>
                                <li className="footr-item hover:text-yellowOp duration-300 cursor-pointer mb-3"><FiArrowUpRight className="footer-menu-icon" /> Education Support</li>
                                <li className="footr-item hover:text-yellowOp duration-300 cursor-pointer mb-3"><FiArrowUpRight className="footer-menu-icon" /> Food Support</li>
                                <li className="footr-item hover:text-yellowOp duration-300 cursor-pointer mb-3"><FiArrowUpRight className="footer-menu-icon" /> Health Support</li>
                                <li className="footr-item hover:text-yellowOp duration-300 cursor-pointer mb-3"><FiArrowUpRight className="footer-menu-icon" /> Our Campaign</li>
                            </ul>
                        </div>

                        <div className="footer-contact">
                            <div>
                                <h4 className="font-extrabold font-primary text-white text-2xl mb-6">Contact Us</h4>
                                <div>
                                    <div>

                                    </div>
                                    <div className="mb-4">
                                        <p className="text-gray-400">Call us any time:</p>
                                        <h4 className="font-extrabold font-primary text-white text-xl">+88017350-07456</h4>
                                    </div>
                                </div>
                                <div>
                                    <div>

                                    </div>
                                    <div>
                                        <p className="text-gray-400">Email us any time:</p>
                                        <h4 className="font-extrabold font-primary text-white text-xl">info@donat.com</h4>
                                    </div>
                                </div>
                            </div>
                            {/* footersocial icon */}
                            <div className="footer-icons-container">
                                <ul className="footer-icons">
                                    <li><FaFacebookF /></li>
                                    <li><FaXTwitter /></li>
                                    <li><IoLogoYoutube /></li>
                                    <li><FaLinkedin /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* copyright */}
            <div className="bg-greenLg py-6">
                <p className="text-center text-white font-primary font-semibold"> Copyright 2025 <span className="text-yellowOp">Donat.</span> All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;