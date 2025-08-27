import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleICon from '../assets/google.svg';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {googleSignIn, signInUser, setLoading, setUser, loading} = useContext(AuthContext);

    const handelLoginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        // sign in user with email and pass
        signInUser(email, pass)
        .then(res => {
            setUser(res.user);
            setLoading(false);
            toast.success("User Login Successfully....!")
            navigate(location?.state ? location.state : "/")
        }).catch(err => {
            toast.error(err.message)
            setLoading(false);
        })
    };

    // sign in with google
    const handelGoogleSignIn = () =>{
        googleSignIn()
        .then(res => {
            setUser(res.user);
            toast.success("User Login Successfully....!")
        }).catch(err => toast.error(err.message))
    }


    return (
        <div className='w-11/12 mx-auto flex justify-center items-center my-25'>
            <div className='w-full max-w-lg'> {/* limit form width */}
                <div className="bg-base-100 w-full shrink-0 shadow-2xl p-6 rounded-xl">
                    <div className="card-body">
                        <form onSubmit={handelLoginForm} className="fieldset space-y-2">
                            <label className="label text-sm font-bold">Email</label>
                            <input name="email" type="email" className="input w-full" placeholder="Email" />

                            <label className="label text-sm font-bold">Password</label>
                            <input name="pass" type="password" className="input w-full" placeholder="Password" />

                            <div>
                                <a className="link link-hover text-sm">Forgot password?</a>
                            </div>

                            {loading ? <span className="loading loading-spinner text-greenLg mx-auto"></span>
                            :<button className="btn bg-greenLg mt-4 w-full hover:bg-yellowOp text-white">Login</button>}
                        </form>
                        <p className="text-center text-gray-500">------------------- or ------------------</p>

                        {/* social login */}
                        <div>
                            <button onClick={handelGoogleSignIn} className='flex justify-center items-center w-full border-1 border-gray-500 py-2 space-x-2 btn'>
                                <img className='w-7' src={googleICon} alt="Google-Icon" />
                                <span className='font-bold'>Google Sign In</span>
                            </button>
                        </div>
                        <p className='text-center mt-2 font-semibold'>Are you a new user ? <Link className='text-greenLg font-bold hover:underline' to="/signup">Create Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
