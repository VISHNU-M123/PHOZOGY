import React from 'react'
import logo from '../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <div className='items-center h-[90px] lg:grid lg:grid-cols-[1.3fr_3fr_1fr] flex justify-between mx-5 lg:mx-0'>
      <div>
        <img className='mx-auto' src={logo} alt="" />
      </div>
      <div className='hidden lg:block'>
        <ul className='flex justify-between'>
            <li className='font-bold border-b-3 border-b-green-600 py-8'>HOME</li>
            <li className='font-bold hover:border-b-3 border-b-green-600 py-8 cursor-pointer'>ABOUT</li>
            <li className='font-bold hover:border-b-3 border-b-green-600 py-8 cursor-pointer'>SERVICE</li>
            <li className='font-bold hover:border-b-3 border-b-green-600 py-8 cursor-pointer'>PRICING</li>
            <li className='font-bold hover:border-b-3 border-b-green-600 py-8 cursor-pointer'>PORTFOLIO</li>
            <li className='font-bold hover:border-b-3 border-b-green-600 py-8 cursor-pointer'>BLOG</li>
            <li className='font-bold hover:border-b-3 border-b-green-600 py-8 cursor-pointer'>PAGES</li>
            <li className='font-bold hover:border-b-3 border-b-green-600 py-8 cursor-pointer'>CONTACT</li>
        </ul>
      </div>

      <div className='flex items-center gap-3'>
          <div className='bg-green-600 w-12 h-12 flex items-center justify-center text-md text-white mx-auto'>
          <CiSearch strokeWidth={3} />
        </div>

        <div className='block lg:hidden'>
          <GiHamburgerMenu size={24} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
