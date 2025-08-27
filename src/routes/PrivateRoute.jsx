import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../shared/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading />
    }
    
    if(user && user?.email){
        return children;
    };

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;