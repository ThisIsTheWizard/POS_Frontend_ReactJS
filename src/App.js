import React, { useContext } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

// AppContext From Context API
import AppContext from './context/Context'

// Loader
import Loader from './components/common/Loader'

// Layouts
import AuthLayout from './layouts/AuthLayout'
import GuestLayout from './layouts/GuestLayout'
import ErrorLayout from './layouts/ErrorLayout'

// Pages
import Login from './pages/users/login'
import Register from './pages/users/register'
import Dashboard from './pages/dashboard/index'
import Product from './pages/dashboard/product/index'
import Products from './pages/dashboard/products/index'

// Toast Components
import { ToastContainer, Slide } from 'react-toastify'

const MyRoutes = () => {
  const location = useLocation()

  return (
    <Routes>
      {/* Authenticated Routes */}
      <Route path="/" element={<AuthLayout AppContext={AppContext} />}>
        <Route
          path="/"
          element={
            <Navigate to="/dashboard" replace state={{ from: location }} />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashboard/products" element={<Products />} />
      </Route>

      {/* Guest Routes */}
      <Route path="/" element={<GuestLayout AppContext={AppContext} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Error Routes */}
      <Route path="*" element={<ErrorLayout />}></Route>
    </Routes>
  )
}

const App = () => {
  const { isLoading } = useContext(AppContext)

  return (
    <>
      {/* Loader */}
      {isLoading ? <Loader /> : <MyRoutes />}

      {/* Toast Component */}
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar
        newestOnTop={false}
        position="top-right"
        pauseOnFocusLoss
        pauseOnHover
        rtl={false}
        theme="colored"
        transition={Slide}
      />
    </>
  )
}

export default App
