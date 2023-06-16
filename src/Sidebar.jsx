import React from "react";


const Sidebar = () => {
  return (
    <div className=" ">
      <div className="col-span-5 bg-gray-200 p-4 h-screen shadow-md">
        {/* Sidebar content */}
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-gray-700">Home</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-gray-700">Trending</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-gray-700">Subscriptions</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

