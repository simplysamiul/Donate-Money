import { FaRegHeart } from "react-icons/fa6";
import donationImg1 from '../assets/donation1-3-354x233.png';
import donationImg2 from '../assets/donation-s-1-1-2-354x233.png';
import donationImg3 from '../assets/donation5-1-2-354x233.png';
import donationImg4 from '../assets/donation2-2-354x233.png';
import donationImg5 from '../assets/donation1-2-2.png';
import donationImg6 from '../assets/donation6-2-354x233.png';
import { toast } from "react-toastify";

const DonateComponent = () => {

    const handelDonation = () => {
        toast.success("We will contact with you soon ...!")
    }

    return (
        <div>
            {/* donate section */}
            <div className="w-11/12 mx-auto text-center">
                {/* donate section header */}
                <p className="font-secondary text-yellowOp text-2xl font-bold flex justify-center items-center mb-4"><FaRegHeart className="mr-2 text-greenLg" />Lets Start Donating</p>
                <h2 className="font-extrabold font-primary text-2xl md:text-3xl lg:text-5xl mb-2">See Your Impact: Transparent</h2>
                <h2 className="font-extrabold font-primary text-2xl md:text-3xl lg:text-5xl">Donation Causes</h2>
                {/* donation secttion */}

                <div className=" my-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-10/12 mx-auto">

                        <div className="flex flex-col lg:flex-row items-center space-x-6">
                            <div className="donation-img-container">
                                <img className="rounded-lg" src={donationImg1} alt="" />
                                {/* <img className="donation-img-shape" src={donationShape} alt="" /> */}
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-primary text-xl font-bold mb-2 text-start">Your Little Help Can Heal Their Helps</h3>
                                <p className="text-gray-500 text-start mb-2">Join our fundraising campaigns to raise awareness and funds</p>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-gray-400 text-start">Raised</p>
                                        <h4 className="font-bold text-lg">$42,344.00</h4>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-start">Goal</p>
                                        <h4 className="font-bold text-lg">$50,000.00</h4>
                                    </div>
                                </div>
                                <button onClick={handelDonation} className="btn bg-greenLg text-white font-bold border-greenLg hover:bg-yellowOp rounded-full">Donate Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center space-x-6">
                            <div>
                                <img className="rounded-lg" src={donationImg2} alt="" />
                                {/* <img className="absolute top-0 right-0" src={donationShape} alt="" /> */}
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-primary text-xl font-bold mb-2 text-start">Your Little Help Can Heal Their Helps</h3>
                                <p className="text-gray-500 text-start mb-2">Join our fundraising campaigns to raise awareness and funds</p>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-gray-400 text-start">Raised</p>
                                        <h4 className="font-bold text-lg">$42,344.00</h4>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-start">Goal</p>
                                        <h4 className="font-bold text-lg">$50,000.00</h4>
                                    </div>
                                </div>
                                <button onClick={handelDonation} className="btn bg-greenLg text-white font-bold border-greenLg hover:bg-yellowOp rounded-full">Donate Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center space-x-6">
                            <div>
                                <img className="rounded-lg" src={donationImg3} alt="" />
                                {/* <img className="absolute top-0 right-0" src={donationShape} alt="" /> */}
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-primary text-xl font-bold mb-2 text-start">Your Little Help Can Heal Their Helps</h3>
                                <p className="text-gray-500 text-start mb-2">Join our fundraising campaigns to raise awareness and funds</p>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-gray-400 text-start">Raised</p>
                                        <h4 className="font-bold text-lg">$42,344.00</h4>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-start">Goal</p>
                                        <h4 className="font-bold text-lg">$50,000.00</h4>
                                    </div>
                                </div>
                                <button onClick={handelDonation} className="btn bg-greenLg text-white font-bold border-greenLg hover:bg-yellowOp rounded-full">Donate Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center space-x-6">
                            <div>
                                <img className="rounded-lg" src={donationImg4} alt="" />
                                {/* <img className="absolute top-0 right-0" src={donationShape} alt="" /> */}
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-primary text-xl font-bold mb-2 text-start">Your Little Help Can Heal Their Helps</h3>
                                <p className="text-gray-500 text-start mb-2">Join our fundraising campaigns to raise awareness and funds</p>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-gray-400 text-start">Raised</p>
                                        <h4 className="font-bold text-lg">$42,344.00</h4>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-start">Goal</p>
                                        <h4 className="font-bold text-lg">$50,000.00</h4>
                                    </div>
                                </div>
                                <button onClick={handelDonation} className="btn bg-greenLg text-white font-bold border-greenLg hover:bg-yellowOp rounded-full">Donate Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center space-x-6">
                            <div>
                                <img className="rounded-lg" src={donationImg5} alt="" />
                                {/* <img className="absolute top-0 right-0" src={donationShape} alt="" /> */}
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-primary text-xl font-bold mb-2 text-start">Your Little Help Can Heal Their Helps</h3>
                                <p className="text-gray-500 text-start mb-2">Join our fundraising campaigns to raise awareness and funds</p>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-gray-400 text-start">Raised</p>
                                        <h4 className="font-bold text-lg">$42,344.00</h4>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-start">Goal</p>
                                        <h4 className="font-bold text-lg">$50,000.00</h4>
                                    </div>
                                </div>
                                <button onClick={handelDonation} className="btn bg-greenLg text-white font-bold border-greenLg hover:bg-yellowOp rounded-full">Donate Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center space-x-6">
                            <div>
                                <img className="rounded-lg" src={donationImg6} alt="" />
                                {/* <img className="absolute top-0 right-0" src={donationShape} alt="" /> */}
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-primary text-xl font-bold mb-2 text-start">Your Little Help Can Heal Their Helps</h3>
                                <p className="text-gray-500 text-start mb-2">Join our fundraising campaigns to raise awareness and funds</p>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-gray-400 text-start">Raised</p>
                                        <h4 className="font-bold text-lg">$42,344.00</h4>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-start">Goal</p>
                                        <h4 className="font-bold text-lg">$50,000.00</h4>
                                    </div>
                                </div>
                                <button onClick={handelDonation} className="btn bg-greenLg text-white font-bold border-greenLg hover:bg-yellowOp rounded-full">Donate Now</button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default DonateComponent;