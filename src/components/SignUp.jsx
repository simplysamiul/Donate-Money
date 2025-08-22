import { Link } from "react-router-dom";


const SignUp = () => {
    const handelSignUpForm = () => {

    }
    return (
        <div className='w-11/12 mx-auto flex justify-center items-center my-25'>
            <div className='w-full max-w-lg'> {/* limit form width */}
                <div className="bg-base-100 w-full shrink-0 shadow-2xl p-6 rounded-xl">
                    <div className="card-body">
                        <form onSubmit={handelSignUpForm} className="fieldset space-y-2">
                            <label className="label text-sm font-bold">Email</label>
                            <input name="email" type="email" className="input w-full" placeholder="Email" />

                            <label className="label text-sm font-bold">Password</label>
                            <input name="pass" type="password" className="input w-full" placeholder="Password" />

                            <div>
                                <a className="link link-hover text-sm">Forgot password?</a>
                            </div>

                            <button className="btn bg-greenLg mt-4 w-full hover:bg-yellowOp text-white">Create Account</button>
                        </form>
                        <p className='text-center mt-2 font-semibold'>Already have an account ? <Link className='text-greenLg font-bold hover:underline' to="/login">Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;