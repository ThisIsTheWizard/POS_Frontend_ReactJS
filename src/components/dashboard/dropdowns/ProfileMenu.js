import React, { useContext, useState } from 'react'
import { unsetLoginAccessToken } from '../../../api/auth/auth.helper'

// AppContext From Context API
import AppContext from '../../../context/Context'

// Components
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

// Images
import avatar2 from '../../../assets/images/users/avatar-2.jpg'

const ProfileMenu = () => {
  const username = 'The Wizard'
  const { setAuthUser, setIsLoggedIn } = useContext(AppContext)
  const [isShowProfileMenu, setIsShowProfileMenu] = useState(false)

  const handleLogout = () => {
    unsetLoginAccessToken()
    setAuthUser({})
    setIsLoggedIn(false)
  }

  return (
    <>
      <Dropdown
        isOpen={isShowProfileMenu}
        toggle={() => setIsShowProfileMenu((status) => !status)}
        className="d-inline-block user-dropdown"
      >
        <DropdownToggle
          tag="button"
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
        >
          <img
            className="rounded-circle header-profile-user mr-1"
            src={avatar2}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ml-1 text-transform">
            {username}
          </span>
          <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i>
        </DropdownToggle>
        <DropdownMenu align="right">
          <DropdownItem href="#">
            <i className="ri-user-line align-middle mr-1"></i> Profile
          </DropdownItem>
          <DropdownItem href="#">
            <i className="ri-wallet-2-line align-middle mr-1"></i> My Wallet
          </DropdownItem>
          <DropdownItem className="d-block" href="#">
            <span className="badge badge-success float-right mt-1">11</span>
            <i className="ri-settings-2-line align-middle mr-1"></i>
            Settings
          </DropdownItem>
          <DropdownItem href="#">
            <i className="ri-lock-unlock-line align-middle mr-1"></i> Lock
            screen
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="text-danger" onClick={() => handleLogout()}>
            <i className="ri-shut-down-line align-middle mr-1 text-danger"></i>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default ProfileMenu
