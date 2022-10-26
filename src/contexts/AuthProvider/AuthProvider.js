import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    
    // sign in with google 
    
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // sing in with  github 

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // sign in with facebook

    const signInWithFaceBook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    // login with password 

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign with email and password 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log out 

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // reset password 

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    // set CurrentUser 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
            setUser(currentUser);
            
            setLoading(false)
        })
        return () => {unsubscribe()}
    },[]);

    // verify email

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // updateProfile 

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    const authInfo = {
        user, 
        signInWithGoogle,
        signInWithGithub, 
        signInWithFaceBook,
        logOut, 
        createUser, 
        logIn, 
        resetPassword,
        updateUserProfile,
        verifyEmail,
        loading,
        setLoading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;