import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider()
    
    // sign in with google 
    
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
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
    },[])

    const authInfo = {user, signInWithGoogle, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;