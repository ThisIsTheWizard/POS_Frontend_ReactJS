import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const GuestLayout = ({ AppContext }) => {
  const { loginAccessToken } = useContext(AppContext)

  return loginAccessToken ? <Navigate to="/dashboard" replace /> : <Outlet />
}

export default GuestLayout
