import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'reactstrap'
import { updateBodyClassAndAttribute } from '../../../helpers'

// Import components
import NotificationDropdown from '../dropdowns/NotificationDropdown'
import ProfileMenu from '../dropdowns/ProfileMenu'

//Import logo Images
import logosmlight from '../../../assets/images/logo-sm-light.png'
import logolight from '../../../assets/images/logo-light.png'

const Header = (props) => {
  const [isMobile] = useState(
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  )
  const [sidebarType, setSidebarType] = useState('condensed')

  const updateSideBarType = () => {
    setSidebarType((type) => {
      if (type === 'default') {
        return 'condensed'
      } else if (type === 'condensed') {
        return 'default'
      }
    })
    updateBodyClassAndAttribute(sidebarType, isMobile)
  }

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logosmlight} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logolight} alt="" height="20" />
                </span>
              </Link>
            </div>

            <Button
              size="sm"
              color="none"
              type="button"
              className="px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={() => updateSideBarType()}
            >
              <i className="ri-menu-2-line align-middle"></i>
            </Button>

            <Form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="ri-search-line"></span>
              </div>
            </Form>
          </div>

          <div className="d-flex">
            <NotificationDropdown />

            <ProfileMenu />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
