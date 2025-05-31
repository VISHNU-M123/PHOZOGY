import React, { useEffect, useRef, useState } from 'react'
import logo_mini from '../assets/logo-mini.svg'
import { MdOutlineMenu } from "react-icons/md";
import { FaRegFile } from "react-icons/fa6";
import { PiGlobeBold } from "react-icons/pi";
import { MdLayers } from "react-icons/md";
import { IoGridSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import faceImgOne from '../assets/face4.jpg'
import { FaBell } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import profileIcon from '../assets/face15.jpg'
import { MdLogout } from "react-icons/md";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event){
      if(menuRef.current && !menuRef.current.contains(event.target)){
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
  },[])

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
          <li ref={menuRef}>
            <button onClick={() => setIsOpen(!isOpen)} className='mx-[16px] bg-green-500 text-white px-[12px] py-[6px] text-[15px] rounded-[4px] cursor-pointer'>+ Create New Project</button>
            {
              isOpen && (
                <div className='bg-[#191c24] absolute rounded-[4px] mt-0 top-[48px]'>
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
                </div>
              )
            }
          </li>
          <li>
            <a href="" className='mx-[16px] inline-block'>
              <IoGridSharp size={18} color='white' />
            </a>
          </li>
          <li>
            <a href="" className='relative mx-[16px] inline-block'>
              <MdEmail size={20} color='white' />
              <span className='absolute w-[7px] h-[7px] bg-green-500 top-0 right-0 rounded-full'></span>
            </a>
            {/* <div className='absolute mt-0 top-[48px] rounded-[4px] bg-[#191c24]'>
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
            </div> */}
          </li>
          <li>
            <a href="" className='mx-[16px] relative inline-block'>
              <FaBell size={18} color='white' />
              <span className='absolute w-[7px] h-[7px] bg-red-500 top-0 right-0 rounded-full'></span>
            </a>
            {/* <div className='absolute mt-0 top-[48px] bg-[#191c24] rounded-[4px]'>
              <h1 className='p-[16px] text-[15px] font-[500] text-white'>Notifications</h1>
              <div className='h-[0.5px] w-full bg-gray-700'></div>
              <a href="" className='py-[11px] px-[13px] flex items-center'>
                <div className='relative'>
                  <div className='w-[40px] h-[40px] bg-black flex items-center justify-center rounded-full'>
                    <FaCalendarDay className='text-green-500 text-[17px]'/>
                  </div>
                </div>
                <div className='pl-[15px]'>
                  <p className='mb-[4px] text-white text-[14px]'>Event today</p>
                  <p className='text-[#6c7293] text-[14px]'>Just a reminder that you have an event today</p>
                </div>
              </a>
              <div className='h-[0.5px] w-full bg-gray-700'></div>
              <a href="" className='py-[11px] px-[13px] flex items-center'>
                <div className='relative'>
                  <div className='w-[40px] h-[40px] bg-black flex items-center justify-center rounded-full'>
                    <IoMdSettings className='text-red-500 text-[17px]'/>
                  </div>
                </div>
                <div className='pl-[15px]'>
                  <p className='mb-[4px] text-white text-[14px]'>Settings</p>
                  <p className='text-[#6c7293] text-[14px]'>Update dashboard</p>
                </div>
              </a>
              <div className='h-[0.5px] w-full bg-gray-700'></div>
              <a href="" className='py-[11px] px-[13px] flex items-center'>
                <div className='relative'>
                  <div className='w-[40px] h-[40px] bg-black flex items-center justify-center rounded-full'>
                    <FaLink className='text-yellow-500 text-[17px]' />
                  </div>
                </div>
                <div className='pl-[15px]'>
                  <p className='mb-[4px] text-white text-[14px]'>Launch Admin</p>
                  <p className='text-[#6c7293] text-[14px]'>New admin wow!</p>
                </div>
              </a>
              <div className='h-[0.5px] w-full bg-gray-700'></div>
              <p className='p-[16px] text-[14px] text-center text-white'>See all notifications</p>
            </div> */}
          </li>
          <li>
            <a href="" className='mx-[16px] py-[8px] relative inline-block'>
              <div className='flex items-center'>
                <img src={profileIcon} alt="" className='h-[35px] w-[35px] rounded-full' />
                <p className='ml-[16px] text-[14px]'>Henry Klein</p>
                <IoMdArrowDropdown className='text-[#a7afb7] text-[18px]' />
              </div>
            </a>
            <div className='absolute mt-0 top-[48px] bg-[#191c24] rounded-[4px]'>
              <h1 className='p-[16px] text-[15px] font-[500] text-white'>Profile</h1>
              <div></div>
              <a href="" className='py-[11px] px-[13px] flex items-center'>
                <div className='relative'>
                  <div className='w-[40px] h-[40px] flex items-center justify-center bg-black'>
                    <IoMdSettings className='text-green-500 text-[17px]'/>
                  </div>
                </div>
                <div className='pl-[15px]'>
                  <p className='mb-[4px] text-[14px] text-white'>Settings</p>
                </div>
              </a>
              <div></div>
              <a href="">
                <div>
                  <div>
                    <MdLogout />
                  </div>
                </div>
                <div>
                  <p>Logout</p>
                </div>
              </a>
              <div></div>
              <p>Advanced settings</p>
            </div>
          </li>
        </ul>
        <button></button>
      </div>
    </div>
  )
}

export default Navbar
