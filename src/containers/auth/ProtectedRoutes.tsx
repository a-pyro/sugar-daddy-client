import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

interface ProtectedRouteProps {
  children: JSX.Element
}
const ProtectedRoutes = ({ children }: ProtectedRouteProps) => {
  const token = cookies.get('token')
  if (!token) return <Navigate to='/login' />
  return children
}

export default ProtectedRoutes
