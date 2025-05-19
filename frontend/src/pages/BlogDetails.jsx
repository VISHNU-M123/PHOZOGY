import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import blogHero from '../assets/blog-hero.jpg'
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import quote from '../assets/quote.png'
import bdImgOne from '../assets/bd-1.jpg'
import bdImgTwo from '../assets/bd-2.jpg'
import bdImgThree from '../assets/bd-3.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import prevImg from '../assets/prev.jpg'
import nextImg from '../assets/next.jpg'
import postAuthorImg from '../assets/bd-2.jpg'
import { FaGooglePlusG } from "react-icons/fa";
import commentImgOne from '../assets/comment-1.jpg'
import commentImgTwo from '../assets/comment-2.jpg'
import commentImgThree from '../assets/comment-3.jpg'
import { LuClock9 } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaShareSquare } from "react-icons/fa";

const BlogDetails = () => {
  return (
    <div>
      <Navbar/>

      <div style={{backgroundImage: `url(${blogHero})`}} className='bg-center bg-cover sm:h-[960px] h-[450px]'></div>

      <div className='mx-auto'>
        <div className='px-[15px] xl:max-w-7xl xl:mx-auto pb-[60px]'>
          <div className='bg-[#ffffff] pt-[60px] md:px-[55px] px-[15px] -mt-[240px]'>
            <div className='mb-[60px]'>
              <div className='mb-[12px] flex flex-wrap'>
                <a href="" className='flex items-center text-[#111111] text-[15px] font-[400] mr-[20px]'><FaHome className='mr-[5px]' /> Home <IoIosArrowForward /></a>
                <a href="" className='flex items-center text-[#111111] text-[15px] font-[400] mr-[20px]'>Blog <IoIosArrowForward /></a>
                <p className='text-[#888888] text-[15px] font-[400]'>5 tips for improving low light smartphone photography</p>
              </div>
              <h1 className='text-[#111111] md:text-[42px] text-[36px] font-[700] leading-[55px] mb-[18px]'>5 tips for improving low light smartphone photography</h1>
              <ul className='flex items-center flex-wrap leading-6'>
                <li className='text-[#888888] text-[13px] mr-[12px]'>by <span className='text-[#111111]'>Admin</span></li>
                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[12px]"></li>
                <li className='text-[#888888] text-[13px] mr-[12px]'>Aug, 15, 2019</li>
                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[12px]"></li>
                <li className='text-[#888888] text-[13px] mr-0'>20 comment</li>
              </ul>
            </div>
            <div className='mb-[50px]'>
              <p className='text-[#444444] text-[17px] leading-[30px] mb-[15px] font-[400]'>Around 40% of B2B marketers say email newsletters are one of the key features to their content marketing success. There are tons of statistics that prove just how profitable emails can be for your business. What the numbers don’t show is that there’s a lot of testing and tweaking that goes into the email’s design and layout that allows the sender to get massive rewards.</p>
              <p className='text-[#444444] text-[17px] leading-[30px] mb-[15px] font-[400]'>What makes a successful email or email campaign? One of the major elements in the design and layout that draws people in and grows your click-through rate. Today, I’ll be showing you ten examples of winning email design and how to make your own.</p>
            </div>
            <div className='mb-[35px] border-t-[10px] border-t-[#f2f2f2] relative'>
              <p className='text-[#111111] text-[20px] leading-[35px] font-[600] pt-[24px] mb-[15px] italic'>Bringing the reader towards each CTA with “Awareness, Consideration, and Action” as the main stages. Harry’s used a color block design to guide the reader through each step of the email. Color blocking helps to guide the reader through your copy, making it easy to read with a pleasing layout.</p>
              <img src={quote} alt="" className='absolute left-0 -top-[20px] h-[22px] w-[45px] pr-4 bg-[#ffffff] bg-no-repeat' />
            </div>
            <div className='mb-[40px]'>
              <p className='text-[#444444] text-[17px] leading-[30px] font-[400] mb-[15px]'>Design: Contrasting colors like yellow and blue grab the reader’s attention, in this case they also happen to be Tock’s brand colors. At the center of the email is a simple illustration of the city to highlight the hustle and bustle of the life surrounding restaurants. They decided to match the color of their button or designs to their brand’s colors, with the help of a contrasting background color for yellow and dark blue and yellow and white. Placement: Two CTAs are placed in the emailer: “Explore Tock” and “Learn more.” If someone’s ready to use Tock’s services, they’re more likely to press the first CTA.</p>
            </div>
            <div className='mb-[34px] flex flex-col md:flex-row gap-3'>
              <img src={bdImgOne} alt="" className='mb-[10px] w-full md:[width:calc(33.33%-10px)]' />
              <img src={bdImgTwo} alt="" className='mb-[10px] w-full md:[width:calc(33.33%-10px)]' />
              <img src={bdImgThree} alt="" className='mb-[10px] w-full md:[width:calc(33.33%-10px)]' />
            </div>
            <div className='mb-[40px]'>
              <p className='text-[#444444] text-[17px] font-[400] leading-[30px] mb-[15px]'>If they’re still in the awareness stages of getting to know the brand, then they’ll most likely keep reading more on what Tock has to offer. They’re using one email design to speak to two types of readers both in the first stage of their welcome email.You can also change an email design’s color based on new product, season or to match a marketing campaign’s new look and feel.</p>
              <p className='text-[#444444] text-[17px] font-[400] leading-[30px] mb-[15px]'>Design: The email imitates a product marketing funnel system, bringing the reader towards each CTA with “Awareness, Consideration, and Action” as the main stages. Harry’s used a color block design to guide the reader through each step of the email. Color blocking helps to guide the reader through your copy, making it easy to read with a pleasing layout.</p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between pt-[35px] border-t border-t-[#ebebeb] mb-[50px]'>
              <div className='flex flex-wrap items-center gap-3 mb-[20px]'>
                <a href="" className='text-[#444444] text-[13px] bg-[#ebebeb] py-[8px] px-[14px]'>TYPOGRAPHY</a>
                <a href="" className='text-[#444444] text-[13px] bg-[#ebebeb] py-[8px] px-[14px]'>GUIDES</a>
                <a href="" className='text-[#444444] text-[13px] bg-[#ebebeb] py-[8px] px-[14px]'>IMPROVING</a>
                <a href="" className='text-[#444444] text-[13px] bg-[#ebebeb] py-[8px] px-[14px]'>SMARTPHONE</a>
              </div>
              <div className='flex flex-wrap items-center gap-3'>
                <p className='text-[#111111] text-[15px] font-[600] mr-[20px]'>SHARE</p>
                <a href="" className='bg-[#3263AF] text-[14px] text-[#ffffff] w-[46px] h-[46px] flex items-center justify-center'><FaFacebookF /></a>
                <a href="" className='bg-[#40C4FF] text-[14px] text-[#ffffff] w-[46px] h-[46px] flex items-center justify-center'><FaTwitter /></a>
                <a href="" className='bg-[#FF0000] text-[14px] text-[#ffffff] w-[46px] h-[46px] flex items-center justify-center'><FaYoutube /></a>
                <a href="" className='bg-[linear-gradient(45deg,_#af00e1,_#ff9e35)] text-[14px] text-[#ffffff] w-[46px] h-[46px] flex items-center justify-center'><FaInstagram /></a>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                  <a href="" className='block mb-[30px] lg:mb-0'>
                    <h1 className='flex items-center text-[#111111] text-[15px] font-[700] mb-[25px]'><IoIosArrowBack /> PREVIOUS POSTS</h1>
                    <div className='flex flex-col md:flex-row'>
                      <div className='mr-[30px]'>
                        <img src={prevImg} alt="" />
                      </div>
                      <div className='pt-[15px] md:pt-0'>
                        <div className='bg-[#009603] text-[#ffffff] text-[12px] font-[600] py-[2px] px-[12px] inline-block'>STORIES</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[23px] tracking-[0.5px] mt-[10px]'>The Best Weeknight Baked <br /> Potatoes, 3 Creative Ways</h1>
                      </div>
                    </div>
                  </a>
                </div>
                <div className=' md:flex md:justify-end'>
                  <a href="" className='text-right'>
                    <h1 className='flex items-center justify-end text-[#111111] text-[15px] font-[700] mb-[25px]'>NEXT POSTS <IoIosArrowForward /></h1>
                    <div className='flex flex-col md:flex-row'>
                      <div className='md:ml-[30px] md:order-2 flex justify-end'>
                        <img src={nextImg} alt="" />
                      </div>
                      <div className='pt-[15px] md:pt-0'>
                        <div className='bg-[#009603] text-[#ffffff] text-[12px] font-[600] py-[2px] px-[12px] inline-block'>TYPOGRAPHY</div>
                        <h1 className='text-[#111111] text-[20px] font-[700] leading-[23px] tracking-[0.5px] mt-[10px]'>The $8 French Rosé I Buy in <br /> Bulk Every Summer</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:items-center bg-[#f5f5f5] p-[30px] md:p-[50px] mb-[60px]'>
              <div className='mr-[30px]'>
                <img src={postAuthorImg} alt="" className='w-[130px] h-[130px] rounded-full max-w-fit' />
              </div>
              <div className='pt-[30px] md:pt-0'>
                <h1 className='text-[#111111] text-[24px] font-[700] mb-[8px]'>LENA MOLLEIN</h1>
                <p className='text-[#444444] text-[17px] leading-[30px] font-[400] mb-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <div className='flex items-center'>
                  <a href="" className='text-[14px] text-[#444444] mr-[15px]'><FaFacebookF /></a>
                  <a href="" className='text-[14px] text-[#444444] mr-[15px]'><FaTwitter /></a>
                  <a href="" className='text-[14px] text-[#444444] mr-[15px]'><FaGooglePlusG size={20} /></a>
                  <a href="" className='text-[14px] text-[#444444] mr-[15px]'><FaInstagram /></a>
                  <a href="" className='text-[14px] text-[#444444] mr-0'><FaYoutube /></a>
                </div>
              </div>
            </div>
            <div>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='md:px-[15px]'>
                  <h1 className='text-[#111111] text-[24px] font-[700] mb-[35px]'>COMMENT</h1>
                  <div className='flex flex-col md:flex-row mb-[35px]'>
                    <div className='mb-[25px] md:mb-0 md:mr-[20px]'>
                      <img className='w-[70px] h-[70px] rounded-full max-w-fit' src={commentImgOne} alt="" />
                    </div>
                    <div>
                      <h1 className='text-[#111111] text-[20px] font-[700] mr-[8px]'>BRANDON KELLEY</h1>
                      <p className='text-[#444444] mb-[10px] text-[15px] font-[400] leading-[26px]'>Consectetur adipiscing eiusmod tempor incididunt t labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                      <ul className='flex'>
                        <li className='flex items-center text-[#444444] text-[12px] mr-[25px]'>
                          <LuClock9 color='#009603' size={14} className='mr-[5px]' />
                          Aug, 15, 2019
                        </li>
                        <li className='flex items-center text-[#444444] text-[12px] mr-[25px]'>
                          <CiHeart color='#009603' size={18} className='mr-[5px]' />
                          Like
                        </li>
                        <li className='flex items-center text-[#444444] text-[12px]'>
                          <FaShareSquare color='#009603' size={14} className='mr-[5px]' />
                          Reply
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='flex flex-col md:flex-row mb-[35px]'>
                    <div className='mb-[25px] md:mb-0 md:mr-[20px]'>
                      <img className='w-[70px] h-[70px] rounded-full max-w-fit' src={commentImgTwo} alt="" />
                    </div>
                    <div>
                      <h1 className='text-[#111111] text-[20px] font-[700] mr-[8px]'>BRANDON KELLEY</h1>
                      <p className='text-[#444444] mb-[10px] text-[15px] font-[400] leading-[26px]'>Consectetur adipiscing eiusmod tempor incididunt t labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                      <ul className='flex'>
                        <li className='flex items-center text-[#444444] text-[12px] mr-[25px]'>
                          <LuClock9 color='#009603' size={14} className='mr-[5px]' />
                          Aug, 15, 2019
                        </li>
                        <li className='flex items-center text-[#444444] text-[12px] mr-[25px]'>
                          <CiHeart color='#009603' size={18} className='mr-[5px]' />
                          Like
                        </li>
                        <li className='flex items-center text-[#444444] text-[12px]'>
                          <FaShareSquare color='#009603' size={14} className='mr-[5px]' />
                          Reply
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='flex flex-col md:flex-row mb-[35px]'>
                    <div className='mb-[25px] md:mb-0 md:mr-[20px]'>
                      <img className='w-[70px] h-[70px] rounded-full max-w-fit' src={commentImgThree} alt="" />
                    </div>
                    <div>
                      <h1 className='text-[#111111] text-[20px] font-[700] mr-[8px]'>BRANDON KELLEY</h1>
                      <p className='text-[#444444] mb-[10px] text-[15px] font-[400] leading-[26px]'>Consectetur adipiscing eiusmod tempor incididunt t labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
                      <ul className='flex'>
                        <li className='flex items-center text-[#444444] text-[12px] mr-[25px]'>
                          <LuClock9 color='#009603' size={14} className='mr-[5px]' />
                          Aug, 15, 2019
                        </li>
                        <li className='flex items-center text-[#444444] text-[12px] mr-[25px]'>
                          <CiHeart color='#009603' size={18} className='mr-[5px]' />
                          Like
                        </li>
                        <li className='flex items-center text-[#444444] text-[12px]'>
                          <FaShareSquare color='#009603' size={14} className='mr-[5px]' />
                          Reply
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='md:px-[15px]'>
                  <div className='md:px-[40px] px-[20px] pt-[35px] pb-[40px] border border-[#e1e1e1]'>
                    <h1 className='text-[#111111] text-[24px] font-[700] mb-[35px]'>LEAVE A COMMENT</h1>
                    <form action="">
                      <input className='w-full h-[50px] pl-[20px] text-[14px] text-[#444444] bg-[#f2f2f2] mb-[20px] border-none outline-none' type="text" placeholder='Name' />
                      <input className='w-full h-[50px] pl-[20px] text-[14px] text-[#444444] bg-[#f2f2f2] mb-[20px] border-none outline-none' type="email" placeholder='Email' />
                      <input className='w-full h-[50px] pl-[20px] text-[14px] text-[#444444] bg-[#f2f2f2] mb-[20px] border-none outline-none' type="text" placeholder='Website' />
                      <textarea className='w-full pl-[20px] pt-[12px] h-[100px] text-[14px] text-[#444444] bg-[#f2f2f2] resize-none border-none outline-none mb-[14px]' name="" id="" placeholder='Comment'></textarea>
                      <button className='text-[#ffffff] text-[15px] font-[700] tracking-[2px] px-[30px] py-[13px] bg-[#009603] cursor-pointer'>SUBMIT</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default BlogDetails
