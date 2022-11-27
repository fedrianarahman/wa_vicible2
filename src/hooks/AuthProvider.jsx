import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


export const  AuthContext = React.createContext(null);
const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation()
    const [token,setToken] = useState(null)
    
    const handleLogout = () =>{
        window.localStorage.removeItem("token");
        navigate('/login');
        
    }
    const value = {
        token,
        onLogout : handleLogout,
        getToken : () => window.localStorage.getItem("token"),
    };
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider