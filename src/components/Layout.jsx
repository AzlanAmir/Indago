import React from 'react';
import Sidebar from './Sidebar';
import profile from "../assets/profile-img.jpg";

function Layout({ children }) {
  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="flex justify-between items-center p-6 bg-white shadow-md">
          <div />
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Hello Azlan</span>
            <img
              src={profile}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Page content */}
        <div className="p-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
