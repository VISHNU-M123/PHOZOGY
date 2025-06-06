import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
