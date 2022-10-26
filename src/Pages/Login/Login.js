import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [userEmail, setUserEmail] = useState('')
    const { 
        signInWithGoogle, 
        logIn, 
        resetPassword, 
        user, 
        setLoading, 
        signInWithGithub,
        signInWithFaceBook
    } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    
    
    // console.log(location);

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        // signIn with password 
        logIn(email, password)
            .then(result => {
                // const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, {replace: true});
                toast.success('Successfully log in');
                
                // console.log(user);
            })
            .catch(error => {
                toast.error(error.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }


    //Reset Password
    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('Reset link has been sent, please check email')
            })
            .catch(error => toast.error(error.message))
    }

    // handle google sign In 
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
                setLoading(false)
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    // handle github signIn

    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
            setLoading(false)
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    // handle facebook signIn 

    const handleFacebookSignIn = () => {
        signInWithFaceBook()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
            setLoading(false)
        })
        .catch(error => {
            toast.error(error.message)
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
                        <button onClick={handleGoogleSignIn} className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                            <p>Login with Google</p>
                        </button >
                        <button onClick={handleGithubSignIn} className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">

                            <p>Login with GitHub</p>
                        </button>
                        <button onClick={handleFacebookSignIn} className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">

                            <p>Login with Facebook</p>
                        </button>
                    </div>

                    {/* Sign in with social media end */}

                    {/* Sign In With Email And Password start */}

                    <form onSubmit={handleSubmit} className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onBlur={event => setUserEmail(event.target.value)}
                                    placeholder="leroy@jenkins.com"
                                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300  focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <button
                                        onClick={handleReset}
                                        className="text-xs text-sky-500 hover:underline ">
                                        Forgot password?
                                    </button>
                                </div>
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="*****" 
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300  focus:border-violet-400" />
                            </div>

                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md text-white bg-green-700 hover:bg-green-800">Login</button>
                    </form>
                </div>
                
            </div>

        </div>
    );
};

export default Login;