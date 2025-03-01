import React from "react";
import { GoDotFill } from "react-icons/go";

const Pricing = () => {
  
  return (
    <>
      <div className="mt-14 text-4xl text-center font-krona font-bold px-14 ">
        PRICING
      </div>

      <div className="mt-14 w-full flex flex-row justify-center align-middle items-center gap-10 px-38 font-reddit text-white ">
        <div className="w-1/3 px-6 py-6  bg-[rgba(90,73,169,0.6)] rounded-2xl shadow-xl">
          <p className="text-xl font-medium font-krona">Free</p>
          <div className="flex flex-col justify-center gap-2 mt-6 font-medium text-gray-300 font-reddit">
            <p className="text-md ">Starts at</p>
            <div className="flex flex-row justify-baseline align-bottom items-end gap-6">
              <p className="text-4xl font-krona ">₹ 0/-</p>
              <p>
                <b>first event</b>
              </p>
            </div>
            <p className="text-md">
              Seamlessly host and join events for free with our smart event
              management app!
            </p>
          </div>
          <button className="w-full p-2 rounded-xl mt-6 bg-button cursor-pointer hover:bg-buttonHover">
            Get Started
          </button>
          <hr className="mt-6 text-gray-300" />
          <div className="text-gray-300 mt-6 flex flex-col justify-between">
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Qr Code Based Attendance</p>
            </div>
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Automated Certificate Generation</p>
            </div>
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Social Sharing Features</p>
            </div>
          </div>
        </div>

        <div className="w-1/3 px-6 py-6  bg-[rgba(71,40,117,0.8)] rounded-2xl shadow-xl">
          <p className="text-xl font-medium font-krona">Premium Plan</p>
          <div className="flex flex-col justify-center gap-2 mt-6 font-medium text-gray-300 font-reddit">
            <p className="text-md ">Starts at</p>
            <div className="flex flex-row justify-baseline align-bottom items-end gap-6">
              <p className="text-4xl font-krona ">₹ 2,000/-</p>
              <p>
                <b>per event</b>
              </p>
            </div>
            <p className="text-md">
              Unlock exclusive features with our premium plan, designed for
              seamless event management and enhanced engagement !
            </p>
          </div>
          <button className="w-full p-2 rounded-xl mt-6 bg-gradient-to-b from-[rgba(56,21,97,0.8)] to-[rgba(30,12,113,0.8)] cursor-pointer hover:bg-buttonHover">
            Get Started
          </button>
          <hr className="mt-6 text-gray-300" />
          <div className="text-gray-300 mt-6 flex flex-col justify-between">
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Qr Code Based Attendance</p>
            </div>
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Automated Certificate Generation</p>
            </div>
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Social Sharing Features</p>
            </div>
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Real Time Monitoring Feature</p>
            </div>
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Analytics Dashboard</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 px-6 py-6 h-fit bg-[rgba(90,73,169,0.6)] rounded-2xl shadow-xl">
          <p className="text-xl font-medium font-krona">Standard Plan</p>
          <div className="flex flex-col justify-center gap-2 mt-6 font-medium text-gray-300 font-reddit">
            <p className="text-md ">Starts at</p>
            <div className="flex flex-row justify-baseline align-bottom items-end gap-6">
              <p className="text-4xl font-krona ">₹ 1,500/-</p>
              <p>
                <b>per event</b>
              </p>
            </div>
            <p className="text-md">
              The Standard Plan offers essential features for seamless event
              management with enhanced efficiency!
            </p>
          </div>
          <button className="w-full p-2 rounded-xl mt-6 bg-button cursor-pointer hover:bg-buttonHover">
            Get Started
          </button>
          <hr className="mt-6 text-gray-300" />
          <div className="text-gray-300 mt-6 flex flex-col justify-between">
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Qr Code Based Attendance</p>
            </div>
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Automated Certificate Generation</p>
            </div>
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Social Sharing Features</p>
            </div>
            <div className="flex flex-row justify-baseline align-middle items-center gap-4">
              <GoDotFill className="text-gray-300 text-md" />
              <p className="text-md">Analytics Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
