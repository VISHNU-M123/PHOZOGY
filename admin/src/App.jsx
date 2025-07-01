import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import AddCategorySubcategory from './pages/AddCategorySubcategory'
import { AdminContext } from './context/AdminContext'

const App = () => {

  const {aToken} = useContext(AdminContext)
  return (
    <div>
      <Routes>
        <Route path='/' element={aToken ? <Dashboard/> : <Navigate to='/login'/>} />
        <Route path='/login' element={!aToken ? <Login/> : <Navigate to="/"/>} />
        <Route path='/add-category' element={aToken ? <AddCategorySubcategory/> : <Navigate to='/login'/>} />
      </Routes>
    </div>
  )
}

export default App
