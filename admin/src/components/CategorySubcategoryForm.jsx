import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useState } from 'react'
import axios from 'axios'

const CategorySubcategoryForm = ({heading, subHeadingCategory, subHeadingSubcategory}) => {

    const {aToken, backendUrl} = useContext(AdminContext)

    const [categoryData, setCategoryData] = useState({ categoryName:'', categoryDescription:'', categoryStatus:'Active' })
    const [subCategoryData, setSubcategoryData] = useState({ subCategoryName:'', subCategoryDescription:'', subCategoryStatus:'Active', mainCategoryId:''})
    const [showCategoryErrorMsg, setShowCategoryErrorMsg] = useState({categoryName:'', categoryDescription:''})
    const [showSubcategoryErrorMsg, setShowSubcategoryErrorMsg] = useState({subCategoryName: '', subCategoryDescription: '', mainCategoryId: ''})
    const [globalCategoryError, setGlobalCategoryError] = useState('')
    const [globalSubcategoryError, setGlobalSubcategoryError] = useState('')
    const [listAllCategory, setListAllCategory] = useState([])

    const handleCategoryChange = (e) => {
        const {name, value} = e.target
        setCategoryData(prev => ({...prev, [name]: value}))
        setShowCategoryErrorMsg(prev => ({ ...prev, [name]: '' }))
        setGlobalCategoryError('')
    }

    const handleSubcategoryChange = (e) => {
        const {name, value} = e.target
        setSubcategoryData(prev => ({...prev, [name]: value}))
        setShowSubcategoryErrorMsg(prev => ({ ...prev, [name]: '' }))
        setGlobalSubcategoryError('')
    }

    const handleCategorySubmit = async (e) => {
        e.preventDefault()
        try {

            let hasError = false
            let newErrors = {categoryName: '', categoryDescription: ''}

            if(categoryData.categoryName.trim() === ''){
                newErrors.categoryName = 'Category name is required'
                hasError = true
            }

            if(categoryData.categoryDescription.trim() === ''){
                newErrors.categoryDescription = 'Category description is required'
                hasError = true
            }

            if(hasError){
                setShowCategoryErrorMsg(newErrors)
                return
            }
                
            const {data} = await axios.post(`${backendUrl}/api/admin/add-category`, {
                categoryName: categoryData.categoryName,
                categoryDescription: categoryData.categoryDescription,
                categoryStatus: categoryData.categoryStatus
            },{
                headers: {aToken}
            })

            if(data.success){
                alert('category added successfully')
                setCategoryData({categoryName: '', categoryDescription: '', categoryStatus: 'Active'})
                setShowCategoryErrorMsg({categoryName: '', categoryDescription: ''})
                setGlobalCategoryError('')
            }else{
                alert(data.message)
            }
        } catch (error) {
            if(error.response){
                setGlobalCategoryError(error.response.data.message)
            }else{
                alert(error.message)
            }
        }
    }

    const handleSubcategorySubmit = async (e) => {
        e.preventDefault()
        try {
            let hasError = false
            let newErrors = {subCategoryName: '', subCategoryDescription: '', mainCategoryId: ''}

            if(subCategoryData.subCategoryName.trim() === ''){
                newErrors.subCategoryName = 'Subcategory name is required'
                hasError = true
            }

            if(subCategoryData.subCategoryDescription.trim() === ''){
                newErrors.subCategoryDescription = 'Subcategory description is required'
                hasError = true
            }

            if(subCategoryData.mainCategoryId === ''){
                newErrors.mainCategoryId = 'Please select a main category'
                hasError = true
            }

            if(hasError){
                setShowSubcategoryErrorMsg(newErrors)
                return
            }

            const {data} = await axios.post(`${backendUrl}/api/admin/add-subCategory`, {
                subCategoryName: subCategoryData.subCategoryName,
                subCategoryDescription: subCategoryData.subCategoryDescription,
                subCategoryStatus: subCategoryData.subCategoryStatus,
                mainCategoryId: subCategoryData.mainCategoryId
            },{
                headers: {aToken}
            })

            if(data.success){
                alert('subcategory added successfully')
                setSubcategoryData({subCategoryName: '', subCategoryDescription: '', subCategoryStatus: 'Active', mainCategoryId: ''})
                setShowSubcategoryErrorMsg({subCategoryName: '', subCategoryDescription: '', mainCategoryId: ''})
                setGlobalSubcategoryError('')
            }else{
                alert(data.message)
            }
        } catch (error) {
            if(error.response){
                setGlobalSubcategoryError(error.response.data.message)
            }else{
                alert(error.message)
            }
        }
    }

    const handleCategoryCancel = () => {
        setCategoryData({categoryName: '', categoryDescription: '', categoryStatus:'Active'})
        setShowCategoryErrorMsg({categoryName: '', categoryDescription: ''})
        setGlobalCategoryError('')
    }

    const handleSubcategoryCancel = () => {
        setSubcategoryData({subCategoryName: '', subCategoryDescription: '', subCategoryStatus: 'Active', mainCategoryId: ''})
        setShowSubcategoryErrorMsg({subCategoryName: '', subCategoryDescription: '', mainCategoryId: ''})
        setGlobalSubcategoryError('')
    }

    useEffect(() => {
        if(globalCategoryError){
            const timer = setTimeout(() => setGlobalCategoryError(''), 5000);
            return () => clearTimeout(timer)
        }
    },[globalCategoryError])

    useEffect(() => {
        if(globalSubcategoryError){
            const timer = setTimeout(() => setGlobalSubcategoryError(''), 5000);
            return () => clearTimeout(timer)
        }
    },[globalSubcategoryError])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const {data} = await axios.get(`${backendUrl}/api/admin/allCategory`, {headers:{aToken}})
                if(data.success){
                    setListAllCategory(data.allCategory)
                }
            } catch (error) {
                console.log('Failed to fetch categories')
            }
        }
        fetchCategories()
    }, [aToken])

  return (
    <div>
        <div className='mb-[24px] flex items-center'>
            <h1 className='text-white text-[18px] font-[500] leading-tight'>{heading}</h1>
        </div>
        <div className='-mx-3 flex flex-col md:flex-row'>
            <div className='mb-[24px] md:w-1/2 px-3'>
                <div className='w-full min-w-full rounded-[4px] bg-[#191c24]'>
                    <div className='py-[28px] px-[25px]'>
                        <h1 className='text-white mb-[18px] text-[18px] font-[500] capitalize'>{subHeadingCategory}</h1>
                        {globalCategoryError && (
                            <h6 className='text-center text-red-500 text-sm block mt-1'>{globalCategoryError}</h6>
                        )}
                        <form action="" onSubmit={handleCategorySubmit}>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Category Name</label>
                                <input type="text" name='categoryName' value={categoryData.categoryName} onChange={handleCategoryChange} className={`h-[41.2px] border text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none ${showCategoryErrorMsg.categoryName ? 'border-red-500' : 'border-[#2c2e33]'}`} placeholder='Category Name' />
                                {showCategoryErrorMsg.categoryName && (
                                    <span className='text-red-500 text-xs block mt-1'>{showCategoryErrorMsg.categoryName}</span>
                                )}
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Category Description</label>
                                <input type="text" name='categoryDescription' value={categoryData.categoryDescription} onChange={handleCategoryChange} className={`h-[41.2px] border text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none ${showCategoryErrorMsg.categoryDescription ? 'border-red-500' : 'border-[#2c2e33]'}`} placeholder='Category Description' />
                                {showCategoryErrorMsg.categoryDescription && (
                                    <span className='text-red-500 text-xs block mt-1'>{showCategoryErrorMsg.categoryDescription}</span>
                                )}
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Category Status</label>
                                <select name="categoryStatus" value={categoryData.categoryStatus} onChange={handleCategoryChange} id="" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none'>
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Blocked">Blocked</option>
                                </select>
                            </div>
                            <button type='submit' className='text-white cursor-pointer py-[6px] px-[12px] text-[14px] font-normal leading-[1.42857143] text-center align-middle rounded-[4px] bg-[#0090e7] mr-[8px] inline-block'>Submit</button>
                            <button type='button' onClick={handleCategoryCancel} className='text-white cursor-pointer py-[6px] px-[12px] text-[14px] font-normal leading-[1.42857143] text-center align-middle rounded-[4px] bg-[#0d0d0d] inline-block'>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='mb-[24px] md:w-1/2 px-3'>
                <div className='w-full min-w-full rounded-[4px] bg-[#191c24]'>
                    <div className='py-[28px] px-[25px]'>
                        <h1 className='text-white mb-[18px] text-[18px] font-[500] capitalize'>{subHeadingSubcategory}</h1>
                        {globalSubcategoryError && (
                            <h6 className='text-center text-red-500 text-sm block mt-1'>{globalSubcategoryError}</h6>
                        )}
                        <form action="" onSubmit={handleSubcategorySubmit}>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Subcategory Name</label>
                                <input type="text" name='subCategoryName' value={subCategoryData.subCategoryName} onChange={handleSubcategoryChange} className={`h-[41.2px] border text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none ${showSubcategoryErrorMsg.subCategoryName ? 'border-red-500' : 'border-[#2c2e33]'}`} placeholder='Subcategory Name' />
                                {showSubcategoryErrorMsg.subCategoryName && (
                                    <span className='text-red-500 text-xs block mt-1'>{showSubcategoryErrorMsg.subCategoryName}</span>
                                )}
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Subcategory Description</label>
                                <input type="text" name='subCategoryDescription' value={subCategoryData.subCategoryDescription} onChange={handleSubcategoryChange} className={`h-[41.2px] border text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none ${showSubcategoryErrorMsg.subCategoryDescription ? 'border-red-500' : ' border-[#2c2e33]'}`} placeholder='Subcategory Description' />
                                {showSubcategoryErrorMsg.subCategoryDescription && (
                                    <span className='text-red-500 text-xs block mt-1'>{showSubcategoryErrorMsg.subCategoryDescription}</span>
                                )}
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Subcategory Status</label>
                                <select name="subCategoryStatus" value={subCategoryData.subCategoryStatus} onChange={handleSubcategoryChange} id="" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none'>
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Blocked">Blocked</option>
                                </select>
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Select Main Category</label>
                                <select name="mainCategoryId" value={subCategoryData.mainCategoryId} onChange={handleSubcategoryChange} id="" className={`h-[41.2px] border text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none ${showSubcategoryErrorMsg.mainCategoryId ? 'border-red-500' : 'border-[#2c2e33]'}`}>
                                    <option value="">Select main category</option>
                                    {listAllCategory.map(cat => (
                                        <option key={cat._id} value={cat._id}>{cat.categoryName}</option>
                                    ))}
                                </select>
                                {showSubcategoryErrorMsg.mainCategoryId && (
                                    <span className='text-red-500 text-xs block mt-1'>{showSubcategoryErrorMsg.mainCategoryId}</span>
                                )}
                            </div>
                            <button type='submit' className='text-white cursor-pointer py-[6px] px-[12px] text-[14px] font-normal leading-[1.42857143] text-center align-middle rounded-[4px] bg-[#0090e7] mr-[8px] inline-block'>Submit</button>
                            <button type='button' onClick={handleSubcategoryCancel} className='text-white cursor-pointer py-[6px] px-[12px] text-[14px] font-normal leading-[1.42857143] text-center align-middle rounded-[4px] bg-[#0d0d0d] inline-block'>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategorySubcategoryForm
