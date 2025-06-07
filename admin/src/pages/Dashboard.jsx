import React, { useState } from "react";
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

const Dashboard = () => {

  const [showSidebarItems, setShowSidebarItems] = useState(true)

  const toggleSidebarItems = () => {
    setShowSidebarItems(prev => !prev)
  }
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
                <div>
                  <div>
                    <div>
                      <h1>Order Status</h1>
                      <div>
                        <table>
                          <thead>
                            <tr>
                              <th>
                                <div>
                                  <label htmlFor="">
                                    <input type="text" />
                                  </label>
                                </div>
                              </th>
                              <th>Client Name</th>
                              <th>Order No</th>
                              <th>Product Cost</th>
                              <th>Project</th>
                              <th>Payment Mode</th>
                              <th>Start Date</th>
                              <th>Payment Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div>
                                  <label htmlFor="">
                                    <input type="text" />
                                  </label>
                                </div>
                              </td>
                              <td>
                                <img src="" alt="" />
                                <span>Henry Klein</span>
                              </td>
                              <td>02312</td>
                              <td>$14,500</td>
                              <td>Dashboard</td>
                              <td>Credit card</td>
                              <td>04 Dec 2019</td>
                              <td>
                                <div>Approved</div>
                              </td>
                            </tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                          </tbody>
                        </table>
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
