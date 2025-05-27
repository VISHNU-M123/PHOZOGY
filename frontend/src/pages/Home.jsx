import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import firstCorousel from '../assets/hero-1.jpg'
import secondCorousel from '../assets/hero-2.jpg'
import ServicesCard from '../components/ServicesCard';
import shootingImg from '../assets/service-1.jpg'
import videoImg from '../assets/service-2.jpg'
import editingImg from '../assets/service-3.jpg'
import CategoryCard from '../components/CategoryCard';
import categoryImgOne from '../assets/cat-1.jpg'
import categoryImgTwo from '../assets/cat-2.jpg'
import categoryImgThree from '../assets/cat-3.jpg'
import categoryImgFour from '../assets/cat-4.jpg'
import categoryImgFive from '../assets/cat-5.jpg'
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
import Footer from '../components/Footer';

const Home = () => {

  const {token, setToken} = useContext(AppContext)
  const navigate = useNavigate()
  
  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
    navigate('/login')
  }

  const slides = [
    {
      title: 'CAPTURE YOUR STORY',
      desc: "Step into a world where every frame speaks. Our photography studio brings your moments to life with creativity, precision, and passion — whether it's portraits, weddings, or branded content.",
      button: "BOOK A SESSION",
      image: firstCorousel
    },
    {
      title: 'EVERY SHOT, A MASTERPIECE',
      desc: "From behind the lens to final edits, we deliver stunning visuals that reflect your style and vision. Experience professional photography and videography crafted to perfection.",
      button: "LET’S CONNECT",
      image: secondCorousel
    }
  ]

  const settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:4000
  }

  const categories = [
    {
      title: 'WEDDINGS',
      image: categoryImgOne,
      count: '540 pictures',
    },
    {
      title: 'ENGAGEMENTS',
      image: categoryImgTwo,
      count: '120 pictures',
    },
    {
      title: 'BRIDAL SHOWERS',
      image: categoryImgThree,
      count: '120 pictures',
    },
    {
      title: 'HALDI CEREMONIES',
      image: categoryImgFour,
      count: '120 pictures',
    },
    {
      title: 'BIRTHDAYS',
      image: categoryImgFive,
      count: '325 pictures',
    },
  ]

  const categorySettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const images = [ workImg1, workImg2, workImg3, workImg4, workImg5, workImg6, workImg7, workImg8, workImg9, workImg10, workImg11]
  const [lightBoxImg, setLightBoxImg] = useState(null)

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar/>

      <div className="overflow-hidden w-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="h-screen max-h-[900px] flex flex-col justify-center items-center text-center text-white bg-cover bg-center" style={{backgroundImage: `url(${slide.image})`}}>
                <h1 className='md:text-[60px] font-[700] text-[38px] md:leading-tight leading-[1.2]'>{slide.title}</h1>
                <p className='lg:max-w-3xl mt-3 md:max-w-2xl md:leading-loose leading-[1.9] px-2'>{slide.desc}</p>
                <button className='bg-green-600 font-bold py-3 px-8 mt-8 cursor-pointer'>{slide.button}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto -mt-16 relative z-10'>
        <ServicesCard title="PHOTOGRAPHY" description="Capturing timeless moments through stunning visuals. From portraits to events, we provide high-quality photography tailored to your unique story." image={shootingImg}/>
        <ServicesCard title="VIDEOGRAPHY" description="Bring your vision to life with cinematic storytelling. We specialize in creating professional videos for weddings, promotions, and special moments." image={videoImg}/>
        <ServicesCard title="EDITING" description="Enhance your visuals with expert post-production. Our editing services ensure every photo and video is polished, vibrant, and unforgettable." image={editingImg}/>
      </div>

      <div className='px-6 sm:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto py-20'>
        <div className='flex flex-col md:flex-row justify-between md:items-center gap-10'>
          <div className='md:w-1/2'>
            <h1 className='font-[700] text-[36px] text-[#111111] leading-tight'>EXPLORE BY CATEGORY</h1>
            <p className='text-[#666666] text-[15px] leading-7 mt-2'>From engagements to haldi ceremonies, we capture every moment with style and heart. Explore our event categories to see the story unfold.</p>
          </div>
          <div>
            <button className='bg-green-600 text-white py-3 px-8 font-semibold'>VIEW GALLERY</button>
          </div>
        </div>
      </div>
      
      <div className='px-3 sm:px-5 lg:px-9 xl:max-w-7xl xl:mx-auto'>
        <Slider {...categorySettings}>
          {categories.map((category, index) => (
            <div key={index} className='px-3'>
              <CategoryCard title={category.title} image={category.image} count={category.count}/>
            </div>
          ))}
        </Slider>
      </div>

      <div className='px-6 sm:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto pt-20'>
        <h1 className='text-center font-[700] text-[36px] text-[#111111]'>OUR LATEST WORKS</h1>
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

      <div className='flex items-center justify-center mt-12'>
        <button className='text-white bg-black text-md font-bold tracking-widest py-3.5 px-24 cursor-pointer'>LOAD MORE</button>
      </div>
      <button onClick={logout} className='border border-gray-300 p-1 px-4'>Logout</button>

      <Footer/>
    </div>
  )
}

export default Home
