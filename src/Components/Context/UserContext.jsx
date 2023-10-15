// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber, signOut } from 'firebase/auth';
import app from '../FireBase/Firebase.config';
export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        return signOut(auth);
    }
    const setRecapcha = (number) => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {});
        window.recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, window.recaptchaVerifier);

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // console.log('currently loged in user', currentUser);
        })
        return () => {
            unSubscribe();
        }

    }, []);

    const authInfo = { createUser, signIn, signInWithGoogle, logOut, user, loading, setRecapcha };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;