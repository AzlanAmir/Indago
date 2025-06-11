import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/indago-logo.png"; // Adjust the path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {

  return (
    <div className="h-screen flex bg-gray-50">
      <div className="w-64 bg-white shadow-lg flex flex-col justify-between">
        <div>
          <div className="flex items-center mt-3 p-6 space-x-3">
            <img src={logo} alt="Logo" className="h-8 w-12" />
            <span className="text-2xl font-bold text-[#1746C7]">Indago</span>
          </div>
          <nav className="mt-25 flex flex-col space-y-10 px-6">
            <div className="group hover:bg-gray-100 p-2 rounded">
              <Link to="/home">
                <button className="text-left text-gray-700 group-hover:text-[#1746C7] font-medium flex items-center gap-4">
                  <FontAwesomeIcon icon={faHome} className="text-gray-600 group-hover:text-[#1746C7]" />
                  Home
                </button>
              </Link>
            </div>

            <div className="group hover:bg-gray-100 p-2 rounded">
              <Link to="/alljobs">
                <button className="text-left text-gray-700 group-hover:text-[#1746C7] font-medium flex items-center gap-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 group-hover:text-[#1746C7]" />
                  All Jobs
                </button>
              </Link>
            </div>

            <div className="group hover:bg-gray-100 p-2 rounded">
              <Link to="/addjob">
                <button className="text-left text-gray-700 group-hover:text-[#1746C7] font-medium flex items-center gap-4">
                  <FontAwesomeIcon icon={faPlus} className="text-gray-600 group-hover:text-[#1746C7]" />
                  Add Job
                </button>
              </Link>
            </div>


            <div className="group hover:bg-gray-100 p-2 rounded">
              <Link to="/profile">
                <button className="text-left text-gray-700 group-hover:text-[#1746C7] font-medium flex items-center gap-4">
                  <FontAwesomeIcon icon={faUser} className="text-gray-600 group-hover:text-[#1746C7]" />
                  Profile
                </button>
              </Link>
            </div>
          </nav>
        </div>

        {/* Logout */}
        {/* <div className=" flex mr-10 mb-10 ml-7 group bg-red-50 hover:bg-red-100 p-2 rounded">
          <Link to="/logout">
            <button className=" text-red-300 group flex items-center gap-4"><FontAwesomeIcon icon={faRightFromBracket} className="text-red-300"
            />Logout</button>
          </Link>
        </div> */}



      </div>

      {/* Main Content */}

    </div>
  );
}

export default Sidebar;
