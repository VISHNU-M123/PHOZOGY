import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar/>

      <div className='pt-[100px]'>
        <div className='w-full h-[635px] '>
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19818.123456789!2d-0.04189!3d51.4462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603d4e5e5e5e5%3A0x123456789abcdef!2sForest%20Hill%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1620424959980!5m2!1sen!2sus">
          </iframe>
        </div>
      </div>

      <div className='py-[100px] xl:max-w-7xl xl:mx-auto'>
        <div className='px-[15px] mx-auto'>
            <div className='flex flex-col sm:flex-row'>
                <div className='md:px-[15px]'>
                  <div>
                    <h1 className='text-[#111111] text-[30px] font-[700] mb-[15px]'>GET IN TOUCH</h1>
                    <p className='text-[#111111] text-[15px] font-[400] leading-[26px] mb-[32px]'>We always love to hear from you. Reach out anytime to discuss your ideas or ask any questions about our creative photography services.</p>
                    <div className='flex items-center mb-[30px]'>
                      <div className='flex items-center justify-center h-[80px] w-[80px] bg-[#009603] rounded-full text-[40px] leading-[80px] text-center text-[#ffffff] mr-[30px]'>
                        <FaMapMarkerAlt />
                      </div>
                      <div className='flex-1'>
                        <h1 className='text-[#111111] text-[20px] font-[700] mb-[10px]'>ADDRESS</h1>
                        <p className='text-[#444444] text-[15px] font-[400] leading-[26px]'>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                      </div>
                    </div>
                    <div className='flex items-center mb-[30px]'>
                      <div className='flex items-center justify-center h-[80px] w-[80px] bg-[#009603] rounded-full text-[40px] leading-[80px] text-center text-[#ffffff] mr-[30px]'>
                        <ImMobile />
                      </div>
                      <div className='flex-1'>
                        <h1 className='text-[#111111] text-[20px] font-[700] mb-[10px]'>PHONE</h1>
                        <ul className="flex flex-wrap items-center">
                          <li className='text-[#444444] text-[15px] inline-block'>125-711-811</li>
                          <li className="w-[1px] h-[16px] bg-[#444444] mx-[15px]"></li>
                          <li className='text-[#444444] text-[15px] inline-block'>125-668-886</li>
                        </ul>
                      </div>
                    </div>
                    <div className='flex items-center mb-[30px]'>
                      <div className='flex items-center justify-center h-[80px] w-[80px] bg-[#009603] rounded-full text-[40px] leading-[80px] text-center text-[#ffffff] mr-[30px]'>
                        <FaEnvelope />
                      </div>
                      <div className='flex-1'>
                        <h1 className='text-[#111111] text-[20px] font-[700] mb-[10px]'>EMAIL</h1>
                        <p className='text-[#444444] text-[15px] font-[400] leading-[26px]'>Support.photography@ gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='md:px-[15px]'>
                  <div>
                    <h1 className='text-[#111111] font-[700] text-[30px] mb-[35px]'>WORK WITH ME!</h1>
                    <form action="">
                      <input type="text" className='h-[50px] w-full pl-[20px] text-[14px] text-[#444444] mb-[30px] border border-[#e1e1e1] outline-none' placeholder='Name' />
                      <input type="text" className='h-[50px] w-full pl-[20px] text-[14px] text-[#444444] mb-[30px] border border-[#e1e1e1] outline-none' placeholder='Email' />
                      <input type="text" className='h-[50px] w-full pl-[20px] text-[14px] text-[#444444] mb-[30px] border border-[#e1e1e1] outline-none' placeholder='Website' />
                      <textarea name="" id="" className='w-full pl-[20px] pt-[12px] h-[100px] text-[14px] text-[#444444] resize-none outline-none border border-[#e1e1e1] mb-[24px]' placeholder='Message'></textarea>
                      <button className='text-[#ffffff] text-[15px] font-[700] tracking-[2px] py-[13px] px-[30px] bg-[#009603]'>SUBMIT</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact
