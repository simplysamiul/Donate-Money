import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'


const Menubar1 = () => {
    return (
        <div className='bg-greenLg py-4'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow text-yellowOp font-bold bg-greenLg">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/donate">Donations</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        <img className="w-20 md:w-40 lg:w-60" src={logo} alt="Donate-Logo" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn bg-yellowOp border-yellowOp text-greenDr font-bold">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Menubar1;