import '../style/NeedPeople.css';
import needPeopleImg from '../assets/video-thumb1-1.png';
import needPeopleShape from "../assets/video_shape1_2.png";

const NeedPeople = () => {
    return (
        <div className='my-10 need-people-container'>
            <img className='hidden lg:block need-people-shape' src={needPeopleShape} alt="" />
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='bg-greenLg'>
                    <div className='pt-20 w-10/12 lg:w-3/5 mx-auto pb-4'>
                        <h2 className="text-white font-primary font-extrabold text-4xl lg:text-5xl mb-2">We Always Help The</h2>
                        <h2 className="text-white font-primary font-extrabold text-4xl lg:text-5xl">Needy People</h2>
                        <p className="my-6 text-white">Discover the inspiring stories of individuals and communities transformed by our programs. Our success stories highlight the real-life impact of your donations.</p>
                        <div className='text-white w-4/5 mx-auto '>
                            <div className="flex items-center justify-between w-full border-b-1 border-gray-400 pb-4">
                                <div className=''>
                                    <p className='font-extrabold text-4xl lg:text-6xl font-primary mb-2 text-yellowOp'>15k <span className=' text-2xl lg:text-4xl'>+</span></p>
                                    <p>Incredible Volunteers</p>
                                </div>
                                <div className=''>
                                    <p className='font-extrabold text-4xl lg:text-6xl font-primary mb-2'>1k <span className=' text-2xl lg:text-4xl'>+</span></p>
                                    <p>Successful Campaigns</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div className="">
                                    <p className='font-extrabold text-4xl lg:text-6xl font-primary mb-2'>400 <span className=' text-2xl lg:text-4xl'>+</span></p>
                                    <p>Monthly Donors</p>
                                </div>
                                <div className=''>
                                    <p className='font-extrabold text-4xl lg:text-6xl font-primary mb-2 text-yellowOp'>35k <span className=' text-2xl lg:text-4xl'>+</span></p>
                                    <p>Team Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-full'>
                    <img className='h-full object-cover' src={needPeopleImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NeedPeople;