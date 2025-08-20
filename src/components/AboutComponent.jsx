import aboutDonate1 from '../assets/about-feature-icon1-1.svg';
import aboutDonate2 from '../assets/aboput-feature-icon1-2.svg';
import About from '../shared/About';
import '../style/AboutComponent.css';
import Companies from '../shared/Companies';
import aboutLongImg from '../assets/about-video-thumb3-1.png';
import aboutLongImgShape1 from '../assets/video_bg_shape3_1.png';
import aboutLongImgShape2 from '../assets/video_bg_shape3_2.png';

const AboutComponent = () => {
    return (
        <div className=''>
            <div className="about-donate-card grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 lg:w-9/12 mx-auto gap-8">

                <div className='text-center about-donar-card'>
                    <img className='mx-auto about-donar-card-img' src={aboutDonate2} alt="" />
                    <h3 className='font-bold text-2xl mt-2'>Donor Friendly</h3>
                    <p className='text-gray-500 mt-3'>Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.</p>
                </div>
                <div className='text-center about-donar-card'>
                    <img className='mx-auto about-donar-card-img' src={aboutDonate1} alt="" />
                    <h3 className='font-bold text-2xl mt-2'>Fundraising Trust</h3>
                    <p className='text-gray-500 mt-3'>Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.</p>
                </div>
                <div className='text-center about-donar-card'>
                    <img className='mx-auto about-donar-card-img' src={aboutDonate2} alt="" />
                    <h3 className='font-bold text-2xl mt-2'>Charity Donate</h3>
                    <p className='text-gray-500 mt-3'>Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.</p>
                </div>
                <div className='text-center about-donar-card'>
                    <img className='mx-auto about-donar-card-img' src={aboutDonate1} alt="" />
                    <h3 className='font-bold text-2xl mt-2'>Treatment Help</h3>
                    <p className='text-gray-500 mt-3'>Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.</p>
                </div>

            </div>
            {/* about */}
            <div className='my-15'>
                <About />
            </div>
            {/* about page long image */}
            <div className='about-long-img'>
                <img className='about-long-img' src={aboutLongImg} alt="" />
                <img className='about-long-img-shape-1 hidden lg:block' src={aboutLongImgShape1} alt="" />
                <img className='about-long-img-shape-2 hidden lg:block' src={aboutLongImgShape2} alt="" />
            </div>
            {/* brand */}
            <div>
                <Companies />
            </div>
        </div>
    );
};

export default AboutComponent;