import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false)

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)



    const goToLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home');
    }
    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    // const handleAgree = () => {
    //     setAgree(!agree);
    // }

    const handleRegisterForm = (event) => {
        event.preventDefault()

        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }
    }
    return (
        <div className='mx-auto w-1/2 py-4 mt-12 bg-slate-200'>
            <div className="w-full mx-auto max-w-xl">
                <form onSubmit={handleRegisterForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input onBlur={handleName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input onBlur={handleEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        {
                            password <= 6 ?
                                <input onBlur={handlePassword} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                :
                                <input onBlur={handlePassword} className="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        }
                        {
                            password < 6 ?
                                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                                :
                                <p className="text-green-500 text-xs italic">successful</p>
                        }
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please confirm your password.</p>
                    </div>
                    <div className='mt-6 mb-4'>
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={agree ? 'text-green-700' : 'text-red-700'} htmlFor="terms"> Accept Genius Car Terms and Conditions</label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={handleRegisterForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                        </button>
                    </div>
                    <div className='mt-4'>
                        <p>New to car Genius Car? <span onClick={goToLogin} className='text-red-600 cursor-pointer'>Please Login</span></p>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Register;