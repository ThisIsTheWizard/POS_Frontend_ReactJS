import React, { useEffect, useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router'

// Layouts
import AuthLayout from './layouts/AuthLayout'
import GuestLayout from './layouts/GuestLayout'

// Pages
import Dashboard from './pages/dashboard/index'
import Login from './pages/users/login'
import Register from './pages/users/register'

const App = () => {
  const location = useRef(useLocation())
  const [isLoggedIn, SetIsLoggedIn] = useState(true)

  useEffect(() => {
    if (
      location &&
      location.current &&
      ['/login', '/register'].includes(location.current.pathname)
    ) {
      SetIsLoggedIn(false)
    }
  }, [])

  return (
    <>
      {isLoggedIn ? (
        <AuthLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<div>Error page</div>} />
          </Routes>
        </AuthLayout>
      ) : (
        <GuestLayout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </GuestLayout>
      )}
    </>
  )
}

export default App
