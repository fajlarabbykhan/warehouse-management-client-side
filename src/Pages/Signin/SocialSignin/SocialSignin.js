import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../../images/google.svg'

const SocialSignin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    let errorElement;
    if (error1) {

        errorElement = <div>
            <p className='text-danger'>Error: {error1?.message}</p>
        </div>
    }
    if (loading1) {
        return <p>Loading...</p>;
    }
    if (user1) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='container d-flex align-items-center mx-auto'>
                <div className='bg-success w-50 ' style={{ height: '1px' }}></div>
                <p className=' mt-1 p-2'>OR</p>
                <div className='bg-success w-50 ' style={{ height: '1px' }}></div>

            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()()}
                    className='btn btn-primary w-40 d-block mx-auto'><img src={GoogleLogo} alt="" /> <span>Continue With Google</span></button>
            </div>
        </div>
    );
};

export default SocialSignin;