import React from "react";
import { useEffect } from "react";
import { useHackathons } from "../context/HackathonContext";
import { IoIosLink } from "react-icons/io";
import axios from "axios";
const HackathonCard = () => {
  const { hackathons, setHackathons } = useHackathons();
  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/addHackathon"
        );
        setHackathons(response.data); // Save data into context
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchHackathons();
  }, [setHackathons]);
  return (
    <div>
      {hackathons.length === 0 ? (
        <div className="text-center text-gray-600 font-semibold text-xl mt-10">
          💻 Hackathons will be added soon. Stay tuned!
        </div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-6 font-reddit">
          {hackathons.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="flex flex-row justify-between align-middle items-center">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold ">{event.eventName}</h2>
                  <p className="text-sm font-medium text-footer">
                    {event.organizerName}
                  </p>
                </div>
                <div className="bg-gray-200 rounded-2xl p-2 cursor-pointer">
                  <IoIosLink className=" text-xl" />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-1">
                <p className="font-bold text-sm text-footer">THEME</p>
                <div className="flex flex-row justify-between align-middle items-center">
                  <div className="border-2 border-footerText rounded-xl w-fit p-2">
                    {event.theme}
                  </div>
                  <div className="text-blue-500 text-xl font-medium">
                    +{event.expectedParticipants}participating
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between align-middle items-center mt-6">
                <div className="flex flex-row gap-2">
                  <div className="bg-gray-200 rounded-xl w-fit p-2">
                    {event.status}
                  </div>
                  <div
                    className={`rounded-xl text-center w-fit p-2 font-bold ${
                      event.registration
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {event.registration ? "OPEN" : "CLOSED"}
                  </div>
                  <div className="bg-gray-200 rounded-xl w-fit p-2">
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <button className="cursor-pointer bg-button py-2 px-4 rounded-xl text-white hover:bg-buttonHover">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HackathonCard;
