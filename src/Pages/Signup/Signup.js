import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);
        
        // create user email and password 
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            toast.success('Successfully Sign up')
            console.log(user);
            form.reset();
            navigate('/')
            handleUpdateUserProfile(name, photoURL)
        })
        .catch(error => {
            toast.error(error.message)
        })
        
    }

    // update profile 
    
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName : name,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => toast.error(error.message))
    }
    return (
        <div className='w-full'>
            <div className="w-full mx-auto mt-2 max-w-md p-8 space-y-3 rounded-xl shadow-md bg-gray-100 ">
                <h1 className="text-2xl font-bold text-center">Please Sign Up</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">

                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block ">Username</label>
                        <input type="text" name="name" id="name" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-300  focus:border-violet-400" required />

                    </div><div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block ">PhotoURL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-300  focus:border-violet-400" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block ">User Email</label>
                        <input type="email" name="email" id="email" placeholder="UserEmail" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-300  focus:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-300  focus:border-violet-400" required />

                        <div className="flex justify-end text-xs text-sky-500">
                            <p>Already have an account?  <Link to="/login" >Please Log in</Link></p>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-white bg-green-700 hover:bg-green-800">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;