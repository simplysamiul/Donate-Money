import { Link, NavLink } from 'react-router-dom';
import { MdOutlineLogin } from 'react-icons/md';

const Menubar = () => {
    return (
        <div>
            <div className='hidden lg:block'>
                <div className='text-white flex items-center justify-between bg-greenLg rounded-full p-4 '>
                    {/* large screen menu */}
                    <div className=''>
                        {/* menu items */}
                        <div className='flex items-center space-x-8 font-semibold'>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/">About</NavLink>
                            <NavLink to="/">Donations</NavLink>
                            <NavLink to="/">Contact</NavLink>
                            <NavLink to="/">Dashboard</NavLink>
                        </div>
                    </div>
                    {/* login and donation button */}
                    <div>
                        <Link to="/login">
                            <button className='bg-yellowOp p-2 rounded-full flex justify-center items-center text-xl cursor-pointer'>
                                <MdOutlineLogin />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* small and medium device */}
        </div>
    );
};

export default Menubar;