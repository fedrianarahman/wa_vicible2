import React from 'react'
import { useLocation , Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const token = window.localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }
  return children
}

export default ProtectedRoute