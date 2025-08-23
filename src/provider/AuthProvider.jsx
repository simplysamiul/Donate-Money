import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";


const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    // user state
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    // signin with google
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    };

    // create user with email and password
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    // user sign in with email and pass
    const signInUser = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass);
    };

    // log out user

    const userLogOut = () => {
        signOut(auth)
        .then(() => console.log("Log out user"))
        .catch(err => console.log(err))
    } 
    
    
    
    const authInfo = {
        googleSignIn,
        setUser,
        createUser,
        signInUser,
        userLogOut,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export{AuthProvider, AuthContext} ;