import React from 'react'

const CategorySubcategoryForm = () => {
  return (
    <div>
        <div className='mb-[24px] flex items-center'>
            <h1 className='text-white text-[18px] font-[500] leading-tight'>Add Category and Subcategory</h1>
        </div>
        <div className='-mx-3'>
            <div className='mb-[24px] md:w-1/2 px-3'>
                <div className='w-full min-w-full rounded-[4px] bg-[#191c24]'>
                    <div className='py-[28px] px-[25px]'>
                        <h1 className='text-white mb-[18px] text-[18px] font-[500] capitalize'>Default form</h1>
                        <p className='text-[rgb(191,191,191)] text-[14px] font-[300] mb-[16px]'>Basic form layout</p>
                        <form action="">
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Username</label>
                                <input type="text" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none' placeholder='Username' />
                            </div>
                            <div className='mb-[40px]'>
                                <label htmlFor="" className='text-[14px] leading-none align-top text-white'>Email address</label>
                                <input type="text" className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white leading-none w-full block outline-none' placeholder='Email' />
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <button></button>
                            <button></button>
                        </form>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default CategorySubcategoryForm
