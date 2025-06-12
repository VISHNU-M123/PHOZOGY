import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { BiSolidCloudDownload } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdPieChart } from "react-icons/md";
import { IoLogoCodepen } from "react-icons/io";
import { MdCardTravel } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import userOne from '../assets/face1.jpg'
import userTwo from '../assets/face2.jpg'
import userThree from '../assets/face5.jpg'
import userFour from '../assets/face3.jpg'
import userFive from '../assets/face4.jpg'
import msgUserOne from '../assets/face6.jpg'
import msgUserTwo from '../assets/face8.jpg'
import msgUserThree from '../assets/face9.jpg'
import msgUserFour from '../assets/face11.jpg'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import dashSlideImgOne from '../assets/img_5.jpg'
import dashSlideImgTwo from '../assets/img_6.jpg'
import dashSlideImgThree from '../assets/Rectangle.jpg'
import slideUserOne from '../assets/face12.jpg'
import { AiFillCloseSquare } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";

const Dashboard = () => {

  const [showSidebarItems, setShowSidebarItems] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleSidebarItems = () => {
    setShowSidebarItems(prev => !prev)
  }

  const images = [
    dashSlideImgOne,
    dashSlideImgTwo,
    dashSlideImgThree,
    dashSlideImgOne,
    dashSlideImgTwo,
    dashSlideImgThree,
    dashSlideImgOne,
  ];

  const totalSlides = images.length

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval)
  },[])

  return (
    <div>
      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar showItems={showSidebarItems} />
        </div>
        <div className="w-full">
          <Navbar toggleSidebarItems={toggleSidebarItems} />
          <div>
            <div className="bg-[#000000] py-[30px] px-[28px] w-full">

              {/* first div */}
              <div className="-mx-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <div className="mb-[24px] px-3">
                  <div className="w-full rounded-[4px] bg-[#191c24]">
                    <div className="py-[28px] px-[25px]">
                      <div className="flex flex-wrap">
                        <div className="w-3/4">
                          <div className="flex items-center self-start">
                            <h1 className="text-[24px] font-[500] text-white">$12.34</h1>
                            <p className="font-[500] ml-[8px] text-[14px] text-green-500">+3.5%</p>
                          </div>
                        </div>
                        <div className="col-3/9 w-1/4 px-4">
                          <div className="w-[40px] h-[37px] rounded-[7px] bg-[rgba(0,210,91,0.11)] flex items-center justify-center">
                            <GoArrowUpRight  className="text-[20px] text-[#00d25b]" />
                          </div>
                        </div>
                      </div>
                      <h1 className="text-[#6c7293] text-[15px] mb-[8px] font-normal">Potential growth</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-[24px] px-3">
                  <div className="w-full rounded-[4px] bg-[#191c24]">
                    <div className="py-[28px] px-[25px]">
                      <div className="flex flex-wrap">
                        <div className="w-3/4">
                          <div className="flex items-center self-start">
                            <h1 className="text-[24px] font-[500] text-white">$17.34</h1>
                            <p className="font-[500] ml-[8px] text-[14px] text-green-500">+11%</p>
                          </div>
                        </div>
                        <div className="col-3/9 w-1/4 px-4">
                          <div className="w-[40px] h-[37px] rounded-[7px] bg-[rgba(0,210,91,0.11)] flex items-center justify-center">
                            <GoArrowUpRight  className="text-[20px] text-[#00d25b]" />
                          </div>
                        </div>
                      </div>
                      <h1 className="text-[#6c7293] text-[15px] mb-[8px] font-normal">Revenue current</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-[24px] px-3">
                  <div className="w-full rounded-[4px] bg-[#191c24]">
                    <div className="py-[28px] px-[25px]">
                      <div className="flex flex-wrap">
                        <div className="w-3/4">
                          <div className="flex items-center self-start">
                            <h1 className="text-[24px] font-[500] text-white">$12.34</h1>
                            <p className="font-[500] ml-[8px] text-[14px] text-red-500">-2.4%</p>
                          </div>
                        </div>
                        <div className="col-3/9 w-1/4 px-4">
                          <div className="w-[40px] h-[37px] rounded-[7px] bg-[rgba(252,66,74,0.11)] flex items-center justify-center">
                            <GoArrowDownLeft   className="text-[20px] text-[#fc424a]" />
                          </div>
                        </div>
                      </div>
                      <h1 className="text-[#6c7293] text-[15px] mb-[8px] font-normal">Daily Income</h1>
                    </div>
                  </div>
                </div>
                <div className="mb-[24px] px-3">
                  <div className="w-full rounded-[4px] bg-[#191c24]">
                    <div className="py-[28px] px-[25px]">
                      <div className="flex flex-wrap">
                        <div className="w-3/4">
                          <div className="flex items-center self-start">
                            <h1 className="text-[24px] font-[500] text-white">$12.34</h1>
                            <p className="font-[500] ml-[8px] text-[14px] text-green-500">+3.5%</p>
                          </div>
                        </div>
                        <div className="col-3/9 w-1/4 px-4">
                          <div className="w-[40px] h-[37px] rounded-[7px] bg-[rgba(0,210,91,0.11)] flex items-center justify-center">
                            <GoArrowUpRight  className="text-[20px] text-[#00d25b]" />
                          </div>
                        </div>
                      </div>
                      <h1 className="text-[#6c7293] text-[15px] mb-[8px] font-normal">Potential growth</h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* second div */}
              <div className="flex flex-col md:flex-row -mx-3">
                <div className="mb-[24px] md:w-4/12 flex items-stretch px-3">
                  <div className="bg-[#191c24] rounded-[4px] w-full">
                    <div className="py-[28px] px-[25px]">
                      <h1 className="text-white mb-[18px] text-[18px] font-[500]">Transaction History</h1>
                      <div className="relative">
                        <div className="flex text-center justify-center h-[200px]">
                          <canvas className="h-[200px] w-[200px] block"></canvas>
                        </div>
                        <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-[100px] h-[20px] text-center text-[18px] text-white">$1200 <span className="text-[#6c7293] text-[12px] text-center block">Total</span></div>
                      </div>
                      <div className="xl:px-[24px] md:px-[16px] px-[24px] flex md:flex-col xl:flex-row py-[16px] mt-[16px]">
                        <div className="md:text-center">
                          <h1 className="mb-[4px] text-[15px] font-[500] text-white">Transfer to Paypal</h1>
                          <p className="text-[#6c7293] text-[14px]">07 Jan 2019, 09:12AM</p>
                        </div>
                        <div className="md:text-center text-end flex-grow-1 self-center">
                          <h1 className="text-[15px] font-[700] text-white">$236</h1>
                        </div>
                      </div>
                      <div className="xl:px-[24px] md:px-[16px] px-[24px] flex md:flex-col xl:flex-row py-[16px] mt-[16px]">
                        <div className="md:text-center">
                          <h1 className="mb-[4px] text-[15px] font-[500] text-white">Transfer to Stripe</h1>
                          <p className="text-[#6c7293] text-[14px]">07 Jan 2019, 09:12AM</p>
                        </div>
                        <div className="md:text-center text-end flex-grow-1 self-center">
                          <h1 className="text-[15px] font-[700] text-white">$593</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-8/12 mb-[24px] flex items-stretch px-3">
                  <div className="w-full rounded-[4px] bg-[#191c24]">
                    <div className="py-[28px] px-[25px]">
                      <div className="flex items-center justify-between">
                        <h1 className="text-white mb-[4px] text-[18px] font-[500]">Open Projects</h1>
                        <p className="text-[#6c7293] mb-[4px] text-[14px]">Your data status</p>
                      </div>
                      <div>
                        <div className="w-full">
                          <div>
                            <div className="flex py-[16px] border-b border-b-[#2c2e33]">
                              <div>
                                <div className="w-[40px] h-[40px] bg-blue-500 flex items-center justify-center">
                                  <BsFileEarmarkTextFill size={18} color="white" />
                                </div>
                              </div>
                              <div className="pl-[15px] flex flex-col md:flex-row md:items-center md:justify-between flex-grow leading-none text-left">
                                <div className="flex-grow">
                                  <h1 className="text-[15px] font-[500] mb-[8px] text-white">Admin dashboard design</h1>
                                  <p className="text-[#6c7293] text-[14px]">Broadcast web app mockup</p>
                                </div>
                                <div className="pt-[8px] md:pt-0">
                                  <p className="text-[#6c7293] mb-[10px] text-[14px]">15 minutes ago</p>
                                  <p className="text-[#6c7293] text-[14px]">30 tasks, 5 issues</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex py-[16px] border-b border-b-[#2c2e33]">
                              <div>
                                <div className="w-[40px] h-[40px] bg-green-500 flex items-center justify-center">
                                  <BiSolidCloudDownload size={18} color="white" />
                                </div>
                              </div>
                              <div className="pl-[15px] flex flex-col md:flex-row md:items-center md:justify-between flex-grow leading-none text-left">
                                <div className="flex-grow">
                                  <h1 className="text-[15px] font-[500] mb-[8px] text-white">Wordpress Development</h1>
                                  <p className="text-[#6c7293] text-[14px]">Upload new design</p>
                                </div>
                                <div className="pt-[8px] md:pt-0">
                                  <p className="text-[#6c7293] mb-[10px] text-[14px]">1 hour ago</p>
                                  <p className="text-[#6c7293] text-[14px]">23 tasks, 5 issues</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex py-[16px] border-b border-b-[#2c2e33]">
                              <div>
                                <div className="w-[40px] h-[40px] bg-violet-500 flex items-center justify-center">
                                  <GoClockFill size={18} color="white" />
                                </div>
                              </div>
                              <div className="pl-[15px] flex flex-col md:flex-row md:items-center md:justify-between flex-grow leading-none text-left">
                                <div className="flex-grow">
                                  <h1 className="text-[15px] font-[500] mb-[8px] text-white">Project meeting</h1>
                                  <p className="text-[#6c7293] text-[14px]">New project discussion</p>
                                </div>
                                <div className="pt-[8px] md:pt-0">
                                  <p className="text-[#6c7293] mb-[10px] text-[14px]">35 minutes ago</p>
                                  <p className="text-[#6c7293] text-[14px]">15 tasks, 2 issues</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex py-[16px] border-b border-b-[#2c2e33]">
                              <div>
                                <div className="w-[40px] h-[40px] bg-red-500 flex items-center justify-center">
                                  <HiOutlineMailOpen size={18} color="white" />
                                </div>
                              </div>
                              <div className="pl-[15px] flex flex-col md:flex-row md:items-center md:justify-between flex-grow leading-none text-left">
                                <div className="flex-grow">
                                  <h1 className="text-[15px] font-[500] mb-[8px] text-white">Broadcast Mail</h1>
                                  <p className="text-[#6c7293] text-[14px]">Send release details to team</p>
                                </div>
                                <div className="pt-[8px] md:pt-0">
                                  <p className="text-[#6c7293] mb-[10px] text-[14px]">55 minutes ago</p>
                                  <p className="text-[#6c7293] text-[14px]">35 tasks, 7 issues</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex py-[16px]">
                              <div>
                                <div className="w-[40px] h-[40px] bg-yellow-500 flex items-center justify-center">
                                  <MdPieChart size={18} color="white" />
                                </div>
                              </div>
                              <div className="pl-[15px] flex flex-col md:flex-row md:items-center md:justify-between flex-grow leading-none text-left">
                                <div className="flex-grow">
                                  <h1 className="text-[15px] font-[500] mb-[8px] text-white">UI Design</h1>
                                  <p className="text-[#6c7293] text-[14px]">New applicaiton planning</p>
                                </div>
                                <div className="pt-[8px] md:pt-0">
                                  <p className="text-[#6c7293] mb-[10px] text-[14px]">50 minutes ago</p>
                                  <p className="text-[#6c7293] text-[14px]">27 tasks, 4 issues</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* third div */}
              <div className="flex flex-col md:flex-row -mx-3">
                <div className="md:w-4/12 w-full mb-[24px] px-3">
                  <div className="bg-[#191c24] rounded-[4px]">
                    <div className="py-[28px] px-[25px]">
                      <h1 className="text-[16px] font-[500] mb-[8px] text-white">Revenue</h1>
                      <div className="flex items-center md:flex-col lg:flex-col xl:flex-row flex-row justify-between">
                        <div className="my-auto xl:w-8/12 sm:w-full">
                          <div className="flex items-center">
                            <h1 className="text-[30px] font-[500] text-white">$32123</h1>
                            <p className="text-[14px] font-[500] text-green-500 ml-[8px]">+3.5%</p>
                          </div>
                          <h1 className="text-[#6c7293] text-[15px] mb-[8px]">11.38% Since last month</h1>
                        </div>
                        <div className="xl:w-4/12 sm:w-full text-center flex justify-center">
                          <IoLogoCodepen size={60} className="text-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-4/12 w-full mb-[24px] px-3">
                  <div className="bg-[#191c24] rounded-[4px]">
                    <div className="py-[28px] px-[25px]">
                      <h1 className="text-[16px] font-[500] mb-[8px] text-white">Sales</h1>
                      <div className="flex items-center md:flex-col lg:flex-col xl:flex-row flex-row justify-between">
                        <div className="my-auto xl:w-8/12 sm:w-full">
                          <div className="flex items-center">
                            <h1 className="text-[30px] font-[500] text-white">$45850</h1>
                            <p className="text-[14px] font-[500] text-green-500 ml-[8px]">+8.3%</p>
                          </div>
                          <h1 className="text-[#6c7293] text-[15px] mb-[8px]">9.61% Since last month</h1>
                        </div>
                        <div className="xl:w-4/12 sm:w-full text-center flex justify-center">
                          <MdCardTravel size={60} className="text-red-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-4/12 w-full mb-[24px] px-3">
                  <div className="bg-[#191c24] rounded-[4px]">
                    <div className="py-[28px] px-[25px]">
                      <h1 className="text-[16px] font-[500] mb-[8px] text-white">Purchase</h1>
                      <div className="flex items-center md:flex-col lg:flex-col xl:flex-row flex-row justify-between">
                        <div className="my-auto xl:w-8/12 sm:w-full">
                          <div className="flex items-center">
                            <h1 className="text-[30px] font-[500] text-white">$2039</h1>
                            <p className="text-[14px] font-[500] text-red-500 ml-[8px]">-2.1%</p>
                          </div>
                          <h1 className="text-[#6c7293] text-[15px] mb-[8px]">2.27% Since last month</h1>
                        </div>
                        <div className="xl:w-4/12 sm:w-full text-center flex justify-center">
                          <FiMonitor size={60} className="text-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* fourth div */}
              <div>
                <div className="mb-[24px] w-full">
                  <div className="bg-[#191c24] rounded-[4px]">
                    <div className="py-[28px] px-[25px]">
                      <h1 className="text-white mb-[18px] text-[18px] font-[500]">Order Status</h1>
                      <div className="overflow-x-auto">
                        <table className="w-full table-fixed min-w-[1000px]">
                          <thead>
                            <tr>
                              <th className="border-b border-b-[#2c2e33] p-[15px] w-[80px] align-middle">
                                <div className="min-h-[18px] pl-[20px] relative">
                                  <label htmlFor="" className="pl-[16px] text-[14px]">
                                    <input type="text" className="absolute top-0 left-0 ml-0 mt-0 cursor-pointer rounded-[2px] w-[16px] h-[16px] outline-none border-2 border-[#6c7293]" />
                                  </label>
                                </div>
                              </th>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Client Name</th>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Order No</th>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Product Cost</th>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Project</th>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Payment Mode</th>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Start Date</th>
                              <th className="text-[#6c7293] text-[14px] font-[500] p-[15px] leading-none border-b border-b-[#2c2e33] align-middle text-left">Payment Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-[15px] whitespace-nowrap leading-none align-middle border-b border-b-[#2c2e33]">
                                <div className="min-h-[18px] pl-[20px] relative block m-0">
                                  <label htmlFor="" className="block pl-[16px] text-[14px] leading-relaxed">
                                    <input type="text" className="absolute top-0 left-0 ml-0 mt-0 cursor-pointer rounded-[2px] w-[16px] h-[16px] outline-none border-2 border-[#6c7293]" />
                                  </label>
                                </div>
                              </td>
                              <td className="p-[15px] align-middle leading-none whitespace-nowrap flex items-center border-b border-b-[#2c2e33]">
                                <img src={userOne} className="w-[30px] h-[30px] rounded-full align-middle" alt="" />
                                <span className="pl-[8px] text-[14px] leading-none text-white">Henry Klein</span>
                              </td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">02312</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">$14,500</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">Dashboard</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">Credit card</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">04 Dec 2019</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap border-b border-b-[#2c2e33]">
                                <div className="border border-[#00d25b] text-[#00d25b] py-[8px] px-[11px] rounded-[4px] text-[12px] leading-none font-[500] text-center inline-block">Approved</div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[15px] whitespace-nowrap leading-none align-middle border-b border-b-[#2c2e33]">
                                <div className="min-h-[18px] pl-[20px] relative block m-0">
                                  <label htmlFor="" className="block pl-[16px] text-[14px] leading-relaxed">
                                    <input type="text" className="absolute top-0 left-0 ml-0 mt-0 cursor-pointer rounded-[2px] w-[16px] h-[16px] outline-none border-2 border-[#6c7293]" />
                                  </label>
                                </div>
                              </td>
                              <td className="p-[15px] align-middle leading-none whitespace-nowrap flex items-center border-b border-b-[#2c2e33]">
                                <img src={userTwo} className="w-[30px] h-[30px] rounded-full align-middle" alt="" />
                                <span className="pl-[8px] text-[14px] leading-none text-white">Estella Bryan</span>
                              </td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">02312</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">$14,500</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">Website</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">Cash on delivery</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">04 Dec 2019</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap border-b border-b-[#2c2e33]">
                                <div className="border border-[#ffab00] text-[#ffab00] py-[8px] px-[11px] rounded-[4px] text-[12px] leading-none font-[500] text-center inline-block">Pending</div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[15px] whitespace-nowrap leading-none align-middle border-b border-b-[#2c2e33]">
                                <div className="min-h-[18px] pl-[20px] relative block m-0">
                                  <label htmlFor="" className="block pl-[16px] text-[14px] leading-relaxed">
                                    <input type="text" className="absolute top-0 left-0 ml-0 mt-0 cursor-pointer rounded-[2px] w-[16px] h-[16px] outline-none border-2 border-[#6c7293]" />
                                  </label>
                                </div>
                              </td>
                              <td className="p-[15px] align-middle leading-none whitespace-nowrap flex items-center border-b border-b-[#2c2e33]">
                                <img src={userThree} className="w-[30px] h-[30px] rounded-full align-middle" alt="" />
                                <span className="pl-[8px] text-[14px] leading-none text-white">Lucy Abbott</span>
                              </td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">02312</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">$14,500</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">App design</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">Credit card</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">04 Dec 2019</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap border-b border-b-[#2c2e33]">
                                <div className="border border-[#fc424a] text-[#fc424a] py-[8px] px-[11px] rounded-[4px] text-[12px] leading-none font-[500] text-center inline-block">Rejected</div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[15px] whitespace-nowrap leading-none align-middle border-b border-b-[#2c2e33]">
                                <div className="min-h-[18px] pl-[20px] relative block m-0">
                                  <label htmlFor="" className="block pl-[16px] text-[14px] leading-relaxed">
                                    <input type="text" className="absolute top-0 left-0 ml-0 mt-0 cursor-pointer rounded-[2px] w-[16px] h-[16px] outline-none border-2 border-[#6c7293]" />
                                  </label>
                                </div>
                              </td>
                              <td className="p-[15px] align-middle leading-none whitespace-nowrap flex items-center border-b border-b-[#2c2e33]">
                                <img src={userFour} className="w-[30px] h-[30px] rounded-full align-middle" alt="" />
                                <span className="pl-[8px] text-[14px] leading-none text-white">Peter Gill</span>
                              </td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">02312</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">$14,500</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">Development</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">Online payment</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">04 Dec 2019</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap border-b border-b-[#2c2e33]">
                                <div className="border border-[#00d25b] text-[#00d25b] py-[8px] px-[11px] rounded-[4px] text-[12px] leading-none font-[500] text-center inline-block">Approved</div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-[15px] whitespace-nowrap leading-none align-middle border-b border-b-[#2c2e33]">
                                <div className="min-h-[18px] pl-[20px] relative block m-0">
                                  <label htmlFor="" className="block pl-[16px] text-[14px] leading-relaxed">
                                    <input type="text" className="absolute top-0 left-0 ml-0 mt-0 cursor-pointer rounded-[2px] w-[16px] h-[16px] outline-none border-2 border-[#6c7293]" />
                                  </label>
                                </div>
                              </td>
                              <td className="p-[15px] align-middle leading-none whitespace-nowrap flex items-center border-b border-b-[#2c2e33]">
                                <img src={userFive} className="w-[30px] h-[30px] rounded-full align-middle" alt="" />
                                <span className="pl-[8px] text-[14px] leading-none text-white">Sallie Reyes</span>
                              </td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">02312</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">$14,500</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">Website</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">Credit card</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap text-white border-b border-b-[#2c2e33]">04 Dec 2019</td>
                              <td className="p-[15px] text-[14px] align-middle leading-none whitespace-nowrap border-b border-b-[#2c2e33]">
                                <div className="border border-[#00d25b] text-[#00d25b] py-[8px] px-[11px] rounded-[4px] text-[12px] leading-none font-[500] text-center inline-block">Approved</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* fifth div */}
              <div className="-mx-3 flex flex-wrap">
                <div className="mb-[24px] w-full xl:w-4/12 md:w-6/12 px-3">
                  <div className="w-full rounded-[4px] bg-[#191c24] h-full flex flex-col">
                    <div className="py-[28px] px-[25px]">
                      <div className="flex justify-between">
                        <h1 className="text-white mb-[18px] text-[18px] font-[500] leading-tight">Messages</h1>
                        <p className="text-[#6c7293] mb-[4px] text-[14px]">View all</p>
                      </div>
                      <div>
                        <div className="flex items-start py-[16px] border-b-[#2c2e33] border-b">
                          <div className="relative">
                            <img src={msgUserOne} className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center" alt="" />
                          </div>
                          <div className="pl-[15px] leading-none flex-grow-1">
                            <div className="flex-grow-1">
                              <div className="xl:flex xl:justify-between md:block lg:block flex justify-between">
                                <h1 className="text-[15px] font-[500] mb-[8px] leading-tight text-white">Leonard</h1>
                                <p className="text-[#6c7293] text-[12px] mb-[10px] leading-none">5 minutes ago</p>
                              </div>
                              <p className="mb-[10px] leading-none text-[#6c7293] text-[14px]">Well, it seems to be working now.</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start py-[16px] border-b-[#2c2e33] border-b">
                          <div className="relative">
                            <img src={msgUserTwo} className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center" alt="" />
                          </div>
                          <div className="pl-[15px] leading-none flex-grow-1">
                            <div className="flex-grow-1">
                              <div className="xl:flex xl:justify-between md:block lg:block flex justify-between">
                                <h1 className="text-[15px] font-[500] mb-[8px] leading-tight text-white">Luella Mills</h1>
                                <p className="text-[#6c7293] text-[12px] mb-[10px] leading-none">10 minutes ago</p>
                              </div>
                              <p className="mb-[10px] leading-none text-[#6c7293] text-[14px]">Well, it seems to be working now.</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start py-[16px] border-b-[#2c2e33] border-b">
                          <div className="relative">
                            <img src={msgUserThree} className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center" alt="" />
                          </div>
                          <div className="pl-[15px] leading-none flex-grow-1">
                            <div className="flex-grow-1">
                              <div className="xl:flex xl:justify-between md:block lg:block flex justify-between">
                                <h1 className="text-[15px] font-[500] mb-[8px] leading-tight text-white">Ethel Kelly</h1>
                                <p className="text-[#6c7293] text-[12px] mb-[10px] leading-none">2 Hours ago</p>
                              </div>
                              <p className="mb-[10px] leading-none text-[#6c7293] text-[14px]">Please review the tickets.</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start py-[16px] border-b-[#2c2e33] border-b">
                          <div className="relative">
                            <img src={msgUserFour} className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center" alt="" />
                          </div>
                          <div className="pl-[15px] leading-none flex-grow-1">
                            <div className="flex-grow-1">
                              <div className="xl:flex xl:justify-between md:block lg:block flex justify-between">
                                <h1 className="text-[15px] font-[500] mb-[8px] leading-tight text-white">Herman May</h1>
                                <p className="text-[#6c7293] text-[12px] mb-[10px] leading-none">4 Hours ago</p>
                              </div>
                              <p className="mb-[10px] leading-none text-[#6c7293] text-[14px]">Thanks a lot. It was easy to fix it.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-[24px] w-full xl:w-4/12 md:w-6/12 px-3">
                  <div className="w-full rounded-[4px] bg-[#191c24] h-full flex flex-col">
                    <div className="py-[28px] px-[25px]">
                      <h1 className="text-white mb-[18px] text-[18px] font-[500] leading-tight">Portfolio Slide</h1>
                      <div className="block w-full relative z-1">
                        <div className="relative w-full overflow-hidden">
                          <div className="flex relative transition-all duration-[0.25s] ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                            {
                              images.map((img, index) => (
                                <div key={index} className="flex-shrink-0 w-full">
                                  <div>
                                    <img src={img} className="w-full rounded-[4px] align-middle" alt="" />
                                  </div>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                        <div className="top-auto bottom-full absolute flex right-0 mt-0 pb-[14px] px-[2px] gap-1">
                          <div onClick={prevSlide} className="float-none m-0 w-[32px] h-[32px] bg-black/50 rounded-full flex items-center justify-center">
                            <MdKeyboardArrowLeft className="text-[#a7afb7]" size={20} />
                          </div>
                          <div onClick={nextSlide} className="float-none m-0 w-[32px] h-[32px] bg-black/50 rounded-full flex items-center justify-center">
                            <MdKeyboardArrowRight  className="text-[#a7afb7]" size={20} />
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="py-[24px] flex">
                        <div className="w-full">
                          <div className="flex items-start p-0">
                            <div className="relative">
                              <img src={slideUserOne} className="w-[40px] h-[40px] flex items-center justify-center text-center rounded-full align-middle" alt="" />
                            </div>
                            <div className="leading-none pl-[15px] flex-grow flex">
                              <div className="flex-grow">
                                <div className="xl:flex xl:justify-between md:block lg:block flex justify-between">
                                  <h1 className="text-[15px] font-[500] mt-0 mb-[8px] leading-tight text-white">CeeCee Bass</h1>
                                  <p className="text-[#6c7293] mb-[10px] leading-none text-[12px] mt-0">4 Hours Ago</p>
                                </div>
                                <p className="text-[#6c7293] mb-[10px] leading-none text-[14px] mt-0">Well, it seems to be working now.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#6c7293] text-[14px] mt-0 mb-[16px]">Well, it seems to be working now.</p>
                      <div className="h-[16px] text-[12px] bg-[#000000] rounded-md shadow-inner text-white transition-all duration-[600ms] ease-in-out flex overflow-hidden">
                        <div className="w-[50%] bg-green-500 flex justify-center overflow-hidden text-center whitespace-nowrap"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-[24px] w-full xl:w-4/12 md:w-full px-3">
                  <div className="w-full rounded-[4px] bg-[#191c24] h-full">
                    <div className="py-[28px] px-[25px]">
                      <h1 className="text-white mb-[18px] text-[18px] font-[500] leading-tight">To Do List</h1>
                      <div className="flex mb-[24px]">
                        <input type="text" className="w-full bg-transparent h-[41px] border border-[#2c2e33] outline-none py-[10px] px-[11px] text-white text-[14px] font-normal rounded-[2px]" placeholder="enter task" />
                        <button className="text-white ml-[8px] cursor-pointer inline-block py-[6px] px-[12px] mb-0 text-[14px] leading-[1.42857143] text-center align-middle whitespace-nowrap bg-[#0090e7] rounded-[4px]">Add</button>
                      </div>
                      <div className="h-full">
                        <ul className="p-0 mb-0 text-left flex flex-col-reverse">
                          <li className="text-[15px] py-[12px] flex items-center justify-start leading-[1.8]">
                            <div className="my-[4px] text-ellipsis overflow-hidden whitespace-nowrap min-h-[18px] pl-[20px] relative block max-w-[90%]">
                              <label htmlFor="" className="text-ellipsis overflow-hidden max-w-full whitespace-nowrap block pl-[16px] text-[14px] leading-normal text-[#6c7293]">
                                <input type="text" className="mr-[15px] absolute top-0 left-0 ml-0 mt-0 z-1 cursor-pointer opacity-0 outline-none" />
                                Create invoice
                                <i className="h-[16px] w-[16px] rounded-[2px] border-[#0090e7] absolute top-0.5 left-0 border-2"></i>
                              </label>
                            </div>
                            <i className="ml-auto text-white text-[18px]">
                              <AiFillCloseSquare  />
                            </i>
                          </li>
                          <li className="text-[15px] py-[12px] flex items-center justify-start leading-[1.8] border-b border-b-[#2c2e33]">
                            <div className="my-[4px] text-ellipsis overflow-hidden whitespace-nowrap min-h-[18px] pl-[20px] relative block max-w-[90%]">
                              <label htmlFor="" className="text-ellipsis overflow-hidden max-w-full whitespace-nowrap block pl-[16px] text-[14px] leading-normal text-[#6c7293]">
                                <input type="text" className="mr-[15px] absolute top-0 left-0 ml-0 mt-0 z-1 cursor-pointer opacity-0 outline-none" />
                                Meeting with Alita
                                <i className="h-[16px] w-[16px] rounded-[2px] border-[#0090e7] absolute top-0.5 left-0 border-2"></i>
                              </label>  
                            </div>
                            <i className="ml-auto text-white text-[18px]">
                              <AiFillCloseSquare  />
                            </i>
                          </li>
                          <li className="text-[15px] py-[12px] flex items-center justify-start leading-[1.8] border-b border-b-[#2c2e33]">
                            <div className="my-[4px] text-ellipsis overflow-hidden whitespace-nowrap min-h-[18px] pl-[20px] relative block max-w-[90%]">
                              <label htmlFor="" className="text-ellipsis overflow-hidden max-w-full whitespace-nowrap block pl-[16px] text-[14px] leading-normal text-[#6c7293] line-through decoration-[#0090e7] decoration-1">
                                <input type="text" className="mr-[15px] absolute top-0 left-0 ml-0 mt-0 z-1 cursor-pointer opacity-0 outline-none" />
                                Prepare for presentation
                                <i className="h-[16px] w-[16px] rounded-[2px] border-[#0090e7] bg-[#0090e7] absolute top-0.5 left-0 border-2">
                                  <IoMdCheckmark color="black" />
                                </i>
                              </label>
                            </div>
                            <i className="ml-auto text-[#0090e7] text-[18px]">
                              <AiFillCloseSquare  />
                            </i>
                          </li>
                          <li className="text-[15px] py-[12px] flex items-center justify-start leading-[1.8] border-b border-b-[#2c2e33]">
                            <div className="my-[4px] text-ellipsis overflow-hidden whitespace-nowrap min-h-[18px] pl-[20px] relative block max-w-[90%]">
                              <label htmlFor="" className="text-ellipsis overflow-hidden max-w-full whitespace-nowrap block pl-[16px] text-[14px] leading-normal text-[#6c7293]">
                                <input type="text" className="mr-[15px] absolute top-0 left-0 ml-0 mt-0 z-1 cursor-pointer opacity-0 outline-none" />
                                Plan weekend outing
                                <i className="h-[16px] w-[16px] rounded-[2px] border-[#0090e7] absolute top-0.5 left-0 border-2"></i>
                              </label>
                            </div>
                            <i className="ml-auto text-white text-[18px]">
                              <AiFillCloseSquare  />
                            </i>
                          </li>
                          <li className="text-[15px] py-[12px] flex items-center justify-start leading-[1.8] border-b border-b-[#2c2e33]">
                            <div className="my-[4px] text-ellipsis overflow-hidden whitespace-nowrap min-h-[18px] pl-[20px] relative block max-w-[90%]">
                              <label htmlFor="" className="text-ellipsis overflow-hidden max-w-full whitespace-nowrap block pl-[16px] text-[14px] leading-normal text-[#6c7293]">
                                <input type="text" className="mr-[15px] absolute top-0 left-0 ml-0 mt-0 z-1 cursor-pointer opacity-0 outline-none" />
                                Pick up kids from school
                                <i className="h-[16px] w-[16px] rounded-[2px] border-[#0090e7] absolute top-0.5 left-0 border-2"></i>
                              </label>
                            </div>
                            <i className="ml-auto text-white text-[18px]">
                              <AiFillCloseSquare  />
                            </i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
