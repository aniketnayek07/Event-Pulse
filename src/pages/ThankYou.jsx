import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-8 px-14 ">
      <h2
        className="cursor-pointer tracking-[1em] font-krona text-center"
        onClick={() => navigate("/")}
      >
        EVENTPULSE
      </h2>
      <div className="flex flex-col justify-center align-middle items-center gap-6 mt-20 ">
        <p className="text-6xl">👍</p>
        <h1 className="text-4xl font-reddit">Thank You!!</h1>
        <p className="text-xl text-center">
          Your event has been successfully submitted.
          <br />
          We’ll be contacting you shortly!
        </p>
        <div className="flex flex-row justify-between align-middle items-center gap-4">
          <button
            className="cursor-pointer w-full  bg-button hover:bg-buttonHover p-4 font-reddit text-white rounded-xl shadow-xl font-medium"
            onClick={() => navigate("/JoinEvent")}
          >
            Explore events
          </button>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col  gap-2 text-footerText">
        <h1 className="font-bold font-reddit">FOLLOW US ON</h1>
        <div className="flex flex-row gap-4  text-xl">
          <FaInstagramSquare />
          <BsDiscord />
          <IoLogoLinkedin />
          <IoLogoYoutube />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
