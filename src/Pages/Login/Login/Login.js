import { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorElement;

    const handleForm = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = () => {
        navigate('/register')
    }

    if (error) {
        errorElement = <p className="text-red-700">Error: {error?.message}</p>

    }

    if (user) {
        navigate('/home')
    }

    const forgetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Please check your email ')
        }
        else {
            toast('Please enter your email address.!')
        }
    }

    return (
        <div className='bg-gray-300 p-4 rounded-lg w-1/3 mt-12 mx-auto'>
            <h1 className="text-3xl text-blue-600 my-4">Please Login</h1>
            <form className="w-full " onSubmit={handleForm}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input ref={emailRef} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Enter your email" required />
                    <p className='text-gray-500 mt-1'>We'll never share your email with anyone else.</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input ref={passwordRef} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" required />
                </div>
                <div className="mb-4">
                    <button onClick={handleForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                </div>

                <div>
                    <p>New to Genius Car? <span className="text-blue-400 cursor-pointer underline" onClick={navigateRegister}>Please Register</span></p>
                    <p>Forget Password ? <span className="text-blue-400 cursor-pointer underline" onClick={forgetPassword}>Reset Password</span></p>
                </div>
                {errorElement}
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>

    );
};

export default Login;


