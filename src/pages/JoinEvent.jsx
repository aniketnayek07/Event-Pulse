import { useState } from "react";
import EventCard from "./EventCard";
import HackathonCard from "./HackathonCard";
import { useNavigate } from "react-router-dom";
const JoinEvent = () => {
  const [activeTab, setActiveTab] = useState("Events");
  const navigate = useNavigate();
  const tabs = ["Events", "Hackathons"];

  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-8 px-14 ">
      <div className="w-full  flex justify-center align-middle items-center ">
        <h1
          className="cursor-pointer tracking-[1em] font-krona"
          onClick={() => {
            navigate("/");
          }}
        >
          EVENT PULSE
        </h1>
      </div>
      <div className="p-8">
        <div className="flex  space-x-4 p-2 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md font-semibold transition ${
                activeTab === tab
                  ? "bg-button text-white border-2 border-green-400"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 bg-background w-full h-fit rounded-xl p-8 shadow-xl">
          {activeTab === "Events" && <EventCard />}
          {activeTab === "Hackathons" && <HackathonCard />}
        </div>
      </div>
    </div>
  );
};

export default JoinEvent;
