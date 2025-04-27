import React from "react";
import heroImg from "../image/heroImg.gif";
import Clubs from "../image/Clubs.png";
import Hackathon from "../image/Hackathon.png";
import Event from "../image/Event.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleOrganizeClick = () => {
    navigate("/OrganizeEvent");
  };
  return (
    <>
      <div className="flex justify-center align-middle items-center mt-4 font-reddit px-10">
        <div className=" w-screen bg-background rounded-2xl px-8 py-14 flex flex-row justify-between">
          <div className="flex flex-col justify-between mt-4 ">
            <h3 className="text-4xl ">
              Smarter <b>Management ,</b>
            </h3>
            <h3 className="text-4xl">
              Effortless <b>Events .</b>
            </h3>

            <p className="text-xl">
              A smart, data-driven event management system with QR-based
              tracking, real-time <br /> monitoring, automation, efficiency and
              engagement
            </p>
            <div className="flex flex-row gap-2 w-full ">
              <button
                className="cursor-pointer w-[30%] p-2 bg-[#7266AA] flex flex-row justify-around align-middle items-center text-xl text-white font-medium rounded-2xl hover:bg-buttonHover"
                onClick={handleOrganizeClick}
              >
                Organize Event <FaLongArrowAltRight />
              </button>
              <button
                className="cursor-pointer w-[30%] p-2 bg-[#7266AA] flex flex-row justify-around align-middle items-center text-xl text-white font-medium rounded-2xl hover:bg-buttonHover"
                onClick={() => navigate("/JoinEvent")}
              >
                Join Any Event <FaLongArrowAltRight />
              </button>
            </div>
          </div>
          <img src={heroImg} alt="GIFS" className="w-64 h-64" />
        </div>
      </div>

      <div className="w-full flex flex-row gap-4  mt-4 font-reddit px-10">
        <div
          className=" w-1/3 h-64 bg-auto bg-center rounded-2xl px-8 py-4 cursor-pointer "
          style={{ backgroundImage: `url(${Event})` }}
          onClick={() => navigate("/Events")}
        >
          <div className="flex flex-row justify-between align-middle items-center">
            <div className=" w-1/4 p-1 rounded-2xl text-xl bg-innerbg text-center font-medium">
              <p>Events</p>
            </div>
            <HiMiniArrowTopRightOnSquare
              className="cursor-pointer text-3xl hover:text-gray-500"
              onClick={() => navigate("/Events")}
            />
          </div>
          <div className="w-full bg-innerbg text-center rounded-xl font-medium p-8 mt-8 text-xl">
            <p>
              Join events seamlessly with smart recommendations, instant
              check-ins, and real-time updates!
            </p>
          </div>
        </div>

        <div
          className="w-1/3 h-64 bg-auto bg-center rounded-2xl px-8 py-4"
          style={{ backgroundImage: `url(${Hackathon})` }}
        >
          <div className="flex flex-row justify-between align-middle items-center">
            <div className=" w-1/4 p-1.5 rounded-2xl text-xl bg-innerbg text-center font-medium">
              <p>Hackathon</p>
            </div>
            <HiMiniArrowTopRightOnSquare className="cursor-pointer text-3xl hover:text-gray-500" />
          </div>
          <div className="w-full bg-innerbg text-center rounded-xl font-medium p-8 mt-8 text-xl">
            <p>
              A tech-driven competition fostering innovation, collaboration, and
              real-time event management .
            </p>
          </div>
        </div>

        <div
          className="w-1/3 h-64 bg-auto bg-center rounded-2xl px-8 py-4"
          style={{ backgroundImage: `url(${Clubs})` }}
        >
          <div className="flex flex-row justify-between align-middle items-center">
            <div className=" w-1/4 p-1 rounded-2xl text-xl bg-innerbg text-center font-medium">
              <p>Clubs</p>
            </div>
            <HiMiniArrowTopRightOnSquare className="cursor-pointer text-3xl hover:text-gray-500" />
          </div>
          <div className="w-full bg-innerbg text-center rounded-xl font-medium p-8 mt-8 text-xl">
            <p>
              Community-driven hubs for seamless event organization, engagement,
              and collaboration .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
