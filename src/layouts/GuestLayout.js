import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const GuestLayout = ({ AppContext }) => {
  const location = useLocation()
  const { isLoggedIn } = useContext(AppContext)

  if (isLoggedIn) {
    return <Navigate to="/" replace state={{ from: location }} />
  }

  return <Outlet />
}

export default GuestLayout
