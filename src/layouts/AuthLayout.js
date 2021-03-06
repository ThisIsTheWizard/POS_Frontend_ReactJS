import React, { useCallback, useContext, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

// Layout Related Components
import { Container } from 'reactstrap'
import Header from '../components/dashboard/common/Header'
import LeftSideBar from '../components/dashboard/sidebars/LeftSidebar'
import Footer from '../components/dashboard/common/Footer'

// Toast Triggering Object
import { toast } from 'react-toastify'

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
          <div className="page-content">
            <Container fluid>
              <Outlet />
            </Container>
          </div>
          <Footer />
        </div>
      </div>
    )
  }

  return <Navigate to="/login" replace state={{ from: location }} />
}

export default AuthLayout
