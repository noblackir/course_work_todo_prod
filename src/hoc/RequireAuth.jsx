import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import useAuth from '../hook/useAuth'
import { useState } from 'react'

const RequireAuth = ({children}) => {
    const location = useLocation()
    const auth = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'))

    if(!isLoggedIn){
        return <Navigate to={'/login'} state={{from: location}}/>
    }
  return children
}

export default RequireAuth