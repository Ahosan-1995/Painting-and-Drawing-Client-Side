import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";

import { createContext, useEffect, useState } from "react";





const auth = getAuth(app);

export const AuthContext = createContext(null);

// Sign in google
// const googleProvider = new GoogleAuthProvider();
const googleAuthProvider = new GoogleAuthProvider();

// Sign in Github
const gitHubProvider = new GithubAuthProvider();





const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    
    const [loading, setLoading]=useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    } 


    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }


    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);

    }


    // GOOGLE SIGN IN
    // const signInWithGoogle1 = ()=>{
    //     setLoading(true);
    //     return signInWithPopup(auth, googleProvider);
    // }

    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider)
    }

    

 // GIT SIGN IN
    const createGitHub=()=>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the on auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])


const authInfo={
    user,
    createUser,
    signInWithGoogle,
    createGitHub,
    logOut,
    loading,
    signIn

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;