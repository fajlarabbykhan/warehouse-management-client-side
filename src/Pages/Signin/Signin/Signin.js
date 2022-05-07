import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialSignin from '../SocialSignin/SocialSignin';
const Signin = () => {
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }
    const navigateSignup = event => {
        navigate('/signup')
    }
    const navigateResetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Email Sent');
        }
        else {
            alert('Please Enter  Email');
        }
    }

    return (
        <div className="container w-50 mx-auto">
            <h2 className='text-primary text-center mt-1'>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            {errorElement}
            <p className='mt-4'>New to E-Electronic ? <Link to='/signup' className='text-danger cursor-pointer text-decoration-none' onClick={navigateSignup}>Please Signup</Link></p>
            <p className='mt-4'>Forget Password?<button className='text-danger cursor-pointer text-decoration-none btn btn-link' onClick={navigateResetPassword}>Reset Password</button></p>
            <SocialSignin></SocialSignin>


        </div>
    );
};

export default Signin;