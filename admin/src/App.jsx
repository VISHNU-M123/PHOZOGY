import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import AddCategorySubcategory from './pages/AddCategorySubcategory'
import { AdminContext } from './context/AdminContext'
import EditCategorySubcategory from './pages/EditCategorySubcategory'
import AllCategory from './pages/AllCategory'
import AllSubCategory from './pages/AllSubCategory'

const App = () => {

  const {aToken} = useContext(AdminContext)
  return (
    <div>
      <Routes>
        <Route path='/' element={aToken ? <Dashboard/> : <Navigate to='/login'/>} />
        <Route path='/login' element={!aToken ? <Login/> : <Navigate to="/"/>} />
        <Route path='/add-category' element={aToken ? <AddCategorySubcategory/> : <Navigate to='/login'/>} />
        <Route path='/add-subCategory' element={aToken ? <AddCategorySubcategory/> : <Navigate to='/login'/>} />
        <Route path='/edit-category/:categoryId' element={aToken ? <EditCategorySubcategory/> : <Navigate to='/login'/>} />
        <Route path='/all-category' element={aToken ? <AllCategory/> : <Navigate to='/login'/>} />
        <Route path='/all-subCategories/:categoryId' element={aToken ? <AllSubCategory/> : <Navigate to='/login'/>} />
      </Routes>
    </div>
  )
}

export default App
