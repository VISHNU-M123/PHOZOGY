import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div>
          <Navbar/>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
