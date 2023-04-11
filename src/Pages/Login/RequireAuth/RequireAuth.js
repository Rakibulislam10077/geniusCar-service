import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification] = useSendEmailVerification(auth)
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (!user.emailVerified) {
        return <div className='w-1/2 mx-auto mt-10'>
            <h1 className='text-red-700'>Your Email is not verified</h1>
            <h1 className='text-green-500'>Please Verify your email address</h1>
            <button onClick={async () => {
                const success = await sendEmailVerification();
                if (success) {
                    toast('Sent email');
                }
            }} className='bg-gray-500 rounded py-2 px-3 text-white font-bold my-3'>
                Send verification
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;