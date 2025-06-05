import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/indago-logo.png"; // Adjust the path if needed


function Sidebar() {

  return (
    <div className="h-screen flex bg-gray-50">
      <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
        <div>
          <div className="flex items-center p-6 space-x-3">
            <img src={logo} alt="Logo" className="h-8 w-12" />
            <span className="text-2xl font-bold text-[#1746C7]">Indago</span>
          </div>
          <nav className="mt-10 flex flex-col space-y-3 px-6">
            <Link to="/home">
              <button className="text-left text-gray-700 hover:text-[#1746C7] font-medium">Home</button>
            </Link>
            <Link to="/alljobs">
              <button className="text-left text-gray-700 hover:text-[#1746C7] font-medium">All Jobs</button>
            </Link>
            <Link to="/addjob">
              <button className="text-left text-gray-700 hover:text-[#1746C7] font-medium">Add Jobs</button>
            </Link>
            <button className="text-left text-gray-700 hover:text-[#1746C7] font-medium">Profile</button>
          </nav>
        </div>

        {/* Logout */}
        <div className="p-6">
          <Link to="/logout">
            <button className="text-left text-red-600 hover:underline font-semibold">
              Logout
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
   
    </div>
  );
}

export default Sidebar;
