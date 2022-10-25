import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-full  mx-auto'>
            <div className=" w-80 mt-14 md:w-full mx-auto max-w-md p-21 mt-5 rounded-md shadow sm:p-8 bg-gray-100 ">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center text-gray-400 text-orange-500">Don't have account?
                    <Link className="focus:underline hover:underline">Sign up here</Link>
                </p>
                <div className='md:flex'>

                    {/* Sign In With social media start here */}

                    <div className="my-6 mr-2 space-y-4">
                        <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">

                            <p>Login with Google</p>
                        </button>
                        <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">

                            <p>Login with GitHub</p>
                        </button>
                        <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">

                            <p>Login with Facebook</p>
                        </button>
                    </div>
                    
                    {/* Sign in with social media end */}

                    {/* Sign In With Email And Password start */}

                    <form className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    {/* <Link to='/' className="text-xs hover:underline text-gray-400">Forgot password?</Link> */}
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                            </div>
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-sky-500 hover:bg-sky-700 text-gray-900">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;