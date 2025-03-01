import React from "react";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="w-full py-4 font-krona flex flex-row justify-between align-middle items-center px-10 ">
      <div className="flex flex-row gap-10 justify-items-start ">
        <link rel="stylesheet" href="" /><p className="cursor-pointer ">About</p>
        <p className="cursor-pointer ">Features</p>
        <p className="cursor-pointer ">Pricing</p>
      </div>
      <div className="w-[60%] flex flex-row justify-between align-middle items-center">
        <h2 className="tracking-[1em] ">EVENTPULSE</h2>
        <FaUserCircle className="text-4xl " />
      </div>
    </div>
  );
};

export default Navbar;
