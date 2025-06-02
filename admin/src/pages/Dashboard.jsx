import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar/>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
