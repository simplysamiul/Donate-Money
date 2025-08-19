import { Link } from "react-router-dom";
import aboutImg from "../assets/about_1_1-2.png";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import aboutShape from '../assets/about_shape1_1-1-2.png';
import '../style/About.css';

const About = () => {
    return (
        <div className='w-11/12 mx-auto py-20'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
                <div className="about-section-img">
                    <img src={aboutImg} alt="" />
                    <img className="about-shape" src={aboutShape} alt="" />
                </div>
                <div className="w-full lg:w-10/12">
                    <p className='font-secondary text-yellowOp text-2xl font-bold mb-6'>About Us</p>
                    <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-greenLg mb-2">We Believe that We</h2>
                    <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-greenLg mb-8">can Save More Life's with you</h2>
                    <p className="text-gray-400 font-semibold mb-6">Donet is the largest global crowdfunding community connecting nonprofits, donors, and companies in nearly every country. We help nonprofits from Afghanistan to Zimbabwe (and hundreds of places in between) access the tools, training, and support they need to be more effective and make our world a better place.</p>
                    <div className="flex items-center space-x-8 my-8">
                        <div>
                            <p className="font-bold text-sm md:text-lg lg:text-xl mb-4 flex items-center">
                                <BiSolidRightArrowCircle className="text-greenLg mr-2" />
                                Charity For Foods
                            </p>
                            <p className="font-bold text-sm md:text-lg lg:text-xl mb-4 flex items-center">
                                <BiSolidRightArrowCircle className="text-red-600 mr-2" />
                                Charity For Education
                            </p>
                        </div>
                        <div>
                            <p className="font-bold text-sm md:text-lg lg:text-xl mb-4 flex items-center">
                                <BiSolidRightArrowCircle className="text-yellowOp mr-2" />
                                Charity For Foods
                            </p>
                            <p className="font-bold text-sm md:text-lg lg:text-xl mb-4 flex items-center">
                                <BiSolidRightArrowCircle className="text-greenDr mr-2" />
                                Charity For Education
                            </p>
                        </div>
                    </div>
                    <Link to="/about">
                        <button className="common-button rounded-full px-10 btn">About More</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default About;