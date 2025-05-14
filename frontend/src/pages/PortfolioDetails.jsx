import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import detailsHero from '../assets/details-hero.jpg'
import dpOne from '../assets/dp-1.jpg'
import dpTwo from '../assets/dp-2.jpg'
import dpThree from '../assets/dp-3.jpg'
import dpFour from '../assets/dp-4.jpg'
import dpFive from '../assets/dp-5.jpg'
import dpSix from '../assets/dp-6.jpg'
import recentImgOne from '../assets/rp-1.jpg'
import recentImgTwo from '../assets/rp-2.jpg'
import recentImgThree from '../assets/rp-3.jpg'
import recentImgFour from '../assets/rp-4.jpg'

const PortfolioDetails = () => {

    const images = [ dpOne, dpTwo, dpThree, dpFour, dpFive, dpSix]
  return (
    <div>
      <Navbar/>

      <div style={{backgroundImage:`url(${detailsHero})`}} className='bg-cover bg-center h-auto py-[150px] md:h-[900px] md:py-0 flex items-center justify-center mt-[55px]'>
        <div className='px-[15px] mx-auto'>
            <div>
                <div className='bg-[rgba(0,0,0,0.7)] py-[60px] px-[20px] md:py-[60px] md:px-[75px] text-center'>
                    <h1 className='text-[#ffffff] font-[700] text-[36px] mb-[12px] leading-[45px]'>COLOR OF NATURAL</h1>
                    <ul className='flex justify-center'>
                        <li className='text-[#009603] text-[15px] font-[400] mr-[14px]'>Natural</li>
                        <li className="w-[1.5px] h-[15px] bg-[#e1e1e1] opacity-50 mr-[14px] self-center"></li>
                        <li className='text-[#009603] text-[15px] font-[400] mr-[14px]'>Animal</li>
                        <li className="w-[1.5px] h-[15px] bg-[#e1e1e1] opacity-50 mr-[14px] self-center"></li>
                        <li className='text-[#009603] text-[15px] font-[400]'>Lifestyle</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <div className='pt-[70px] md:px-[15px] md:mx-4 xl:max-w-7xl xl:mx-auto'>
        <div className='flex flex-col lg:flex-row'>
            {/* left side */}
            <div className='px-[15px]'>
                <div className='mb-[70px]'>
                    <p className='text-[#666666] text-[17px] font-[400] leading-[30px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem.</p>
                    <p className='text-[#666666] text-[17px] font-[400] leading-[30px] mb-[15px]'>Enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo inventore aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                </div>
            </div>

            {/* right side */}
            <div className='px-[15px]'>
                <div className='mb-[70px]'>
                    <p className='text-[#666666] text-[17px] font-[400] leading-[30px] mb-[30px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <p className='text-[#666666] text-[17px] font-[400] leading-[30px] mb-[15px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                </div>
            </div>
        </div>
      </div>

      <div className='mb-[70px]'>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-3 px-3 space-y-3">
          {
            images.map((image, index) => (
              <div key={index} className='relative overflow-hidden'>
                <img src={image} alt="" className='w-full h-auto cursor-pointer block' />
                <div className='absolute flex items-center justify-center'>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className='mx-auto pb-[40px] md:px-[15px] md:mx-4 xl:max-w-7xl xl:mx-auto'>
        <div className='px-[15px]'>
            <h1 className='text-[#111111] text-[36px] font-[700] mb-[30px] leading-[43px]'>Voluptas sit aspernatur aut odit aut fugit.</h1>
        </div>

        <div className='flex flex-col lg:flex-row'>
            <div className='px-[15px]'>
                <p className='text-[#666666] text-[17px] font-[400] leading-[30px] mb-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Nemo enim ipsam voluptatem spernatur.</p>
            </div>
            <div className='px-[15px]'>
                <p className='text-[#666666] text-[17px] font-[400] leading-[30px] mb-[15px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae fugit.</p>
            </div>
            <div className='px-[15px]'>
                <p className='text-[#666666] text-[17px] font-[400] leading-[30px] mb-[15px]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>
            </div>
        </div>
      </div>

      <div className='mx-auto px-[15px] md:mx-4 xl:max-w-7xl xl:mx-auto'>
        <div className='pt-[50px] mb-[40px] md:mx-[15px] border-t border-t-[#e1e1e1]'>
            <h1 className='text-[#111111] text-[36px] font-[700] mb-[15px] text-center leading-[43px]'>RECENT PHOTOGRAPHY</h1>
        </div>
      </div>

      <div>
        <div className='mx-auto px-[15px] md:mx-4 xl:max-w-7xl xl:mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-[15px] mb-[30px]'>
                <div>
                    <div>
                        <img className='w-full' src={recentImgOne} alt="" />
                        <div className='flex flex-col items-center bg-[#f5f5f5] py-[25px]'>
                            <h1 className='text-[#111111] text-[20px] font-[700] mb-[5px]'>SPRING GARDEN</h1>
                            <p className='text-[#009603] text-[15px] font-[600]'>Lifestyle</p>
                        </div>
                    </div>
                </div>
        
                <div>
                    <div>
                        <img className='w-full' src={recentImgTwo} alt="" />
                        <div className='flex flex-col items-center bg-[#f5f5f5] py-[25px]'>
                            <h1 className='text-[#111111] text-[20px] font-[700] mb-[5px]'>SPRING GARDEN</h1>
                            <p className='text-[#009603] text-[15px] font-[600]'>Fashion</p>
                        </div>
                    </div>
                </div>
        
                <div>
                    <div>
                        <img className='w-full' src={recentImgThree} alt="" />
                        <div className='flex flex-col items-center bg-[#f5f5f5] py-[25px]'>
                            <h1 className='text-[#111111] text-[20px] font-[700] mb-[5px]'>SPRING GARDEN</h1>
                            <p className='text-[#009603] text-[15px] font-[600]'>Natural</p>
                        </div>
                    </div>
                </div>
        
                <div>
                    <div>
                        <img className='w-full' src={recentImgFour} alt="" />
                        <div className='flex flex-col items-center bg-[#f5f5f5] py-[25px]'>
                            <h1 className='text-[#111111] text-[20px] font-[700] mb-[5px]'>SPRING GARDEN</h1>
                            <p className='text-[#009603] text-[15px] font-[600]'>Animal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='flex items-center justify-center px-4 mb-[100px]'>
        <button className='mt-[30px] bg-[#009603] text-[#ffffff] text-[15px] font-[700] py-[15px] sm:px-[102px] px-[70px] tracking-[2px]'>VIEW ALL PHOTOGRAPHY</button>
      </div>

      <Footer/>
    </div>
  )
}

export default PortfolioDetails
