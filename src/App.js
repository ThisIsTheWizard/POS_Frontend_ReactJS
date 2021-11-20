import React, { useEffect, useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router'

// layouts
import AuthLayout from './layouts/Auth'
import DefaultLayout from './layouts/Default'

import Dashboard from './pages/dashboard/index'
import Login from './pages/users/login'

import './theme.scss'

const App = () => {
  const [isDefaultRoutes, SetIsDefaultRoutes] = useState(true)
  const location = useRef(useLocation())

  useEffect(() => {
    if (
      location &&
      location.current &&
      location.current.pathname.includes('/dashboard')
    ) {
      SetIsDefaultRoutes(false)
    }
  }, [])

  return (
    <>
      {isDefaultRoutes ? (
        <DefaultLayout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>Error page</div>} />
          </Routes>
        </DefaultLayout>
      ) : (
        <AuthLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<div>Error page</div>} />
          </Routes>
        </AuthLayout>
      )}
    </>
  )
}

export default App
