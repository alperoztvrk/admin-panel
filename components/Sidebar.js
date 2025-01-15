import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaList, FaUserAlt, FaMoon, FaSun } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); 
  const [darkMode, setDarkMode] = useState(false); 

  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white shadow-lg`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4">
          <div className={`${isOpen ? 'block' : 'hidden'} text-white text-2xl font-bold`}>
            Admin Panel
          </div>
          <button onClick={toggleSidebar} className="text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col items-start px-4 mt-8 space-y-4">
          <div className="flex items-center cursor-pointer p-3 rounded-md hover:bg-gray-700 transition duration-200">
            <FaHome className="mr-3 text-xl" />
            <span className={`${isOpen ? 'block' : 'hidden'} text-white`}>Dashboard</span>
          </div>
          <div className="flex items-center cursor-pointer p-3 rounded-md hover:bg-gray-700 transition duration-200">
            <FaUser className="mr-3 text-xl" />
            <span className={`${isOpen ? 'block' : 'hidden'} text-white`}>Users</span>
          </div>
          <div className="flex items-center cursor-pointer p-3 rounded-md hover:bg-gray-700 transition duration-200">
            <FaList className="mr-3 text-xl" />
            <span className={`${isOpen ? 'block' : 'hidden'} text-white`}>Transactions</span>
          </div>
          <div className="flex items-center cursor-pointer p-3 rounded-md hover:bg-gray-700 transition duration-200">
            <FaCog className="mr-3 text-xl" />
            <span className={`${isOpen ? 'block' : 'hidden'} text-white`}>Settings</span>
          </div>
          <div className="flex items-center cursor-pointer p-3 rounded-md hover:bg-gray-700 transition duration-200">
            <FaUserAlt className="mr-3 text-xl" />
            <span className={`${isOpen ? 'block' : 'hidden'} text-white`}>Profile</span>
          </div>

          {/* Dark/Light Mode Toggle */}
          <div
            onClick={toggleDarkMode}
            className="flex items-center cursor-pointer p-3 rounded-md hover:bg-gray-700 transition duration-200"
          >
            {darkMode ? (
              <FaSun className="mr-3 text-xl" />
            ) : (
              <FaMoon className="mr-3 text-xl" />
            )}
            <span className={`${isOpen ? 'block' : 'hidden'} text-white`}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex-grow ml-${isOpen ? '64' : '20'} transition-all duration-300 ease-in-out`}>
        <div className="p-4">
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
