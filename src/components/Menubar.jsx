import { Link, NavLink } from 'react-router-dom';
import { MdOutlineLogin } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Menubar = () => {
    const {user, userLogOut} = useContext(AuthContext);
    return (
        <div>
            <div className='hidden lg:block'>
                <div className='text-white flex items-center justify-between bg-greenLg rounded-full p-4 '>
                    {/* large screen menu */}
                    <div className=''>
                        {/* menu items */}
                        <div className='flex items-center space-x-8 font-semibold'>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/donate">Donations</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </div>
                    </div>
                    {/* login and donation button */}
                    <div>
                        {user ? <button onClick={userLogOut} className="btn bg-yellowOp border-yellowOp text-white font-bold">Log Out</button>
                        :<Link to="/login">
                            <button className='bg-yellowOp p-2 rounded-full flex justify-center items-center text-xl cursor-pointer'>
                                <MdOutlineLogin />
                            </button>
                        </Link>}
                    </div>
                </div>
            </div>
            {/* small and medium device */}
        </div>
    );
};

export default Menubar;