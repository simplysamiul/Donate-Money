import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";


const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    // user state
    const [user, setUser] = useState(null);
    // error state
    // loader state
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // signin with google
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    };

    // create user with email and password
    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    // user sign in with email and pass
    const signInUser = (email, pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    };

    // update profile
    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo)
    }

    // log out user

    const userLogOut = () => {
        signOut(auth)
        .then(() => toast.success("Log out successfully ....!"))
        .catch(err => toast.error(err.message))
    };

    // user tracker
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            unsubscribe();
        }
    },[]);
    
    const authInfo = {
        googleSignIn,
        setUser,
        createUser,
        signInUser,
        userLogOut,
        loading,
        setLoading,
        updateUser,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export{AuthProvider, AuthContext} ;