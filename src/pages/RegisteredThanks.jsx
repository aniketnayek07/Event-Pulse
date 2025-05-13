import React from "react";
import { useNavigate } from "react-router-dom";
const RegisteredThanks = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-8 px-14 overflow-hidden font-reddit">
      <div className="w-full  flex justify-center align-middle items-center ">
        <h1
          className="cursor-pointer tracking-[1em] font-krona"
          onClick={() => navigate("/")}
        >
          EVENT PULSE
        </h1>
      </div>
      <div className="h-fit w-full p-10 mt-10 gap-3 bg-background rounded-xl shadow-xl flex flex-col justify-between items-center align-middle font-reddit ">
        <p className="text-6xl">👍</p>
        <h1 className="text-5xl mt-4 font-bold">Thank You!</h1>
        <p className="mt-4 text-xl text-gray-700 text-center">
          Thank you for registering! We will notify you via email about the
          status of your application.
        </p>
      </div>
    </div>
  );
};

export default RegisteredThanks;
