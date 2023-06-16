import React from "react";
import icon from "./assets/icon.jpg";
import hamburger from "./assets/hamburger.png";

const NavBar = () => {
  return (
    <div className="grid grid-flow-col shadow-sm ">
      <div className="flex col-span-2">
        <img className="w-10 p-2 m-2" src={hamburger} alt="hamburger" />
        <img className="w-28 " src={icon} alt="icon image" />
      </div>
      <div></div>
      <div className="col-span-6 m-4">
        <input className=" text-center border-2 border-gray-300 rounded-l-full"></input>
        <button className="border-2 border-gray-300 rounded-r-full ">search</button>
      </div>
    </div>
  );
};

export default NavBar;
