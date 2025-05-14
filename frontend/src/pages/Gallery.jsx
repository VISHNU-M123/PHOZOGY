import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import galleryImgOne from '../assets/gallery-1.jpg'
import galleryImgTwo from '../assets/gallery-2.jpg'
import galleryImgThree from '../assets/gallery-3.jpg'
import galleryImgFour from '../assets/gallery-4.jpg'
import galleryImgFive from '../assets/gallery-5.jpg'
import galleryImgSix from '../assets/gallery-6.jpg'
import galleryImgSeven from '../assets/gallery-7.jpg'
import galleryImgEight from '../assets/gallery-8.jpg'
import galleryImgNine from '../assets/gallery-9.jpg'
import galleryImgTen from '../assets/gallery-10.jpg'
import galleryImgEleven from '../assets/gallery-11.jpg'
import galleryImgTwelve from '../assets/gallery-12.jpg'
import galleryImgThirteen from '../assets/gallery-13.jpg'
import galleryImgFourteen from '../assets/gallery-14.jpg'
import galleryImgFifteen from '../assets/gallery-15.jpg'
import galleryImgSixteen from '../assets/gallery-16.jpg'
import galleryImgSeventeen from '../assets/gallery-17.jpg'
import {Plus} from 'lucide-react'

const Gallery = () => {

    const images = [ galleryImgOne, galleryImgTwo, galleryImgThree, galleryImgFour, galleryImgFive, galleryImgSix, galleryImgSeven, galleryImgEight, galleryImgNine, galleryImgTen, galleryImgEleven, galleryImgTwelve, galleryImgThirteen, galleryImgFourteen, galleryImgFifteen, galleryImgSixteen, galleryImgSeventeen]
    const [lightBoxImg, setLightBoxImg] = useState(null)
  return (
    <div>
      <Navbar/>

      <div>
        <div className='px-6 sm:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto pt-20'>
            <ul className="flex flex-wrap justify-center mt-4">
              <li className='text-[#888888] text-[17px] px-1.5 md:px-6 border-r border-[#ccc] pr-1.5 md:pl-8'>All</li>
              <li className='text-[#888888] text-[17px] px-1.5 md:px-6 border-r border-[#ccc] pr-1.5 md:pl-8'>Fashion</li>
              <li className='text-[#888888] text-[17px] px-1.5 md:px-6 border-r border-[#ccc] pr-1.5 md:pl-8'>Lifestyle</li>
              <li className='text-[#888888] text-[17px] px-1.5 md:px-6 border-r border-[#ccc] pr-1.5 md:pl-8'>Natural</li>
              <li className='text-[#888888] text-[17px] px-1.5 md:px-6 border-r border-[#ccc] pr-1.5 md:pl-8'>Wedding</li>
              <li className='text-[#888888] text-[17px] px-1.5 md:px-6 '>Videos</li>
            </ul>
        </div>
      </div>

      <div className='pt-5 md:pt-10 '>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-3 px-3 space-y-3">
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

export default Gallery
