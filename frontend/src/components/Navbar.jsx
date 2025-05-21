import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import {NavLink, useNavigate} from 'react-router-dom'


const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = useNavigate()
  return (
    <>
      <div className='items-center h-[90px] lg:grid lg:grid-cols-[1.3fr_3fr_1fr] flex justify-between mx-5 lg:mx-0'>
        <div>
          <img onClick={() => navigate('/')} className='mx-auto cursor-pointer' src={logo} alt="" />
        </div>
        <div className='hidden lg:block'>
          <ul className='flex justify-between'>
            <NavLink to='/' className={({isActive}) => 
              isActive
              ? 'font-bold border-b-[3px] border-b-green-600 py-8'
              : 'font-bold border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-green-600 py-8 cursor-pointer'
            }>
              HOME
            </NavLink>

            <NavLink to='/about' className={({isActive}) => 
              isActive
              ? 'font-bold border-b-[3px] border-b-green-600 py-8'
              : 'font-bold border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-green-600 py-8 cursor-pointer'
            }>
              ABOUT
            </NavLink>
            
            <NavLink to='/services' className={({isActive}) => 
              isActive
              ? 'font-bold border-b-[3px] border-b-green-600 py-8'
              : 'font-bold border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-green-600 py-8 cursor-pointer'
            }>
              SERVICE
            </NavLink>

            <NavLink to='/pricing' className={({isActive}) => 
              isActive
              ? 'font-bold border-b-[3px] border-b-green-600 py-8'
              : 'font-bold border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-green-600 py-8 cursor-pointer'
            }>
              PRICING
            </NavLink>

            <NavLink to='/portfolio' className={({isActive}) => 
              isActive
              ? 'font-bold border-b-[3px] border-b-green-600 py-8'
              : 'font-bold border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-green-600 py-8 cursor-pointer'
            }>
              PORTFOLIO
            </NavLink>

            <NavLink to='/blog' className={({isActive}) => 
              isActive
              ? 'font-bold border-b-[3px] border-b-green-600 py-8'
              : 'font-bold border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-green-600 py-8 cursor-pointer'
            }>
              BLOG
            </NavLink>
              <li className='relative font-bold hover:border-b-[3px] border-b-green-600 py-8 cursor-pointer group'>PAGES
                <ul className='absolute bg-[#111111] w-[180px] top-[105px] group-hover:top-[90px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                  <NavLink to='/gallery'>
                    <li className='text-[#ffffff] py-[5px] px-[18px] font-[400]'>Gallery</li>
                  </NavLink>
                  <NavLink to='/portfolio-details'>
                    <li className='text-[#ffffff] py-[5px] px-[18px] font-[400]'>Portfolio Details</li>
                  </NavLink>
                  <NavLink to='/blog-details'>
                    <li className='text-[#ffffff] py-[5px] px-[18px] font-[400]'>Blog Details</li>
                  </NavLink>
                </ul>
              </li>
            <NavLink to='/contact' className={({isActive}) => 
              isActive
              ? 'font-bold border-b-[3px] border-b-green-600 py-8'
              : 'font-bold border-b-[3px] border-b-transparent hover:border-b-[3px] hover:border-green-600 py-8 cursor-pointer'
            }>
              CONTACT
            </NavLink>
          </ul>
        </div>

        <div className='flex items-center gap-3'>
          <div className='bg-green-600 w-12 h-12 flex items-center justify-center text-md text-white mx-auto'>
            <CiSearch strokeWidth={3} />
          </div>

          <div className='block lg:hidden' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <GiHamburgerMenu size={24} />
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='w-full z-10 px-[20px] pb-[5px]'>
          <div className='bg-[#111]'>
            <ul>
              <NavLink to='/'>
                <li className='py-[8px] px-[30px] cursor-pointer text-[#fff] text-[14px] font-[400]'>Home</li>
              </NavLink>
              <NavLink to='/about'>
                <li className='py-[8px] px-[30px] cursor-pointer text-[#fff] text-[14px] font-[400]'>About</li>
              </NavLink>
              <NavLink to='/services'>
                <li className='py-[8px] px-[30px] cursor-pointer text-[#fff] text-[14px] font-[400]'>Services</li>
              </NavLink>
              <NavLink to='/pricing'>
                <li className='py-[8px] px-[30px] cursor-pointer text-[#fff] text-[14px] font-[400]'>Pricing</li>
              </NavLink>
              <NavLink to='/portfolio'>
                <li className='py-[8px] px-[30px] cursor-pointer text-[#fff] text-[14px] font-[400]'>Portfolio</li>
              </NavLink>
              <NavLink to='/blog'>
                <li className='py-[8px] px-[30px] cursor-pointer text-[#fff] text-[14px] font-[400]'>Blog</li>
              </NavLink>
              <li className='py-[8px] px-[30px] cursor-pointer text-[#fff] text-[14px] font-[400]'>Pages</li>
              <NavLink to='/contact'>
                <li className='py-[8px] px-[30px] cursor-pointer text-[#fff] text-[14px] font-[400]'>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
