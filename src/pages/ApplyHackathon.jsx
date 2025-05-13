import React, { useState } from "react";
import About from "../components/About";
import Education from "../components/Education";
import Links from "../components/Links";
import Contacts from "../components/Contacts";
import { useNavigate } from "react-router-dom";
const ApplyHackathon = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("About");
  const Tabs = ["About", "Education", "Links", "Contacts"];
  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-8 px-14 overflow-hidden">
      <div className="w-full  flex justify-center align-middle items-center ">
        <h1 className="cursor-pointer tracking-[1em] font-krona" onClick={() => navigate("/")}>EVENT PULSE</h1>
      </div>
      <div className="p-8 ">
        <div className="flex justify-center align-middle items-center  space-x-4 p-2 rounded-lg">
          {Tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-6 py-2 rounded-md font-semibold transition ${
                activeTab === tab
                  ? "bg-button text-white border-2 border-green-400"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="w-full h-fit flex justify-center items-center  align-middle bg-background rounded-xl p-8 shadow-xl mt-10">
          {activeTab === "About" && <About setActiveTab={setActiveTab} />}
          {activeTab === "Education" && (
            <Education setActiveTab={setActiveTab} />
          )}
          {activeTab === "Links" && <Links setActiveTab={setActiveTab} />}
          {activeTab === "Contacts" && <Contacts setActiveTab={setActiveTab} />}
        </div>
      </div>
    </div>
  );
};

export default ApplyHackathon;
