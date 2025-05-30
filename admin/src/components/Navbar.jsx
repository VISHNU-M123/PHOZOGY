import React from 'react'
import logo_mini from '../assets/logo-mini.svg'
import { MdOutlineMenu } from "react-icons/md";
import { FaRegFile } from "react-icons/fa6";
import { PiGlobeBold } from "react-icons/pi";
import { MdLayers } from "react-icons/md";
import { IoGridSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import faceImgOne from '../assets/face4.jpg'

const Navbar = () => {
  return (
    <div className='bg-[#191c24]'>
      <div className='bg-[#191c24]'>
        {/* <img src={logo_mini} alt="" /> */}
      </div>
      <div className='px-[15px] w-full h-[70px] flex items-stretch'>
        <button className='text-[14px] h-[70px] self-center cursor-pointer'><MdOutlineMenu color='#6c7293' /></button>
        <ul className='w-full flex items-center'>
          <li className='w-full'>
            <form action="" className='mx-[16px] text-[15px] py-[8px] text-white'>
              <input type="text" className='bg-[#191c24] border border-[#2c2e33] outline-none rounded-[6px] px-[20px] pt-[13px] pb-[11px] text-[14px]' placeholder='Search products' />
            </form>
          </li>
        </ul>
        <ul className='flex items-center'>
          <li>
            <a href="" className='mx-[16px] bg-green-500 text-white px-[12px] py-[6px] text-[15px] rounded-[4px]'>+ Create New Project</a>
            {/* <div className='bg-[#191c24] absolute rounded-[4px] mt-0 top-[48px]'>
              <h1 className='p-[16px] text-[15px] font-[500] text-white'>Projects</h1>
              <div className='h-[0.5px] w-full bg-gray-700'></div>
              <a href="" className='flex items-center py-[11px] px-[13px]'>
                <div>
                  <div className='bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                    <FaRegFile className='text-blue-400 text-[17px]' />
                  </div>
                </div>
                <div className='pl-[15px]'>
                  <p className='mb-[4px] max-w-[200px] text-white text-[14px]'>Software Development</p>
                </div>
              </a>
              <div className='h-[0.5px] w-full bg-gray-700'></div>
              <a href="" className='flex items-center py-[11px] px-[13px]'>
                <div>
                  <div className='bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                    <PiGlobeBold className='text-violet-500 text-[17px]' />
                  </div>
                </div>
                <div className='pl-[15px]'>
                  <p className='mb-[4px] max-w-[200px] text-white text-[14px]'>UI Development</p>
                </div>
              </a>
              <div className='h-[0.5px] w-full bg-gray-700'></div>
              <a href="" className='flex items-center py-[11px] px-[13px]'>
                <div>
                  <div className='bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                    <MdLayers  className='text-red-500 text-[17px]' />
                  </div>
                </div>
                <div className='pl-[15px]'>
                  <p className='mb-[4px] max-w-[200px] text-white text-[14px]'>Software Testing</p>
                </div>
              </a>
              <div className='h-[0.5px] w-full bg-gray-700'></div>
              <p className='text-white text-[14px] p-[16px] text-center'>See all projects</p>
            </div> */}
          </li>
          <li>
            <a href="" className='mx-[16px]'>
              <IoGridSharp size={18} color='white' />
            </a>
          </li>
          <li>
            <a href="" className='relative mx-[16px] inline-block'>
              <MdEmail size={20} color='white' />
              <span className='absolute w-[7px] h-[7px] bg-green-500 top-0 right-0 rounded-full'></span>
            </a>
            <div className='absolute mt-0 top-[48px] rounded-[4px] bg-[#191c24]'>
              <h1 className='p-[16px] text-[15px] font-[500] text-white'>Messages</h1>
              <div className='h-[1px] w-full bg-gray-700'></div>
              <a href="" className='py-[11px] px-[13px] flex items-center cursor-pointer'>
                <div>
                  <img src={faceImgOne} className='w-[40px] h-[40px] rounded-full' alt="" />
                </div>
                <div className='pl-[15px]'>
                  <p className='text-[14px] mb-[4px] text-white'>Mark send you a message</p>
                  <p className='text-[#6c7293] text-[14px]'>1 Minutes ago</p>
                </div>
              </a>
              <div className='h-[1px] w-full bg-gray-700'></div>
              <a href="" className='py-[11px] px-[13px] flex items-center cursor-pointer'>
                <div>
                  <img src={faceImgOne} className='w-[40px] h-[40px] rounded-full' alt="" />
                </div>
                <div className='pl-[15px]'>
                  <p className='text-[14px] mb-[4px] text-white'>Cregh send you a message</p>
                  <p className='text-[#6c7293] text-[14px]'>15 Minutes ago</p>
                </div>
              </a>
              <div className='h-[1px] w-full bg-gray-700'></div>
              <a href="" className='py-[11px] px-[13px] flex items-center cursor-pointer'>
                <div>
                  <img src={faceImgOne} className='w-[40px] h-[40px] rounded-full' alt="" />
                </div>
                <div className='pl-[15px]'>
                  <p className='text-[14px] mb-[4px] text-white'>Profile picture updated</p>
                  <p className='text-[#6c7293] text-[14px]'>18 Minutes ago</p>
                </div>
              </a>
              <div className='h-[1px] w-full bg-gray-700'></div>
              <p className='text-center p-[16px] text-white'>4 new messages</p>
            </div>
          </li>
          <li></li>
          <li></li>
        </ul>
        <button></button>
      </div>
    </div>
  )
}

export default Navbar
