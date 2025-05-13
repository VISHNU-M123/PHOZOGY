import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import blogOne from '../assets/blog-1.jpg'
import blogTwo from '../assets/blog-2.jpg'
import blogThree from '../assets/blog-3.jpg'
import blogFour from '../assets/blog-4.jpg'
import blogFive from '../assets/blog-5.jpg'
import blogSix from '../assets/blog-6.jpg'
import featurePostOne from '../assets/fp-1.jpg'
import featurePostTwo from '../assets/fp-2.jpg'
import featurePostThree from '../assets/fp-3.jpg'
import featurePostFour from '../assets/fp-4.jpg'
import featurePostFive from '../assets/fp-5.jpg'
import instagramOne from '../assets/instagram-1.jpg'
import instagramTwo from '../assets/instagram-2.jpg'
import instagramThree from '../assets/instagram-3.jpg'
import instagramFour from '../assets/instagram-4.jpg'

const Blog = () => {
  return (
    <div>
      <Navbar/>

      <div>
        <div className='md:mx-4 xl:max-w-7xl xl:mx-auto py-[60px]'>
            <div className='flex flex-col lg:flex-row lg:gap-6'>
                {/* left side */}
                <div className='w-full lg:w-9/12 px-[15px]'>

                    {/* card 1 */}
                    <div className='flex flex-col sm:flex-row mb-[50px]'>
                        <div className='mr-[30px] w-full'>
                            <img className='h-full w-auto object-cover' src={blogOne} alt="" />
                        </div>
                        <div className='pt-[30px] md:pt-0'>
                            <div className='text-white text-[12px] font-[600] bg-[#009603] py-[2px] px-[12px] w-fit'>TYPOGRAPHY</div>
                            <h1 className='mt-[20px] mb-[10px] text-[#111111] font-[700] text-[20px] leading-[27px] cursor-pointer'>WOMEN WERE PHOTOGRAPHY PIONEERS YET GENDER INEQUALITY PERSISTS IN THE...</h1>
                            <ul className='mb-[14px] flex items-center text-[13px] text-[#888888]'>
                                <li className="flex items-center mr-[14px]">by <span className='text-[#111111] ml-1'>Admin</span></li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-[14px]">Aug, 15, 2019</li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-0">20 comment</li>
                            </ul>
                            <p className='text-[#444444] leading-[30px] text-[15px] font-[400] tracking-[0.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className='flex flex-col sm:flex-row mb-[50px]'>
                        <div className='mr-[30px] w-full'>
                            <img className='h-full w-auto object-cover' src={blogTwo} alt="" />
                        </div>
                        <div className='pt-[30px] md:pt-0'>
                            <div className='text-white text-[12px] font-[600] bg-[#009603] py-[2px] px-[12px] w-fit'>STOTIES</div>
                            <h1 className='mt-[20px] mb-[10px] text-[#111111] font-[700] text-[20px] leading-[27px] cursor-pointer'>PHOTOGRAPHY IS MORE THAN A CASUAL HOBBY FOR GOPHERS WIDE RECEIVER...</h1>
                            <ul className='mb-[14px] flex items-center text-[13px] text-[#888888]'>
                                <li className="flex items-center mr-[14px]">by <span className='text-[#111111] ml-1'>Admin</span></li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-[14px]">Aug, 15, 2019</li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-0">20 comment</li>
                            </ul>
                            <p className='text-[#444444] leading-[30px] text-[15px] font-[400] tracking-[0.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className='flex flex-col sm:flex-row mb-[50px]'>
                        <div className='mr-[30px] w-full'>
                            <img className='h-full w-auto object-cover' src={blogThree} alt="" />
                        </div>
                        <div className='pt-[30px] md:pt-0'>
                            <div className='text-white text-[12px] font-[600] bg-[#009603] py-[2px] px-[12px] w-fit'>GUIDES</div>
                            <h1 className='mt-[20px] mb-[10px] text-[#111111] font-[700] text-[20px] leading-[27px] cursor-pointer'>5 TIPS FOR IMPROVING LOW LIGHT SMARTPHONE PHOTOGRAPHY</h1>
                            <ul className='mb-[14px] flex items-center text-[13px] text-[#888888]'>
                                <li className="flex items-center mr-[14px]">by <span className='text-[#111111] ml-1'>Admin</span></li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-[14px]">Aug, 15, 2019</li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-0">20 comment</li>
                            </ul>
                            <p className='text-[#444444] leading-[30px] text-[15px] font-[400] tracking-[0.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                    </div>

                    {/* card 4 */}
                    <div className='flex flex-col sm:flex-row mb-[50px]'>
                        <div className='mr-[30px] w-full'>
                            <img className='h-full w-auto object-cover' src={blogFour} alt="" />
                        </div>
                        <div className='pt-[30px] md:pt-0'>
                            <div className='text-white text-[12px] font-[600] bg-[#009603] py-[2px] px-[12px] w-fit'>STOTIES</div>
                            <h1 className='mt-[20px] mb-[10px] text-[#111111] font-[700] text-[20px] leading-[27px] cursor-pointer'>YOUR GUIDE TO FINDING CRAZY INSTAGRAM PHOTOGRAPHY HASHTAGS</h1>
                            <ul className='mb-[14px] flex items-center text-[13px] text-[#888888]'>
                                <li className="flex items-center mr-[14px]">by <span className='text-[#111111] ml-1'>Admin</span></li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-[14px]">Aug, 15, 2019</li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-0">20 comment</li>
                            </ul>
                            <p className='text-[#444444] leading-[30px] text-[15px] font-[400] tracking-[0.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                    </div>

                    {/* card 5 */}
                    <div className='flex flex-col sm:flex-row mb-[50px]'>
                        <div className='mr-[30px] w-full'>
                            <img className='h-full w-auto object-cover' src={blogFive} alt="" />
                        </div>
                        <div className='pt-[30px] md:pt-0'>
                            <div className='text-white text-[12px] font-[600] bg-[#009603] py-[2px] px-[12px] w-fit'>TYPOGRAPHY</div>
                            <h1 className='mt-[20px] mb-[10px] text-[#111111] font-[700] text-[20px] leading-[27px] cursor-pointer'>ST. PAUL PHOTOGRAPHER USES 1800 TECHNOLOGY TO CREATE STUNNING PORTRAITS</h1>
                            <ul className='mb-[14px] flex items-center text-[13px] text-[#888888]'>
                                <li className="flex items-center mr-[14px]">by <span className='text-[#111111] ml-1'>Admin</span></li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-[14px]">Aug, 15, 2019</li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-0">20 comment</li>
                            </ul>
                            <p className='text-[#444444] leading-[30px] text-[15px] font-[400] tracking-[0.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                    </div>

                    {/* card 6 */}
                    <div className='flex flex-col sm:flex-row mb-[50px]'>
                        <div className='mr-[30px] w-full'>
                            <img className='h-full w-auto object-cover' src={blogSix} alt="" />
                        </div>
                        <div className='pt-[30px] md:pt-0'>
                            <div className='text-white text-[12px] font-[600] bg-[#009603] py-[2px] px-[12px] w-fit'>GUIDES</div>
                            <h1 className='mt-[20px] mb-[10px] text-[#111111] font-[700] text-[20px] leading-[27px] cursor-pointer'>INTERVIEW WITH WEDDING AND LANDSCAPE PHOTOGRAPHER ZACH NICHOLS | SLR LOUNGE...</h1>
                            <ul className='mb-[14px] flex items-center text-[13px] text-[#888888]'>
                                <li className="flex items-center mr-[14px]">by <span className='text-[#111111] ml-1'>Admin</span></li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-[14px]">Aug, 15, 2019</li>
                                <li className="w-[1px] h-[14px] bg-[#e1e1e1] mr-[14px]"></li>
                                <li className="mr-0">20 comment</li>
                            </ul>
                            <p className='text-[#444444] leading-[30px] text-[15px] font-[400] tracking-[0.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                    </div>

                    {/* pagination */}
                    <div>
                        <a href="" className='inline-block text-[20px] font-[600] bg-[#f2f2f2] text-[#111111] py-[12px] px-[22px] mr-[8px]'>1</a>
                        <a href="" className='inline-block text-[20px] font-[600] bg-[#f2f2f2] text-[#111111] py-[12px] px-[22px] mr-[8px]'>2</a>
                        <a href="" className='inline-block text-[20px] font-[600] bg-[#f2f2f2] text-[#111111] py-[12px] px-[22px] mr-[8px]'>3</a>
                        <a href="" className='inline-block text-[20px] font-[600] bg-[#f2f2f2] text-[#111111] py-[12px] px-[22px] mr-0'>Next</a>
                    </div>
                </div>

                {/* right side */}
                <div className='w-full lg:w-3/12 px-[15px]'>
                    <div className='pt-[40px] lg:pt-0'>

                        {/* feature post */}
                        <div className='mb-[55px]'>
                            <div className='flex items-center justify-between mb-[35px]'>
                                <h1 className='text-[#111111] text-[20px] font-[700]'>FEATURE POSTS</h1>
                                <div className='h-[3px] w-[95px] lg:w-[45px] xl:w-[95px] bg-[#e1e1e1]'></div>
                            </div>
                            <div>
                                <a href="" className='flex mb-[30px]'>
                                    <div className='mr-[20px] flex-shrink-0'>
                                        <img className='w-full h-full object-cover' src={featurePostOne} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[#111111] text-[15px] font-[700] leading-[20px]'>THIS PHOTOGRAPH HAS ELDERLY COUPLES...</h1>
                                        <span className='text-[#888888] text-[13px]'>Aug, 15, 2019</span>
                                    </div>
                                </a>
                                <a href="" className='flex mb-[30px]'>
                                    <div className='mr-[20px] flex-shrink-0'>
                                        <img className='w-full h-full object-cover' src={featurePostTwo} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[#111111] text-[15px] font-[700] leading-[20px]'>BUDGET GEAR GUIDE: THE BEST CHEAP OFF...</h1>
                                        <span className='text-[#888888] text-[13px]'>Aug, 15, 2019</span>
                                    </div>
                                </a>
                                <a href="" className='flex mb-[30px]'>
                                    <div className='mr-[20px] flex-shrink-0'>
                                        <img className='w-full h-full object-cover' src={featurePostThree} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[#111111] text-[15px] font-[700] leading-[20px]'>KNOW BEFORE YOU GO: GUIDE TO DISNEY...</h1>
                                        <span className='text-[#888888] text-[13px]'>Aug, 15, 2019</span>
                                    </div>
                                </a>
                                <a href="" className='flex mb-[30px]'>
                                    <div className='mr-[20px] flex-shrink-0'>
                                        <img className='w-full h-full object-cover' src={featurePostFour} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[#111111] text-[15px] font-[700] leading-[20px]'>BUDGET GEAR GUIDE: THE BEST CHEAP OFF...</h1>
                                        <span className='text-[#888888] text-[13px]'>Aug, 15, 2019</span>
                                    </div>
                                </a>
                                <a href="" className='flex mb-[30px]'>
                                    <div className='mr-[20px] flex-shrink-0'>
                                        <img className='w-full h-full object-cover' src={featurePostFive} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='text-[#111111] text-[15px] font-[700] leading-[20px]'>KNOW BEFORE YOU GO: GUIDE TO DISNEY...</h1>
                                        <span className='text-[#888888] text-[13px]'>Aug, 15, 2019</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* subscribe form */}
                        <div className='mb-[55px]'>
                            <div className='flex items-center justify-between mb-[35px]'>
                                <h1 className='text-[#111111] text-[20px] font-[700]'>SUBSCRIBE</h1>
                                <div className='h-[3px] w-[95px] lg:w-[45px] xl:w-[95px] bg-[#e1e1e1]'></div>
                            </div>
                            <p className='text-[#444444] font-[500] text-[15px] leading-[26px] mb-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor.</p>
                            <div>
                                <form action="">
                                    <input className='text-[#444444] text-[13px] w-full pl-[15px] mb-[20px] h-[46px] border border-[#d7d7d7] outline-none' type="text" placeholder='Name' />
                                    <input className='text-[#444444] text-[13px] w-full pl-[15px] mb-[20px] h-[46px] border border-[#d7d7d7] outline-none' type="email" placeholder='Email' />
                                    <button className='w-full text-[#ffffff] text-[15px] font-[700] tracking-[2px] bg-[#009603] pt-[14px] pb-[12px] px-[30px] cursor-pointer'>SUBSCRIBE</button>
                                </form>
                            </div>
                        </div>

                        {/* instagram */}
                        <div>
                            <div className='flex items-center justify-between mb-[35px]'>
                                <h1 className='text-[#111111] text-[20px] font-[700]'>INSTAGRAM</h1>
                                <div className='h-[3px] w-[95px] lg:w-[45px] xl:w-[95px] bg-[#e1e1e1]'></div>
                            </div>
                            <div className='grid grid-cols-2 gap-[10px]'>
                                <img src={instagramOne} alt="" className='w-full object-cover' />
                                <img src={instagramTwo} alt="" className='w-full object-cover' />
                                <img src={instagramThree} alt="" className='w-full object-cover' />
                                <img src={instagramFour} alt="" className='w-full object-cover' />
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

export default Blog
