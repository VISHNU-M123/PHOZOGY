import React from 'react'

const CategorySubcategoryForm = () => {
  return (
    <div>
        <div className='mb-[24px] flex items-center'>
            <h1 className='text-white text-[18px] font-[500] leading-tight'>Add Category and Subcategory</h1>
        </div>
        <div className='-mx-3 flex flex-col md:flex-row'>
            <div className='mb-[24px] md:w-1/2 px-3'>
                <div className='w-full min-w-full rounded-[4px] bg-[#191c24]'>
                    <div className='py-[28px] px-[25px]'>
                        <h1 className='text-white mb-[18px] text-[18px] font-[500] capitalize'>Add Category</h1>
                        <form action="">
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Category Name</label>
                                <input type="text" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none' placeholder='Username' />
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Category Description</label>
                                <input type="email" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none' placeholder='Email' />
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Category Status</label>
                                <select name="" id="" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none'>
                                    <option value="">Select Status</option>
                                    <option value="">Active</option>
                                    <option value="">Blocked</option>
                                </select>
                            </div>
                            <button className='text-white cursor-pointer py-[6px] px-[12px] text-[14px] font-normal leading-[1.42857143] text-center align-middle rounded-[4px] bg-[#0090e7] mr-[8px] inline-block'>Submit</button>
                            <button className='text-white cursor-pointer py-[6px] px-[12px] text-[14px] font-normal leading-[1.42857143] text-center align-middle rounded-[4px] bg-[#0d0d0d] inline-block'>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='mb-[24px] md:w-1/2 px-3'>
                <div className='w-full min-w-full rounded-[4px] bg-[#191c24]'>
                    <div className='py-[28px] px-[25px]'>
                        <h1 className='text-white mb-[18px] text-[18px] font-[500] capitalize'>Add Subcategory</h1>
                        <form action="">
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Subcategory Name</label>
                                <input type="text" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none' placeholder='Username' />
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Subcategory Description</label>
                                <input type="email" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none' placeholder='Email' />
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Subcategory Status</label>
                                <select name="" id="" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none'>
                                    <option value="">Select Status</option>
                                    <option value="">Active</option>
                                    <option value="">Blocked</option>
                                </select>
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Select Main Category</label>
                                <select name="" id="" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none'>
                                    <option value="">main category 1</option>
                                    <option value="">main category 2</option>
                                    <option value="">main category 3</option>
                                    <option value="">main category 4</option>
                                    <option value="">main category 5</option>
                                </select>
                            </div>
                            <button className='text-white cursor-pointer py-[6px] px-[12px] text-[14px] font-normal leading-[1.42857143] text-center align-middle rounded-[4px] bg-[#0090e7] mr-[8px] inline-block'>Submit</button>
                            <button className='text-white cursor-pointer py-[6px] px-[12px] text-[14px] font-normal leading-[1.42857143] text-center align-middle rounded-[4px] bg-[#0d0d0d] inline-block'>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategorySubcategoryForm
