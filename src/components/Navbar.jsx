import React from "react";
import { FaUserCircle } from "react-icons/fa";
import LoginButton from "./LoginButton";
const Navbar = () => {
  return (
    <div className="w-full py-4 font-krona flex flex-row justify-between align-middle items-center px-10 ">
      <div className="flex flex-row gap-10 justify-items-start ">
        <a href="#about" className="cursor-pointer hover:bg-background rounded-md w-fit p-1">
          About
        </a>
        <a href="#features" className="cursor-pointer hover:bg-background rounded-md w-fit p-1 ">
          Features
        </a>
        <a href="#pricing" className="cursor-pointer hover:bg-background rounded-md w-fit p-1 ">
          Pricing
        </a>
      </div>
      <div className="w-[60%] flex flex-row justify-between align-middle items-center">
        <h2 className="tracking-[1em] ">EVENTPULSE</h2>
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
