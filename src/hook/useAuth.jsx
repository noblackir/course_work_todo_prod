import React from 'react'
import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";


const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth