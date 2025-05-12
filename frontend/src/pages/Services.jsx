import React from 'react'
import ServicesCard from '../components/ServicesCard'
import shootingImg from '../assets/service-1.jpg'
import videoImg from '../assets/service-2.jpg'
import editingImg from '../assets/service-3.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
        <Navbar/>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto py-[60px]'>
        <ServicesCard title="SHOOTING" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida." image={shootingImg}/>
        <ServicesCard title="VIDEOS" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida." image={videoImg}/>
        <ServicesCard title="EDITING" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida." image={editingImg}/>
      </div>

      <div className='px-4 sm:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto mt-[30px] pb-[50px]'>
        <div className='flex flex-col lg:flex-row lg:gap-5'>
            <div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>01</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>FILMING AND EDITING</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>02</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>ENGAGEMENT PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>03</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>COMMERCIAL PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
            </div>

            <div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>04</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>SOCIAL MEDIA PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>05</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>EVENT PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>06</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>PERSONAL PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Services
