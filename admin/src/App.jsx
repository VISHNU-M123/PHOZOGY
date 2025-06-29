import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import AddCategorySubcategory from './pages/AddCategorySubcategory'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/add-category' element={<AddCategorySubcategory/>} />
      </Routes>
    </div>
  )
}

export default App
