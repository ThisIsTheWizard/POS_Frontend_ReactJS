import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

// Layout Related Components
import Header from '../components/dashboard/common/Header'
import LeftSideBar from '../components/dashboard/sidebars/LeftSidebar'
import Footer from '../components/dashboard/common/Footer'

// Toast Triggering Object
import { toast } from 'react-toastify'
import { useCallback } from 'react/cjs/react.development'

const AuthLayout = ({ AppContext }) => {
  const location = useLocation()
  const { isLoggedIn, authUser } = useContext(AppContext)

  const setToastMessageForAuthUser = useCallback(() => {
    if (isLoggedIn && authUser && authUser.name) {
      toast.success(`${authUser?.name}, welcome to dashboard!`)
    }
  }, [isLoggedIn, authUser])

  useEffect(() => {
    setToastMessageForAuthUser()
    // eslint-disable-next-line
  }, [])

  if (isLoggedIn) {
    return (
      <div id="layout-wrapper">
        <Header />

        <LeftSideBar />

        <div className="main-content">
          <Outlet />

          <Footer />
        </div>
      </div>
    )
  }

  return <Navigate to="/login" replace state={{ from: location }} />
}

export default AuthLayout
