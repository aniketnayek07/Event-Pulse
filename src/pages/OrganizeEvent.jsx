import React, { useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import EventManagement from "../image/EventManagement.gif";
import { IoMdClose } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const OrganizeEvent = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const navigate = useNavigate();
  const isOpen = () => {
    setisModalOpen(true);
  };
  const isCLose = () => {
    setisModalOpen(false);
  };
  const handleEventClick = () => {
    navigate("/OrganizeEvent/Eventform");
  };
  return (
    <div className="w-full h-screen  bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-8 px-14 ">
      <div className="w-full flex justify-center align-middle items-center ">
        <h1
          className="cursor-pointer tracking-[1em] font-krona"
          onClick={() => navigate("/")}
        >
          EVENT PULSE
        </h1>
      </div>
      <div className="w-full flex justify-between align-middle items-center mt-10  font-reddit">
        <div className="w-screen bg-background rounded-2xl px-8 py-14 flex flex-row justify-between ">
          <div className="w-1/2 flex flex-col justify-center align-middle items-center">
            <div className="max-w-xl text-center flex flex-col gap-6 ">
              <h1 className="font-bold text-4xl">Organize an Event !</h1>
              <p className="text-gray-700 text-2xl font-medium">
                The only thing that can match the thrill of attending a
                hackathon or event is the exhilaration of organizing one
                yourself! Join 100s of other hackathons/events on EventPulse and
                manage your applications, submissions, comms, reimbursements,
                and judging, all on our platform.
              </p>
              <button
                className="cursor-pointer w-full font-medium text-2xl text-white border-none bg-button py-4 rounded-xl hover:bg-buttonHover"
                onClick={() => setisModalOpen(true)}
              >
                Organize your event on EventPulse
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center align-middle items-center">
            <img src={EventManagement} alt="event" className="w-[0.8] h-96" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col text-xl font-medium text-gray-300 ">
        Follow Us On
        <div className="flex flex-row gap-4 text-xl">
          <FaInstagramSquare />
          <BsDiscord />
          <IoLogoLinkedin />
          <IoLogoYoutube />
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-backgroundModal rounded-lg shadow-xl max-w-3xl w-full p-6 absolute">
            <button
              className="cursor-pointer absolute top-4 right-4 text-center text-red-500 text-2xl"
              onClick={isCLose}
            >
              <IoMdClose />
            </button>
            <div className="flex flex-col gap-4 font-reddit m-4">
              <div>
                <p className="text-xl font-medium text-gray-700">Great!</p>
                <h1 className="text-3xl font-bold">
                  Select the kind of event you want in your college
                </h1>
              </div>

              <div className=" w-full flex flex-row justify-between items-center align-middle gap-2 ">
                <div className="w-1/2 border-2 border-gray-700 rounded-2xl p-3">
                  <p className="text-xl font-medium">For College Events</p>
                  <div className="flex flex-col gap-2  mt-4 text-gray-700 ">
                    <div className="flex flex-row gap-4 align-middle items-center">
                      <MdOutlineWorkspacePremium className="text-xl" />
                      <p>Enjoy all premimum features.</p>
                    </div>
                    <div className="flex flex-row gap-4 align-middle items-center">
                      <MdOutlineEmojiEvents className="text-xl" />
                      <p>Create any event.</p>
                    </div>
                    <div className="flex flex-row gap-4 align-middle items-center">
                      <IoBagOutline className="text-xl" />
                      <p>Cool gifts for organizers and winners.</p>
                    </div>
                    <div className="flex flex-row gap-4 align-middle items-center">
                      <MdOutlineEmojiEvents className="text-xl" />
                      <p>Join any Event.</p>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer w-full p-3 rounded-xl text-white font-medium mt-4 bg-button hover:bg-buttonHover"
                    onClick={handleEventClick}
                  >
                    Start Event Setup
                  </button>
                </div>
                <div className="w-1/2 border-2 border-gray-700 rounded-2xl p-3">
                  <p className="text-xl font-medium">For Hackathons</p>
                  <div className="flex flex-col gap-2  mt-4 text-gray-700 ">
                    <div className="flex flex-row gap-4 align-middle items-center">
                      <MdOutlineWorkspacePremium className="text-xl" />
                      <p>Enjoy all premimum features.</p>
                    </div>
                    <div className="flex flex-row gap-4 align-middle items-center">
                      <MdOutlineEmojiEvents className="text-xl" />
                      <p>Create any hackathon.</p>
                    </div>
                    <div className="flex flex-row gap-4 align-middle items-center">
                      <IoBagOutline className="text-xl" />
                      <p>Cool gifts for organizers and winners.</p>
                    </div>
                    <div className="flex flex-row gap-4 align-middle items-center">
                      <MdOutlineEmojiEvents className="text-xl" />
                      <p>Join any hackathon.</p>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer w-full p-3 rounded-xl text-white font-medium mt-4 bg-button hover:bg-buttonHover"
                    onClick={() => navigate("/OrganizeEvent/Hackathonform")}
                  >
                    Start Hackathon Setup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizeEvent;
