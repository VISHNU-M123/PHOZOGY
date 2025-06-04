import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

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

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
