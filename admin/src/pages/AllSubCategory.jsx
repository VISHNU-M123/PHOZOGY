import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { AdminContext } from '../context/AdminContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AllSubCategory = () => {

  const {aToken, backendUrl} = useContext(AdminContext)
  const {categoryId} = useParams()

  const [showSidebarItems, setShowSidebarItems] = useState(true)
  const [allSubcategories, setAllSubcategories] = useState([])

  const toggleSidebarItems = () => {
    setShowSidebarItems(prev => !prev)
  }

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllSubcategories = async () => {
      try {
        const {data} = await axios.get(`${backendUrl}/api/admin/all-subCategories/${categoryId}`,{headers:{aToken}})
        if(data.success){
          setAllSubcategories(data.subCategories)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllSubcategories()
  },[aToken, categoryId])

  const handleToggleSubcategoryStatus = async (subCategoryId, currentStatus) => {
    try {
      const {data} = await axios.post(`${backendUrl}/api/admin/toggleSubcategoryStatus`, {subCategoryId, currentStatus}, {headers:{aToken}})
      if(data.success){
        setAllSubcategories(prev => prev.map(subCat => subCat._id === subCategoryId ? {...subCat, subCategoryStatus: data.subCategory.subCategoryStatus} : subCat))
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleEditSubcategory = (subCategoryId) => {
    navigate(`/edit-subCategory/${subCategoryId}`)
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
                      <h1 className="text-white mb-[18px] text-[18px] font-[500]">All Subcategories</h1>
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[1000px]">
                          <thead>
                            <tr>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Category Name</th>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Category Description</th>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Category Status</th>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {allSubcategories.map((subCategory) => (
                              <tr>
                                  <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33] truncate overflow-hidden text-ellipsis max-w-[180px]">{subCategory.subCategoryName}</td>
                                  <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33] truncate overflow-hidden text-ellipsis max-w-[200px]">{subCategory.subCategoryDescription}</td>
                                  <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">
                                      <button onClick={() => handleToggleSubcategoryStatus(subCategory._id, subCategory.subCategoryStatus)} className={`border hover:text-white py-[8px] px-[11px] rounded-[4px] text-[12px] leading-none font-[500] text-center inline-block cursor-pointer ${subCategory.subCategoryStatus === 'Active' ? 'border-[#00d25b] text-[#00d25b] hover:bg-[#00d25b]' : 'border-[#fc424a] text-[#fc424a] hover:bg-[#fc424a]'}`}>{subCategory.subCategoryStatus}</button>
                                  </td>
                                  <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">
                                      <a href="" onClick={() => handleEditSubcategory(subCategory._id)} className='inline-flex items-center justify-center w-8 h-8 rounded-[4px] border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white mr-3'>
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

export default AllSubCategory
