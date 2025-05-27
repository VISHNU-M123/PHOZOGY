import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import workImg1 from '../assets/pf-1.jpg'
import workImg2 from '../assets/pf-2.jpg'
import workImg3 from '../assets/pf-3.jpg'
import workImg4 from '../assets/pf-4.jpg'
import workImg5 from '../assets/pf-5.jpg'
import workImg6 from '../assets/pf-6.jpg'
import workImg7 from '../assets/pf-7.jpg'
import workImg8 from '../assets/pf-8.jpg'
import workImg9 from '../assets/pf-9.jpg'
import workImg10 from '../assets/pf-10.jpg'
import workImg11 from '../assets/pf-11.jpg'
import {Plus} from 'lucide-react'

const Portfolio = () => {

    const images = [ workImg1, workImg2, workImg3, workImg4, workImg5, workImg6, workImg7, workImg8, workImg9, workImg10, workImg11]
    const [lightBoxImg, setLightBoxImg] = useState(null)
  return (
    <div>
      <Navbar/>

      <div className='px-6 sm:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto pt-20'>
        <h1 className='text-center font-[700] text-[36px] text-[#111111] leading-[44px]'>OUR LATEST WORKS</h1>
        <ul className="flex flex-wrap justify-center mt-4">
          <li className='text-[#888888] text-[17px] px-1.5 md:px-6 border-r border-[#ccc] pr-1.5 md:pl-8'>All</li>
          <li className='text-[#888888] text-[17px] px-1.5 md:px-6 border-r border-[#ccc] pr-1.5 md:pl-8'>Weddings</li>
          <li className='text-[#888888] text-[17px] px-1.5 md:px-6 border-r border-[#ccc] pr-1.5 md:pl-8'>Engagements</li>
          <li className='text-[#888888] text-[17px] px-1.5 md:px-6 border-r border-[#ccc] pr-1.5 md:pl-8'>Bridal Showers</li>
          <li className='text-[#888888] text-[17px] px-1.5 md:px-6 border-r border-[#ccc] pr-1.5 md:pl-8'>Haldi</li>
          <li className='text-[#888888] text-[17px] px-1.5 md:px-6 '>Videos</li>
        </ul>
      </div>

      <div className='pt-5 md:pt-10 '>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-3 px-3 space-y-3">
          {
            images.map((image, index) => (
              <div key={index} className='relative group overflow-hidden'>
                <img src={image} alt="" className='w-full h-auto cursor-pointer block' />
                <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100'>
                  <Plus className='w-10 h-10 text-white cursor-pointer' onClick={() => setLightBoxImg(image)}/>
                </div>
              </div>
            ))
          }
        </div>
        {
          lightBoxImg && (
            <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center' onClick={() => setLightBoxImg(null)}>
              <img src={lightBoxImg} alt="" className='max-w-full max-h-full shadow-lg' />
            </div>
          )
        }
      </div>

      <div className='flex items-center justify-center mt-12 pb-[100px]'>
        <button className='text-white bg-green-600 text-md font-bold tracking-widest py-3.5 px-24 cursor-pointer'>LOAD MORE</button>
      </div>

      <Footer/>
    </div>
  )
}

export default Portfolio
