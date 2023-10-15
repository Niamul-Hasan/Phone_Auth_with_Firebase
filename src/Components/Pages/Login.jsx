// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/UserContext';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);

        signIn(email, password).then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true });
        }).catch(error => console.error(error));
    }

    const handleGoogle = () => {
        signInWithGoogle().then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        }).catch(error => console.error(error));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="label-text-alt">New to this site?
                                        <Link to='/register'> <span className='font-mono uppercase text-blue-500'>register Now</span></Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <div className="divider">OR</div>
                                <button onClick={handleGoogle} className="btn btn-success mb-2">
                                    <span className='text-2xl'><FcGoogle></FcGoogle></span>
                                    Login With Google</button>
                                <div className="divider">OR</div>
                                <button className="btn btn-info">Register with Phone Number</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;