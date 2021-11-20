import React, { useEffect, useState } from 'react'

// Layout Related Components
import Header from '../components/dashboard/common/Header'
import LeftSideBar from '../components/dashboard/sidebars/LeftSidebar'
import Footer from '../components//dashboard/common/Footer'

const AuthLayout = (props) => {
  const [isShowPreloader, setIsShowPreloader] = useState(true)
  useEffect(() => {
    setIsShowPreloader((isShowPreloader) => !isShowPreloader)
  }, [])

  return (
    <>
      {isShowPreloader ? (
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <i className="ri-loader-line spin-icon"></i>
            </div>
          </div>
        </div>
      ) : null}

      <div id="layout-wrapper">
        <Header />
        <LeftSideBar />
        <div className="main-content">
          {props.children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default AuthLayout
