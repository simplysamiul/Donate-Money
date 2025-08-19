import brand1 from '../assets/brand1-1.svg';
import brand2 from '../assets/brand1-2.svg';
import brand3 from '../assets/brand1-3.svg';
import brand4 from '../assets/brand1-4.svg';
import brand5 from '../assets/brand1-5.svg';

const Companies = () => {
    return (
        <div className='w-4/5 md:w-3/5 mx-auto py-8'>
            <h2 className='font-primary text-center text-4xl font-bold my-8'>Trusted by over <span className='text-yellowOp'>90<span>K+ </span></span> companies worldwide</h2>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mt-14 mb-10'>
                <img className='grayscale hover:grayscale-0 cursor-pointer duration-300' src={brand1} alt="" />
                <img className='grayscale hover:grayscale-0 cursor-pointer duration-300' src={brand2} alt="" />
                <img className='grayscale hover:grayscale-0 cursor-pointer duration-300' src={brand3} alt="" />
                <img className='grayscale hover:grayscale-0 cursor-pointer duration-300' src={brand4} alt="" />
                <img className='grayscale hover:grayscale-0 cursor-pointer duration-300' src={brand5} alt="" />
            </div>
        </div>
    );
};

export default Companies;