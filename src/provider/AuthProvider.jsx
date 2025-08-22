import { createContext } from "react";


const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const authInfo = {
        name: "Samiul"
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export{AuthProvider, AuthContext} ;