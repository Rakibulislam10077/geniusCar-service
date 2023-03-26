import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    if (error || error1) {
        errorElement = <div>
            <p className='text-red-700'>Error: {error?.message} {error?.message}</p>
        </div>

    }
    if (user || user1) {
        navigate('/home');
    }
    if (loading || loading1) {
        return (
            <div>
                <p className='text-red-700 text-center mt-6'>Loading...</p>
            </div>
        )
    }
    return (
        <div>
            <div className='flex justify-center items-center mt-10'>
                <div className='bg-red-300 w-1/4 h-1 rounded'></div>
                <p className='text-2xl mx-4'>or</p>
                <div className='bg-red-300 w-1/4 h-1 rounded'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className=' mx-auto mt-4 bg-blue-400 text-white rounded w-1/2 flex justify-center items-center text-2xl px-12 py-3'> Google sign in  </button>
            </div>
            <div>
                <button className=' mx-auto mt-4 bg-blue-400 text-white rounded w-1/2 flex justify-center items-center text-2xl px-12 py-3'> Facebook sign in  </button>
            </div>
            <div>
                <button onClick={() => signInWithGithub()} className=' mx-auto mt-4 bg-blue-400 text-white rounded w-1/2 flex justify-center items-center text-2xl px-12 py-3'> Github sign in  </button>
            </div>
        </div>
    );
};

export default SocialLogin;