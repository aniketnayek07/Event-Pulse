import React, { useEffect } from "react";
import { useHackathons } from "../context/HackathonContext";
import { IoIosLink } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HackathonCard = () => {
  const navigate = useNavigate();
  const { hackathons, setHackathons } = useHackathons();

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/addHackathon"
        );
        setHackathons(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchHackathons();
  }, [setHackathons]);

  const isToday = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return (
      eventDate.getDate() === today.getDate() &&
      eventDate.getMonth() === today.getMonth() &&
      eventDate.getFullYear() === today.getFullYear()
    );
  };

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
              {/* Header: Event Name + Link */}
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold">{event.eventName}</h2>
                  <p className="text-sm font-medium text-footer">
                    {event.organizerName}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div
                    className="bg-gray-200 rounded-2xl p-2 cursor-pointer"
                    onClick={() => navigate(`/HackathonInfo/${event._id}`)}
                  >
                    <IoIosLink className="text-xl" />
                  </div>
                  {isToday(event.date) && (
                    <span className="ml-1 px-2 py-0.5 bg-red-600 text-white rounded text-xs animate-pulse">
                      LIVE
                    </span>
                  )}
                </div>
              </div>

              {/* Theme & Participants */}
              <div className="mt-6 flex flex-col gap-1">
                <p className="font-bold text-sm text-footer">THEME</p>
                <div className="flex flex-row justify-between items-center">
                  <div className="border-2 border-footerText rounded-xl w-fit p-1">
                    {event.theme}
                  </div>
                  <div className="text-blue-500 text-xl font-medium">
                    +{event.expectedParticipants} participating
                  </div>
                </div>
              </div>

              {/* Status Row */}
              <div className="flex flex-row justify-center items-center gap-2 mt-6">
                <div className="bg-gray-200 rounded-xl w-fit p-2">
                  {event.status}
                </div>
                <div
                  className={`rounded-xl text-center w-fit p-2 font-bold ${
                    isToday(event.date) || !event.registration
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {isToday(event.date) || !event.registration
                    ? "CLOSED"
                    : "OPEN"}
                </div>

                {/* Date + LIVE Tag if Today */}
                <div className="bg-gray-200 rounded-xl w-fit p-1 text-center flex items-center gap-2">
                  {new Date(event.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>

                {/* Apply Button */}
                <button
                  className={`py-1 px-6 rounded-xl text-white font-medium ${
                    isToday(event.date)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-button hover:bg-buttonHover cursor-pointer"
                  }`}
                  onClick={() => {
                    if (!isToday(event.date)) {
                      navigate("/ApplyHackathon");
                    }
                  }}
                  disabled={isToday(event.date)}
                >
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
