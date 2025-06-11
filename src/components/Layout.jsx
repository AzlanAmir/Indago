import React, { useState } from 'react';
import Sidebar from './Sidebar';
import profile from "../assets/profile-img.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function Layout({ children }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = () => {
    // Add your sign-out logic here
    alert('Signing out...');
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col relative">
        {/* Top bar */}
        <div className="flex justify-between items-center p-6 bg-white shadow-md">
          {/* Left: Greeting */}
          <h1 className="text-gray-700 text-3xl">Welcome back, Azlan!</h1>

          {/* Right: Profile with Dropdown */}
          <div className="relative">
            <img
              src={profile}
              alt="Profile"
              className="h-12 w-12 rounded-full object-cover cursor-pointer"
              onClick={toggleDropdown}
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div >
                <Link to="/landing" className="flex justify-center items-center absolute right-0 mt-2 w-30 px-4 bg-white border-0 rounded shadow-md z-10">
                  <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#374151",}} />
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left ml-2 py-2 text-gray-700"
                >
                  Sign Out
                </button>
                </Link>
              </div>
            )}
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
