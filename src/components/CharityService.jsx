import '../style/CharityService.css';
import charitySer1 from '../assets/service-card-icon1-1.svg'
import charitySer2 from '../assets/service-card-icon1-2.svg'
import charitySer3 from '../assets/service-card-icon1-3.svg'

const CharityService = () => {
    return (
        <div className='py-12 text-center charity-service-area mb-8 w-11/12 mx-auto'>
            <p className='font-bold font-secondary text-yellowOp text-4xl mb-6'>Charity Services</p>
            <h2 className='font-primary font-extrabold text-5xl lg:text-6xl mb-2'>We Do it for all People</h2>
            <h2 className='font-primary font-extrabold text-5xl lg:text-6xl'>Humanist Services</h2>
            {/* charity card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
                <div className='text-center bg-white p-8 rounded border-1 border-gray-200 charity-card'>
                    <img className='mx-auto' src={charitySer1} alt="Charity Service" />
                    <h2 className='font-bold text-2xl my-4'>Electrical Inspections</h2>
                    <p className='text-gray-500 '> Share stories and experiences from current volunteers to inspire others to join. Allow user to sign up for volunteer opportunities.</p>
                    <button className='btn bg-yellowOp rounded-full border-yellowOp my-4 text-white font-bold p-6 text-[16px] hover:bg-greenLg duration-300'>Learn More</button>
                </div>
                <div className='text-center bg-white p-8 rounded border-1 border-gray-200 charity-card'>
                    <img className='mx-auto' src={charitySer2} alt="Charity Service" />
                    <h2 className='font-bold text-2xl my-4'>Educations</h2>
                    <p className='text-gray-500 '> Explore our charity website to discover impactful projects, opportunities, and ways to donate, helping those in need thrive.</p>
                    <button className='btn bg-yellowOp rounded-full border-yellowOp my-4 text-white font-bold p-6 text-[16px] hover:bg-greenLg duration-300'>Learn More</button>
                </div>
                <div className='text-center bg-white p-8 rounded border-1 border-gray-200 charity-card'>
                    <img className='mx-auto' src={charitySer3} alt="Charity Service" />
                    <h2 className='font-bold text-2xl my-4'>Medical Help</h2>
                    <p className='text-gray-500 '> Join us in making a difference! Our charity website connects you with volunteer, donation options, and inspiring stories.</p>
                    <button className='btn bg-yellowOp rounded-full border-yellowOp my-4 text-white font-bold p-6 text-[16px] hover:bg-greenLg duration-300'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default CharityService;