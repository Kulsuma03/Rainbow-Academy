import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider()
    
    // sign in with google 
    
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // sign with email and password 

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log out 

    const logOut = () => {
        return signOut(auth);
    }

    // set CurrentUser 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return () => {unsubscribe()}
    },[]);


    const authInfo = {user, signInWithGoogle, logOut, createUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;