import React, { useState } from 'react'
import CategorySubcategoryForm from '../components/CategorySubcategoryForm'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const AddCategorySubcategory = () => {

    const [showSidebarItems, setShowSidebarItems] = useState(true)

    const toggleSidebarItems = () => {
        setShowSidebarItems(prev => !prev)
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
            <div className="bg-[#000000] py-[30px] px-[28px] w-full">
              <CategorySubcategoryForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategorySubcategory
