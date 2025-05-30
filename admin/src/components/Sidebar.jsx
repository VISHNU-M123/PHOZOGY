import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.svg'
import logo_mini from '../assets/logo-mini.svg'
import profileIcon from '../assets/face15.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaCalendarDay } from "react-icons/fa";
import { MdOutlineSpeed } from "react-icons/md";
import { MdLaptop } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { BsTable } from "react-icons/bs";
import { IoBarChartSharp } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { BiSolidFile } from "react-icons/bi";

const Sidebar = () => {

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
    <div>
        {/* nav */}
        <div className='bg-[#191c24] w-[244px] min-h-[calc(100vh-70px)] h-[100vh]'>
            <div className='w-[244px] h-[70px] bg-[#191c24] flex items-center'>
                <a href="" className='pl-[20px]'>
                    <img src={logo} alt="" className='w-[calc(244px-120px)]' />
                </a>
                {/* <a href="" className='pl-[20px]'>
                    <img src={logo_mini} alt="" className='w-[calc(70px-50px)]' />
                </a> */}
            </div>
            <ul className='mb-[60px]'>
                <li>
                    <div className='flex justify-between px-[20px] py-[10px] items-center'>
                        <div className='flex items-center'>
                            <div className='relative'>
                                <img src={profileIcon} alt="" className='w-[35px] h-[35px] rounded-full' />
                                <span className='absolute bottom-0 right-0 w-[10px] h-[10px] bg-green-500 rounded-full border border-2 border-[#2c2e33]'></span>
                            </div>
                            <div className='ml-[16px]'>
                                <h1 className='text-white text-[16px]'>Henry Klein</h1>
                                <p className='text-[12px] text-[#6c7293]'>Gold Member</p>
                            </div>
                        </div>
                        <div className='relative' ref={menuRef}>
                            <button className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                                <BsThreeDotsVertical color='#6c7293' size={20} />
                            </button>
                            {
                                isOpen && (
                                    <div className='absolute bg-[#191c24] min-w-[200px] mt-2 rounded-sm shadow-lg border border-[rgba(0,0,0,0.15)] z-10 top-full left-0'>
                                        <a href="" className='flex items-center py-[11px] px-[13px]'>
                                            <div>
                                                <div className='w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center'>
                                                    <IoMdSettings className='text-blue-500' size={14} />
                                                </div>
                                            </div>
                                            <div className='pl-[15px]'>
                                                <p className='text-white text-[12px] mb-[4px]'>Account settings</p>
                                            </div>
                                        </a>
                                        <div className='h-[1px] w-full bg-gray-700'></div>
                                        <a href="" className='flex items-center py-[11px] px-[13px]'>
                                            <div>
                                                <div className='w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center'>
                                                    <AiOutlineInfoCircle className='text-violet-600' size={14} />
                                                </div>
                                            </div>
                                            <div className='pl-[15px]'>
                                                <p className='text-white text-[12px] mb-[4px]'>Change Password</p>
                                            </div>
                                        </a>
                                        <div className='h-[1px] w-full bg-gray-700'></div>
                                        <a href="" className='flex items-center py-[11px] px-[13px]'>
                                            <div>
                                                <div className='w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center'>
                                                    <FaCalendarDay className='text-green-500' size={14} />
                                                </div>
                                            </div>
                                            <div className='pl-[15px]'>
                                                <p className='text-white text-[12px] mb-[4px]'>To-do-list</p>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </li>
                <li className='px-[20px] py-[10px]'>
                    <span className='text-[#6c7293] text-[14px] font-[500] py-[12px] pl-0 pr-[10px]'>Navigation</span>
                </li>
                <li className='pr-[20px]'>
                    <a href="" className='flex items-center py-[12px] pr-[10px] pl-[20px] rounded-[0_100px_100px_0] bg-[#0f1015]'>
                        <span className='w-[31px] h-[31px] bg-[#6c7293]/20 rounded-full flex items-center justify-center mr-[8px]'>
                            <MdOutlineSpeed className='text-[#8f5fe8]' />
                        </span>
                        <span className='text-white text-[15px]'>Dashboard</span>
                    </a>
                </li>
                <li className='pr-[20px]'>
                    <a href="" className='flex items-center py-[12px] pr-[10px] pl-[20px] rounded-[0_100px_100px_0]'>
                        <span className='w-[31px] h-[31px] bg-[#6c7293]/20 rounded-full flex items-center justify-center mr-[8px]'>
                            <MdLaptop className='text-[#ffab00]' />
                        </span>
                        <span className='text-[#6c7293] text-[15px]'>Basic UI Elements</span>
                    </a>
                </li>
                <li className='pr-[20px]'>
                    <a href="" className='flex items-center py-[12px] pr-[10px] pl-[20px] rounded-[0_100px_100px_0]'>
                        <span className='w-[31px] h-[31px] bg-[#6c7293]/20 rounded-full flex items-center justify-center mr-[8px]'>
                            <MdPlaylistPlay className='text-[#fc424a]' />
                        </span>
                        <span className='text-[#6c7293] text-[15px]'>Form Elements</span>
                    </a>
                </li>
                <li className='pr-[20px]'>
                    <a href="" className='flex items-center py-[12px] pr-[10px] pl-[20px] rounded-[0_100px_100px_0]'>
                        <span className='w-[31px] h-[31px] bg-[#6c7293]/20 rounded-full flex items-center justify-center mr-[8px]'>
                            <BsTable className='text-[#0090e7]' />
                        </span>
                        <span className='text-[#6c7293] text-[15px]'>Tables</span>
                    </a>
                </li>
                <li className='pr-[20px]'>
                    <a href="" className='flex items-center py-[12px] pr-[10px] pl-[20px] rounded-[0_100px_100px_0]'>
                        <span className='w-[31px] h-[31px] bg-[#6c7293]/20 rounded-full flex items-center justify-center mr-[8px]'>
                            <IoBarChartSharp className='text-[#00d25b]' />
                        </span>
                        <span className='text-[#6c7293] text-[15px]'>Charts</span>
                    </a>
                </li>
                <li className='pr-[20px]'>
                    <a href="" className='flex items-center py-[12px] pr-[10px] pl-[20px] rounded-[0_100px_100px_0]'>
                        <span className='w-[31px] h-[31px] bg-[#6c7293]/20 rounded-full flex items-center justify-center mr-[8px]'>
                            <MdContacts className='text-[#8f5fe8]' />
                        </span>
                        <span className='text-[#6c7293] text-[15px]'>Icons</span>
                    </a>
                </li>
                <li className='pr-[20px]'>
                    <a href="" className='flex items-center py-[12px] pr-[10px] pl-[20px] rounded-[0_100px_100px_0]'>
                        <span className='w-[31px] h-[31px] bg-[#6c7293]/20 rounded-full flex items-center justify-center mr-[8px]'>
                            <MdOutlineSecurity className='text-[#ffab00]' />
                        </span>
                        <span className='text-[#6c7293] text-[15px]'>User Pages</span>
                    </a>
                </li>
                <li className='pr-[20px]'>
                    <a href="" className='flex items-center py-[12px] pr-[10px] pl-[20px] rounded-[0_100px_100px_0]'>
                        <span className='w-[31px] h-[31px] bg-[#6c7293]/20 rounded-full flex items-center justify-center mr-[8px]'>
                            <BiSolidFile className='text-[#fc424a]' />
                        </span>
                        <span className='text-[#6c7293] text-[15px]'>Documantation</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
