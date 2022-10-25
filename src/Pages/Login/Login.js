import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { signInWithGoogle, } = useContext(AuthContext);

    const handleSubmit = (event) => {
    event.preventDefault()



    }

    // handle google sign In 
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className='w-full  mx-auto'>
            <div className=" w-80 mt-14 md:w-full mx-auto max-w-md p-21 mt-5 rounded-md shadow sm:p-8 bg-gray-100 ">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center text-sky-500">Don't have account?
                    <Link to="/signup" className="focus:underline hover:underline">Sign up here</Link>
                </p>
                <div className='md:flex'>

                    {/* Sign In With social media start here */}

                    <div className="my-6 mr-2 space-y-4">
                        <button onClick={handleGoogleSignIn } className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
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

                    <form onSubmit={handleSubmit} className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    {/* <Link to='/' className="text-xs hover:underline text-gray-400">Forgot password?</Link> */}
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300  focus:border-violet-400" />
                            </div>
                            
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md text-white bg-green-700 hover:bg-green-800">Login</button>
                    </form>
                </div>
                <p className='text-center'>error</p>
            </div>
            
        </div>
    );
};

export default Login;