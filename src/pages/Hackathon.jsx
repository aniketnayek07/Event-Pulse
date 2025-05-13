import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import HackathonPage from "../image/HackathonPage.png";
const Hackathon = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-8 px-14">
      <div className="w-full flex  justify-center align-middle items-center ">
        <h1
          className="cursor-pointer tracking-[1em] font-krona"
          onClick={() => navigate("/")}
        >
          EVENT PULSE
        </h1>
      </div>
      <div className="h-fit w-full p-10 mt-10 bg-background rounded-xl shadow-xl flex flex-row justify-between items-center align-middle font-reddit ">
        <div className="w-1/2 flex flex-col">
          <h1 className="text-5xl font-bold">Join and Build Events</h1>
          <p className="mt-4 font-bold text-xl text-gray-700">
            Build. Innovate. Win. With EventPulse
          </p>
          <p className="mt-4 text-xl text-gray-700">
            Join us for an unforgettable experience filled with innovation,
            learning, and collaboration! Be a part of our exciting events where
            you can showcase your skills, connect with industry experts, and win
            amazing prizes. Enjoy exclusive workshops, personalized mentorship,
            and a vibrant community of passionate builders. Don’t miss the
            chance to turn your ideas into reality — register now and embark on
            a journey of growth and success!
          </p>
          <button
            className="cursor-pointer mt-8 px-6 py-3 text-xl font-bold bg-button text-white rounded-full hover:bg-buttonHover"
            onClick={() => navigate("/JoinEvent")}
          >
            Explore Event
          </button>
        </div>
        <div className=" text-center ">
          <img src={HackathonPage} alt="enjoy" className="w-[0.8] h-96" />
        </div>
      </div>
      <div className="fixed bottom-4 right-8 flex flex-col  gap-2 text-footerText">
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

export default Hackathon;
