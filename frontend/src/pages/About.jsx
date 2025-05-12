import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutMainImg from '../assets/about-pic.jpg'
import cameraIcon from '../assets/list-1.png'
import memoCardIcon from '../assets/list-2.png'
import scheduleIcon from '../assets/list-3.png'
import experienceIcon from '../assets/list-4.png'
import teamImgOne from '../assets/team-1.jpg'
import teamImgTwo from '../assets/team-2.jpg'
import teamImgThree from '../assets/team-3.jpg'
import teamImgFour from '../assets/team-4.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import contactImg from '../assets/cta-bg.jpg'
import clientOne from '../assets/client-1.jpg'
import clientTwo from '../assets/client-2.jpg'
import clientThree from '../assets/client-3.jpg'
import clientFour from '../assets/client-4.jpg'
import quoteImg from '../assets/quote.png'

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar/>

      <div>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
            {/* image section */}
            <div className="xl:relative">
                <div className="xl:absolute xl:inset-0">
                  <img className='w-full h-full object-cover' src={aboutMainImg} alt="" />
                </div>
            </div>

            {/* detaisl section */}
            <div>
                <div className='bg-[#f5f5f5] pt-[50px] px-[30px] xl:px-[100px] pb-3'>
                    <div className='mb-[40px]'>
                        <h1 className='text-[#111111] font-[700] text-[36px] leading-[47px] mb-[30px]'>CAPTURING THE MOMENTS THAT CAPTIVATE YOUR HEART</h1>
                        <p className='text-[#666666] font-[400] text-[15px] leading-[26px] mb-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing, tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis. All these taglines are owned by their respective owners, and we do not have any copyright on them.</p>
                    </div>
                    <div>
                        <div className='grid md:grid-cols-[1fr_7fr] xl:grid-cols-[0fr_7fr] mb-[50px]'>
                            <div className='bg-white h-[100px] w-[100px] flex items-center justify-center mr-[30px]'>
                                <img src={cameraIcon} alt="" />
                            </div>
                            <div className='mt-6 md:mt-0'>
                                <h1 className='text-[#111111] text-[20px] font-[700] mb-[8px]'>PROFESSIONALISM</h1>
                                <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-[1fr_7fr] xl:grid-cols-[0fr_7fr] mb-[50px]'>
                            <div className='bg-white h-[100px] w-[100px] flex items-center justify-center mr-[30px]'>
                                <img src={memoCardIcon} alt="" />
                            </div>
                            <div className='mt-6 md:mt-0'>
                                <h1 className='text-[#111111] text-[20px] font-[700] mb-[8px]'>INDIVIDUAL APPROACH</h1>
                                <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-[1fr_7fr] xl:grid-cols-[0fr_7fr] mb-[50px]'>
                            <div className='bg-white h-[100px] w-[100px] flex items-center justify-center mr-[30px]'>
                                <img src={scheduleIcon} alt="" />
                            </div>
                            <div className='mt-6 md:mt-0'>
                                <h1 className='text-[#111111] text-[20px] font-[700] mb-[8px]'>FLEXIBLE SCHEDULE</h1>
                                <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-[1fr_7fr] xl:grid-cols-[0fr_7fr] mb-[50px]'>
                            <div className='bg-white h-[100px] w-[100px] flex items-center justify-center mr-[30px]'>
                                <img src={experienceIcon} alt="" />
                            </div>
                            <div className='mt-6 md:mt-0'>
                                <h1 className='text-[#111111] text-[20px] font-[700] mb-[8px]'>EXPERIENCE</h1>
                                <p className='text-[#666666] text-[15px] font-[400] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='px-6 sm:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto pt-20'>
        <div className='flex flex-col md:flex-row justify-between md:items-center gap-10'>
          <div className='md:w-1/2'>
            <h1 className='font-[700] text-[36px] text-[#111111]'>OUR TEAM</h1>
            <p className='text-[#666666] text-[15px] leading-7 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div>
            <button className='bg-green-600 text-white py-3 px-8 font-semibold'>APPOINTMENT</button>
          </div>
        </div>
      </div>

      <div className='px-6 sm:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto pt-[40px] pb-[70px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div>
                <div>
                    <img className='w-full' src={teamImgOne} alt="" />
                    <div className='flex flex-col items-center bg-[#f5f5f5] py-[25px]'>
                        <h1 className='text-[#111111] text-[20px] font-[700] mb-[5px]'>ALAN WALKER</h1>
                        <p className='text-[#009603] text-[15px] mb-[20px]'>Photographer</p>
                        <div className='flex gap-[20px]'>
                            <FaFacebookF color='#666666' size={15} />
                            <FaTwitter color='#666666' size={15} />
                            <FaYoutube color='#666666' size={15} />
                            <FaInstagram color='#666666' size={15} />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img className='w-full' src={teamImgTwo} alt="" />
                    <div className='flex flex-col items-center bg-[#f5f5f5] py-[25px]'>
                        <h1 className='text-[#111111] text-[20px] font-[700] mb-[5px]'>AVA MAX</h1>
                        <p className='text-[#009603] text-[15px] mb-[20px]'>Director</p>
                        <div className='flex gap-[20px]'>
                            <FaFacebookF color='#666666' size={15} />
                            <FaTwitter color='#666666' size={15} />
                            <FaYoutube color='#666666' size={15} />
                            <FaInstagram color='#666666' size={15} />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img className='w-full' src={teamImgThree} alt="" />
                    <div className='flex flex-col items-center bg-[#f5f5f5] py-[25px]'>
                        <h1 className='text-[#111111] text-[20px] font-[700] mb-[5px]'>ANNE-MARIE</h1>
                        <p className='text-[#009603] text-[15px] mb-[20px]'>Manager</p>
                        <div className='flex gap-[20px]'>
                            <FaFacebookF color='#666666' size={15} />
                            <FaTwitter color='#666666' size={15} />
                            <FaYoutube color='#666666' size={15} />
                            <FaInstagram color='#666666' size={15} />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img className='w-full' src={teamImgFour} alt="" />
                    <div className='flex flex-col items-center bg-[#f5f5f5] py-[25px]'>
                        <h1 className='text-[#111111] text-[20px] font-[700] mb-[5px]'>BILLIE EILISH</h1>
                        <p className='text-[#009603] text-[15px] mb-[20px]'>Asistant</p>
                        <div className='flex gap-[20px]'>
                            <FaFacebookF color='#666666' size={15} />
                            <FaTwitter color='#666666' size={15} />
                            <FaYoutube color='#666666' size={15} />
                            <FaInstagram color='#666666' size={15} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div>
        <div className='py-36 px-4 flex items-center justify-center bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${contactImg})`}}>
            <div className='max-w-7xl flex flex-col items-center justify-center'>
                <h1 className='text-white text-[50px] font-[700] mb-3 text-center leading-[60px]'>WANNA PROMOTE YOUR BRAND?</h1>
                <p className='text-white text-[17px] font-[400] mb-7 text-center leading-[30px] md:px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                <button className='bg-green-600 text-white text-[16px] font-[700] py-[14px] px-[30px]'>CONTACT US</button>
            </div>
        </div>
      </div>

      <div>
        <div className='pt-24 px-4'>
            <div className='text-center mb-14'>
                <h1 className='text-[#111111] font-[700] text-[36px] mb-4 leading-[43px]'>WHAT CLIENT SAY?</h1>
                <p className='text-[#666666] font-[400] text-[15px] mb-4 leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore.</p>
            </div>
        </div>
      </div>

      <div>
        {/* main div */}
        <div className='sm:px-5 lg:px-8 xl:max-w-7xl xl:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-[70px]'>
            {/* first container */}
            <div className='px-3'>
                <div className='relative'>
                    <img src={quoteImg} className='absolute -top-2.5 bg-white w-5 h-auto left-0' alt="" />
                    <div className='pt-8 mb-8 border-t-[#e1e1e1] border-t-4'>
                        <div className='flex items-center mb-5'>
                            <div className='mr-6'>
                                <img className='h-[90px] w-[90px] rounded-full' src={clientOne} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[#111111] text-[18px] font-[700] mb-[5px]'>ANDREW FILDER</h1>
                                <p className='text-[#888888] text-[15px]'>@filder_muko</p>
                            </div>
                        </div>
                        <p className='text-[#444444] text-[15px] font-[400]'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            {/* second container */}
            <div className='px-3'>
                <div className='relative'>
                    <img src={quoteImg} className='absolute -top-2.5 bg-white w-5 h-auto left-0' alt="" />
                    <div className='pt-8 mb-8 border-t-[#e1e1e1] border-t-4'>
                        <div className='flex items-center mb-5'>
                            <div className='mr-6'>
                                <img className='h-[90px] w-[90px] rounded-full' src={clientTwo} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[#111111] text-[18px] font-[700] mb-[5px]'>DAVID GUETTA</h1>
                                <p className='text-[#888888] text-[15px]'>@filder_muko</p>
                            </div>
                        </div>
                        <p className='text-[#444444] text-[15px] font-[400]'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            {/* third container */}
            <div className='px-3'>
                <div className='relative'>
                    <img src={quoteImg} className='absolute -top-2.5 bg-white w-5 h-auto left-0' alt="" />
                    <div className='pt-8 mb-8 border-t-[#e1e1e1] border-t-4'>
                        <div className='flex items-center mb-5'>
                            <div className='mr-6'>
                                <img className='h-[90px] w-[90px] rounded-full' src={clientThree} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[#111111] text-[18px] font-[700] mb-[5px]'>BEBE REXHA</h1>
                                <p className='text-[#888888] text-[15px]'>@filder_muko</p>
                            </div>
                        </div>
                        <p className='text-[#444444] text-[15px] font-[400]'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            {/* fourth container */}
            <div className='px-3'>
                <div className='relative'>
                    <img src={quoteImg} className='absolute -top-2.5 bg-white w-5 h-auto left-0' alt="" />
                    <div className='pt-8 mb-8 border-t-[#e1e1e1] border-t-4'>
                        <div className='flex items-center mb-5'>
                            <div className='mr-6'>
                                <img className='h-[90px] w-[90px] rounded-full' src={clientFour} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[#111111] text-[18px] font-[700] mb-[5px]'>ADAM LEVINE</h1>
                                <p className='text-[#888888] text-[15px]'>@filder_muko</p>
                            </div>
                        </div>
                        <p className='text-[#444444] text-[15px] font-[400]'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default About
