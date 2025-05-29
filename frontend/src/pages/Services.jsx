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
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>WEDDING PHOTOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Comprehensive wedding coverage capturing the ceremony, rituals, and candid emotions. Timeless portraits and candid storytelling that reflects your unique day.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>02</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>ENGAGEMENT SHOOTS</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Beautiful pre-wedding portraits at chosen locations that celebrate your love story. Ideal for invites, social media, or just lasting memories.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>03</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>BRIDAL SHOWERS & HALDI</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Vibrant and joy-filled captures of your bridal showers, haldi, mehendi, and other pre-wedding ceremonies — focusing on culture, color, and emotion.</p>
                </div>
            </div>

            <div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>04</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>EVENT VIDEOGRAPHY</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Create cinematic memories of your special events. From highlight reels to full-length edits, we bring energy, emotion, and story to your videos.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>05</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>BIRTHDAY & FUNCTION COVERAGE</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>From kids’ birthdays to milestone celebrations, we cover every laugh, surprise, and joy-filled moment with care and creativity.</p>
                </div>
                <div className='mb-[42px]'>
                    <div className='flex mb-[12px]'>
                        <div className='bg-[#009603] text-white text-[16px] font-[600] h-[36px] w-[36px] text-center flex items-center justify-center mr-[20px]'>06</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[36px]'>CUSTOM SHOOTS</h1>
                    </div>
                    <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Have a unique idea in mind? Whether it's a personal shoot, couple session, or something entirely different, we’re here to bring your vision to life.</p>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Services
