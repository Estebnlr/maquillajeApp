import { useContext } from "react"
import { AuthContext } from "../context/authContext"

import { Navigate } from "react-router-dom"

export default function ProtectedRoute(props) {

  const { user } = useContext(AuthContext)

  if(user) {
   
    return props.children 
  }
 
  return (<Navigate to="/login" replace />)
}