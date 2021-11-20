import React from 'react'
import { Routes, Route } from 'react-router-dom'

// layouts
import Dashboard from './pages/dashboard/index'
import VerticalLayout from './components/layouts/Auth'

import './theme.scss'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<VerticalLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<div>Error page</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
