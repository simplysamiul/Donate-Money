import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handelSignUpForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        // sign in with email and password
        createUser(email, pass)
        .then((res) => {
            console.log(res)
        }).catch(err => console.log(err))

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