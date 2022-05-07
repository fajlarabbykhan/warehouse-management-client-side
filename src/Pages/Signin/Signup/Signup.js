import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialSignin from '../SocialSignin/SocialSignin';
import Loading from '../../Shared/Loading/Loading';
const Signup = () => {
    const navigate = useNavigate()
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const navigatesignin = event => {
        navigate('/signin')
    }
    if (user) {
        console.log(user)
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleSignUp = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const name = nameRef.current.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        // // alert('Updated profile');
        console.log(name, email, password);
        navigate('/')

    }



    return (
        <div className='container w-50 mx-auto '>

            <h2 className='text-primary text-center '>Sign up</h2>
            <form onSubmit={handleSignUp}>
                <div className="mb-2">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input ref={nameRef} type="text" className="form-control" id="exampleInputName" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3 form-check">
                    <input onClick={() => setAgree(!agree)} type="checkbox" name='terms' className="form-check-input" id="exampleCheck1" />
                    {/* <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="exampleCheck1">Accept Our Terms and Conditions</label> */}
                    <label className={`${agree ? ' ' : 'text-danger'}`} htmlFor="exampleCheck1">Accept Our Terms and Conditions</label>

                </div>
                <button

                    disabled={!agree} type="submit" className="btn btn-primary">Sign up
                </button>
            </form>
            <p className='mt-3'>Already have an Account ? <Link to='/signin' className='text-danger cursor-pointer text-decoration-none' onClick={navigatesignin}>Please Signin</Link></p>

            <SocialSignin></SocialSignin>
        </div>

    );
};

export default Signup;