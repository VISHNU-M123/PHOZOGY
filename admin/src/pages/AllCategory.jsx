import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import userOne from '../assets/face1.jpg'
import userTwo from '../assets/face2.jpg'
import userThree from '../assets/face5.jpg'
import userFour from '../assets/face3.jpg'
import userFive from '../assets/face4.jpg'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";

const AllCategory = () => {

    const {aToken, backendUrl} = useContext(AdminContext)
    
    const [showSidebarItems, setShowSidebarItems] = useState(true)
    const [allCategory, setAllCategory] = useState([])
        
    const toggleSidebarItems = () => {
        setShowSidebarItems(prev => !prev)
    }

    useEffect(() => {
        const fetchAllCategory = async () => {
            try {
                const {data} = await axios.get(`${backendUrl}/api/admin/allCategory`, {headers:{aToken}})
                if(data.success){
                    setAllCategory(data.allCategory)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllCategory()
    },[aToken])

    const handleToggleCategoryStatus = async (categoryId, currentStatus) => {
        try {
            const {data} = await axios.post(`${backendUrl}/api/admin/toggleCategoryStatus`, {categoryId, currentStatus}, {headers:{aToken}})
            if(data.success){
                setAllCategory(prev => prev.map(cat => cat._id === categoryId ? {...cat, categoryStatus: data.category.categoryStatus} : cat))
            }
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div>
      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar showItems={showSidebarItems} />
        </div>
        <div className="w-full">
          <Navbar toggleSidebarItems={toggleSidebarItems} showItems={showSidebarItems} />
          <div className="pt-[70px]">
            <div className="bg-[#000000] py-[30px] px-[28px] w-full min-h-screen">
                <div>
                    <div className="mb-[24px] w-full">
                      <div className="bg-[#191c24] rounded-[4px]">
                        <div className="py-[28px] px-[25px]">
                          <h1 className="text-white mb-[18px] text-[18px] font-[500]">All Category</h1>
                          <div className="overflow-x-auto">
                            <table className="w-full min-w-[1000px]">
                              <thead>
                                <tr>
                                  <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Category Name</th>
                                  <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Category Description</th>
                                  <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Category Status</th>
                                  <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">More info</th>
                                  <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {allCategory.map((category) => (
                                    <tr key={category._id}>
                                        <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33] truncate overflow-hidden text-ellipsis max-w-[180px]">{category.categoryName}</td>
                                        <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33] truncate overflow-hidden text-ellipsis max-w-[200px]">{category.categoryDescription}</td>
                                        <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">
                                            <button onClick={() => handleToggleCategoryStatus(category._id, category.categoryStatus)} className={`border hover:text-white py-[8px] px-[11px] rounded-[4px] text-[12px] leading-none font-[500] text-center inline-block cursor-pointer ${category.categoryStatus === 'Active' ? 'border-[#00d25b] text-[#00d25b] hover:bg-[#00d25b]' : 'border-[#fc424a] text-[#fc424a] hover:bg-[#fc424a]'}`}>{category.categoryStatus}</button>
                                        </td>
                                        <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">
                                            <a href="">
                                                <button className="border border-[#00d25b] text-[#00d25b] hover:bg-[#00d25b] hover:text-white py-[8px] px-[11px] rounded-[4px] text-[12px] leading-none font-[500] text-center inline-block cursor-pointer">Info</button>
                                            </a>
                                        </td>
                                        <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">
                                            <a href="" className='inline-flex items-center justify-center w-8 h-8 rounded-[4px] border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white mr-3'>
                                                <FaPencilAlt size={14} />
                                            </a>
                                            <a href="" className='inline-flex items-center justify-center w-8 h-8 rounded-[4px] border border-[#fc424a] text-[#fc424a] hover:bg-[#fc424a] hover:text-white'>
                                                <ImBin size={14} />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllCategory
