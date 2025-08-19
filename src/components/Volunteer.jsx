import '../style/Volunteer.css';

const Volunteer = () => {
    return (
        <div className='w-8/12 mx-auto my-6'>
            {/* join vounteer */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='become-volunteer-one text-center rounded-2xl py-12 px-8 text-white'>
                        <h2 className='font-primary font-bold text-4xl mb-6'>Become a volunteer</h2>
                        <p className='font-semibold mb-4'>Provide resources such as reports, infographics, and educational materials related to the charity's cause. Use a clear and intuitive navigation menu to help users find information quickly.</p>
                        <button className='btn common-button rounded-full'>Learn More</button>
                </div>
                <div className='become-volunteer-two text-center rounded-2xl py-12 px-8 text-white'>
                    <h2 className='font-primary font-bold text-4xl mb-6'>Become a volunteer</h2>
                    <p className='font-semibold mb-4'>Provide resources such as reports, infographics, and educational materials related to the charity's cause. Use a clear and intuitive navigation menu to help users find information quickly.</p>
                    <button className='btn common-button rounded-full'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;