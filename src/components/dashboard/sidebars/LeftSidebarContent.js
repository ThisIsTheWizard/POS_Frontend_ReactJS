import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import MetisMenu from 'metismenujs'
import { Link } from 'react-router-dom'

const LeftSidebarContent = () => {
  const location = useLocation()
  const pathname = useRef(location.pathname)
  const activateParentDropdown = (item) => {
    item.classList.add('active')
    const parent = item.parentElement

    if (parent) {
      parent.classList.add('mm-active')
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add('mm-show')

        const parent3 = parent2.parentElement

        if (parent3) {
          parent3.classList.add('mm-active') // li
          parent3.childNodes[0].classList.add('mm-active') //a
          const parent4 = parent3.parentElement
          if (parent4) {
            parent4.classList.add('mm-active')
          }
        }
      }
      return false
    }
    return false
  }

  useEffect(() => {
    const initMenu = () => {
      new MetisMenu('#side-menu')

      let matchingMenuItem = null
      const ul = document.getElementById('side-menu')
      const items = ul.getElementsByTagName('a')

      for (let i = 0; i < items.length; ++i) {
        if (pathname.current === items[i]?.pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [])

  return (
    <>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title">Menu</li>

          <li>
            <Link to="/dashboard" className="waves-effect">
              <i className="ri-dashboard-line"></i>
              <span className="badge badge-pill badge-success float-right">
                3
              </span>
              <span className="ml-1">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="#" className=" waves-effect">
              <i className="ri-calendar-2-line"></i>
              <span className="ml-1">Calendar</span>
            </Link>
          </li>

          <li>
            <Link to="#" className=" waves-effect">
              <i className="ri-chat-1-line"></i>
              <span className="ml-1">Chat</span>
            </Link>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-store-2-line"></i>
              <span className="ml-1">Ecommerce</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="#">Products</Link>
              </li>
              <li>
                <Link to="#">Product Detail</Link>
              </li>
              <li>
                <Link to="#">Orders</Link>
              </li>
              <li>
                <Link to="#">Customers</Link>
              </li>
              <li>
                <Link to="#">Cart</Link>
              </li>
              <li>
                <Link to="#">Checkout</Link>
              </li>
              <li>
                <Link to="#">Shops</Link>
              </li>
              <li>
                <Link to="#">Add Product</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-mail-send-line"></i>
              <span className="ml-1">Email</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="#">Inbox</Link>
              </li>
              <li>
                <Link to="#">Read Email</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#" className=" waves-effect">
              <i className="ri-artboard-2-line"></i>
              <span className="ml-1">Kanban Board</span>
            </Link>
          </li>

          <li className="menu-title">Pages</li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-account-circle-line"></i>
              <span className="ml-1">Authentication</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="#">Login</Link>
              </li>
              <li>
                <Link to="#">Register</Link>
              </li>
              <li>
                <Link to="#">Recover Password</Link>
              </li>
              <li>
                <Link to="#">Lock Screen</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-profile-line"></i>
              <span className="ml-1">Utility</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="#">Starter Page</Link>
              </li>
              <li>
                <Link to="#">Maintenance</Link>
              </li>
              <li>
                <Link to="#">Coming Soon</Link>
              </li>
              <li>
                <Link to="#">Timeline</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
              <li>
                <Link to="#">Pricing</Link>
              </li>
              <li>
                <Link to="#">Error 404</Link>
              </li>
              <li>
                <Link to="#">Error 500</Link>
              </li>
            </ul>
          </li>

          <li className="menu-title">Components</li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-pencil-ruler-2-line"></i>
              <span className="ml-1">UI Elements</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="#">Alerts</Link>
              </li>
              <li>
                <Link to="#">Buttons</Link>
              </li>
              <li>
                <Link to="#">Cards</Link>
              </li>
              <li>
                <Link to="#">Carousel</Link>
              </li>
              <li>
                <Link to="#">Dropdowns</Link>
              </li>
              <li>
                <Link to="#">Grid</Link>
              </li>
              <li>
                <Link to="#">Images</Link>
              </li>
              <li>
                <Link to="#">Lightbox</Link>
              </li>
              <li>
                <Link to="#">Modals</Link>
              </li>
              <li>
                <Link to="#">Range Slider</Link>
              </li>
              <li>
                <Link to="#">Round Slider</Link>
              </li>
              <li>
                <Link to="#">Session Timeout</Link>
              </li>
              <li>
                <Link to="#">Progress Bars</Link>
              </li>
              <li>
                <Link to="#">Sweet Alerts</Link>
              </li>
              <li>
                <Link to="#">Tabs & Accordions</Link>
              </li>
              <li>
                <Link to="#">Typography</Link>
              </li>
              <li>
                <Link to="#">Video</Link>
              </li>
              <li>
                <Link to="#">General</Link>
              </li>
              <li>
                <Link to="#">Rating</Link>
              </li>
              <li>
                <Link to="#">Notifications</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="waves-effect">
              <i className="ri-eraser-fill"></i>
              <span className="badge badge-pill badge-danger float-right">
                6
              </span>
              <span className="ml-1">Forms</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="#">Elements</Link>
              </li>
              <li>
                <Link to="#">Validation</Link>
              </li>
              <li>
                <Link to="#">Advanced Plugins</Link>
              </li>
              <li>
                <Link to="#">Editors</Link>
              </li>
              <li>
                <Link to="#">File Upload</Link>
              </li>
              <li>
                <Link to="#">X-editable</Link>
              </li>
              <li>
                <Link to="#">Wizard</Link>
              </li>
              <li>
                <Link to="#">Mask</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-table-2"></i>
              <span className="ml-1">Tables</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="#">Basic Tables</Link>
              </li>
              <li>
                <Link to="#">Data Tables</Link>
              </li>
              <li>
                <Link to="#">Responsive Table</Link>
              </li>
              <li>
                <Link to="#">Editable Table</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-bar-chart-line"></i>
              <span className="ml-1">Charts</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="#">Apexcharts</Link>
              </li>
              <li>
                <Link to="#">Chartjs</Link>
              </li>
              <li>
                <Link to="#">Jquery Knob</Link>
              </li>
              <li>
                <Link to="#">Sparkline</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-brush-line"></i>
              <span className="ml-1">Icons</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="#">Remix Icons</Link>
              </li>
              <li>
                <Link to="#">Material Design</Link>
              </li>
              <li>
                <Link to="#">Dripicons</Link>
              </li>
              <li>
                <Link to="#">Font awesome 5</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-map-pin-line"></i>
              <span className="ml-1">Maps</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="#">Google Maps</Link>
              </li>
              <li>
                <Link to="#">Vector Maps</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="ri-share-line"></i>
              <span className="ml-1">Multi Level</span>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/#">Level 1.1</Link>
              </li>
              <li>
                <Link to="/#" className="has-arrow">
                  Level 1.2
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/#">Level 2.1</Link>
                  </li>
                  <li>
                    <Link to="/#">Level 2.2</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default LeftSidebarContent
