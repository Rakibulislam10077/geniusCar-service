import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login')
    }
    const handleRegisterForm = (event) => {
        event.preventDefault()
        const name = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='mx-auto w-1/2 py-4 mt-12 bg-slate-200'>
            <div class="w-full mx-auto max-w-md">
                <form onSubmit={handleRegisterForm} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-bold mb-2" for="confirm-password">
                            Confirm Password
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="******************" />
                        <p class="text-red-500 text-xs italic">Please confirm your password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                        </button>
                    </div>
                    <div className='mt-4'>
                        <p>New to car Genius Car? <span onClick={goToLogin} className='text-red-600 cursor-pointer'>Please Register</span></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;