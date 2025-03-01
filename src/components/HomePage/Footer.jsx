import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <div className="w-full bg-footer mt-14 px-38 h-fit font-krona text-footerText flex flex-col gap-6 py-8">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col justify-baseline gap-2">
          <p className="tracking-[1em] text-sm ">EVENTPULSE</p>
          <p className="text-sm">
            Smart, Seamless, and Data-Driven Event Management <br /> for
            Effortless Experiences!
          </p>
          <div className="flex flex-row justify-baseline align-middle items-center gap-2">
            <IoLocationSharp className="text-2xl" />
            <p className="text-sm">
              Trinity Institute Of Innovations In Professional Studies, <br />
              Greater Noida,Uttar Pradesh
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1>FOLLOW US ON</h1>
          <div className="flex flex-row gap-4 justify-center align-middle items-center text-xl">
            <FaInstagramSquare />
            <BsDiscord />
            <IoLogoLinkedin />
            <IoLogoYoutube />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-center align-middle items-center text-sm">
        <p>@ COPYRIGHT 2025 || ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
