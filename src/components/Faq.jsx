import faqImg from '../assets/faq_1_1.png'
import faqShape from '../assets/faq_1_1-mask.png';
import faqSmallImg from '../assets/faq_1_2.png'
import '../style/Faq.css';

const Faq = () => {
    return (
        <div className=' my-12 lg:mt-15 lg:mb-30'>
            <div className='grid grid-cols-1 xl:grid-cols-2 md:gap-5'>
                {/* faq img */}
                <div className='w-full faq-image-container'>
                    <img className='w-full xl:w-4/5' src={faqImg} alt="" />
                    <img className='hidden xl:block faq-shape' src={faqShape} alt="" />
                    <img className='hidden xl:block faq-small-img' src={faqSmallImg} alt="" />
                </div>
                {/* faq content */}
                <div className='w-full mt-15 mx-auto'>
                    <p className='text-yellowOp text-xl md:text-3xl m-2 font-secondary font-bold'>Frequently Asked Questions</p>
                    <h2 className='text-greenLg font-primary m-2 font-extrabold text-3xl md:text-4xl lg:text-5xl'>Have Any Questions For Us?</h2>
                    {/* faq question */}
                    <div className='pt-10 w-full lg:w-4/5'>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-6">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-2xl font-bold">What motivates you to donate to our charity?</div>
                            <div className="collapse-content text-lg text-gray-500">Explore the variety of volunteer opportunities available. From event planning and fundraising to fieldwork and administrative support, there are many ways to lend your talents. Find the perfect fit for your skills and interests.</div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-6">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-2xl font-bold">How did you hear about our organization?</div>
                            <div className="collapse-content text-lg text-gray-500">Explore the variety of volunteer opportunities available. From event planning and fundraising to fieldwork and administrative support, there are many ways to lend your talents. Find the perfect fit for your skills and interests.</div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-6">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-2xl font-bold">How frequently do you prefer to volunteer?</div>
                            <div className="collapse-content text-lg text-gray-500">Explore the variety of volunteer opportunities available. From event planning and fundraising to fieldwork and administrative support, there are many ways to lend your talents. Find the perfect fit for your skills and interests.</div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-2xl font-bold">What motivated you to participate in this event?</div>
                            <div className="collapse-content text-lg text-gray-500">Explore the variety of volunteer opportunities available. From event planning and fundraising to fieldwork and administrative support, there are many ways to lend your talents. Find the perfect fit for your skills and interests..</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;