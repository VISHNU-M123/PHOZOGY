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
        <ServicesCard title="PHOTOGRAPHY" description="Capturing timeless moments through stunning visuals. From portraits to events, we provide high-quality photography tailored to your unique story." image={shootingImg}/>
        <ServicesCard title="VIDEOGRAPHY" description="Bring your vision to life with cinematic storytelling. We specialize in creating professional videos for weddings, promotions, and special moments." image={videoImg}/>
        <ServicesCard title="EDITING" description="Enhance your visuals with expert post-production. Our editing services ensure every photo and video is polished, vibrant, and unforgettable." image={editingImg}/>
      </div>

      <div className='px-4 sm:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto mt-[30px] pb-[50px]'>
        <div className='flex flex-col lg:flex-row lg:gap-5'>
            <div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>01</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>FILMING AND EDITING</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>From cinematic footage to seamless editing, we craft videos that tell powerful, visually engaging stories for your brand or personal moments.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>02</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>ENGAGEMENT PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Freeze your love story in time with beautiful, natural, and emotive engagement portraits that reflect your unique connection.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>03</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>COMMERCIAL PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Elevate your brand with bold, clean, and eye-catching imagery tailored for marketing, advertising, and business use.</p>
                </div>
            </div>

            <div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>04</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>SOCIAL MEDIA PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Create content that clicks. Our social-ready shoots are designed to engage followers and reflect your online identity with style.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>05</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>EVENT PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>From corporate events to private celebrations, we capture the key moments with clarity, emotion, and energy.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>06</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>PERSONAL PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Portraits that tell your story. Whether for personal branding, lifestyle, or just memories, we help you look and feel your best.</p>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Services
