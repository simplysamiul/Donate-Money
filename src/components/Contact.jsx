import { FaArrowRightLong, FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import '../style/Contact.css';
import { LuPhoneCall } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import contactPerson from '../assets/contact_1_1.png'


const Contact = () => {
    return (
        <div>
            <div className="text-center text-white contact-header flex flex-col items-center justify-center mb-40">
                <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-extrabold">Contact</h1>
                <p className="flex justify-center items-center"><Link className="text-yellowOp mr-2 font-bold" to="/">Home</Link> <FaArrowRightLong /> <span className="ml-2">Contact</span> </p>
            </div>
            {/* contact address */}
            <div className="w-10/12 lg:w-8/12 mx-auto pb-10">
                {/* contact info */}
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="col-span-1">
                        <div className="flex items-center space-x-6 mb-10">
                            <div className="bg-greenLg p-4 rounded-3xl text-white text-5xl">
                                <FaMapLocationDot />
                            </div>
                            <div className="ml-2 lg:ml-0">
                                <h3 className="font-bold text-3xl text-black">Address</h3>
                                <p className="text-gray-500">15 Maniel Lane, Front Line Berlin, Germany</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 mb-10">
                            <div className="bg-yellowOp p-4 rounded-3xl text-white text-5xl">
                                <LuPhoneCall />
                            </div>
                            <div className="ml-2 lg:ml-0">
                                <h3 className="font-bold text-3xl text-black">Phone</h3>
                                <p className="text-gray-500">+88017350-07456</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 mb-10">
                            <div className="bg-greenDr p-4 rounded-3xl text-white text-5xl">
                                <IoIosMail />
                            </div>
                            <div className="ml-2 lg:ml-0">
                                <h3 className="font-bold text-3xl text-black">Email</h3>
                                <p className="text-gray-500">info@donet.com allinfo@donet.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 mb-10">
                            <div className="bg-orange-600 p-4 rounded-3xl text-white text-5xl">
                                <FaMapLocationDot />
                            </div>
                            <div className="ml-2 lg:ml-0">
                                <h3 className="font-bold text-3xl text-black">Have Questions?</h3>
                                <p className="text-gray-500">Discover more by visiting us or joining our community</p>
                            </div>
                        </div>
                    </div>
                    {/* map */}
                    <div className="col-span-2 w-full">
                        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.891503112!2d87.70352446720406!3d23.489442187647825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1755690214965!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            {/* contact form section */}
            <div className="w-11/12 mx-auto">
                {/* contact form area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center items-center mb-15">
                    {/* contact person image */}
                    <div>
                        <img src={contactPerson} alt="" />
                    </div>
                    {/* contact form */}
                    <div className="card bg-base-100 w-11/12 lg:w-8/12 lg:mx-auto shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset rounded-full p-6">
                                <label className="label text-gray-600">Name</label>
                                <input type="text" className="input w-full rounded-full border-gray-400" placeholder="Your Name" />
                                <label className="label text-gray-600">Email</label>
                                <input type="email" className="input w-full rounded-full border-gray-400" placeholder="Your Email" />
                                <label className="label text-gray-600">Phone</label>
                                <input type="number" className="input w-full rounded-full border-gray-400" placeholder="Phone Number" />
                                <label className="label text-gray-600">Text Message</label>
                                <textarea className="textarea w-full rounded-2xl border-gray-400" placeholder="Bio"></textarea>
                                <button className="btn mt-4 rounded-2xl bg-greenLg hover:bg-yellowOp duration-300 text-white font-semibold">Send Message</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;