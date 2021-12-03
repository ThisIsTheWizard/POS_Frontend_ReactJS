import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// Layout Related Components
import Header from '../components/dashboard/common/Header'
import LeftSideBar from '../components/dashboard/sidebars/LeftSidebar'
import Footer from '../components/dashboard/common/Footer'

// Toast Triggering Object
import { toast } from 'react-toastify'
import { useCallback } from 'react/cjs/react.development'

const AuthLayout = ({ AppContext }) => {
  const { isLoggedIn, authUser } = useContext(AppContext)

  const setToasMessageForAuthUser = useCallback(() => {
    if (isLoggedIn && authUser && authUser.name) {
      toast.success(`${authUser?.name}, Welcome to dashboard!`)
    }
  }, [isLoggedIn, authUser])

  useEffect(() => {
    setToasMessageForAuthUser()
    // eslint-disable-next-line
  }, [])

  return isLoggedIn ? (
    <div id="layout-wrapper">
      <Header />

      <LeftSideBar />

      <div className="main-content">
        <Outlet />

        <Footer />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  )
}

export default AuthLayout
