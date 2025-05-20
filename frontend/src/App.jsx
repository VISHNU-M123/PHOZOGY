import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import PortfolioDetails from './pages/PortfolioDetails'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/portfolio-details' element={<PortfolioDetails/>}/>
        <Route path='/blog-details' element={<BlogDetails/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
