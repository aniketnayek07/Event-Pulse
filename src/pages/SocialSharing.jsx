import { useEvents } from "../context/EventContext";
import { useHackathons } from "../context/HackathonContext";
import { IoIosLink } from "react-icons/io";
import { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import axios from "axios";
import EventSocials from "../image/EventSocials.png";
import { useNavigate } from "react-router-dom";
const SocialSharing = () => {
  const navigate = useNavigate();
  const [Eventliked, setEventLiked] = useState(false);
  const [Eventdisliked, setEventDisliked] = useState(false);
  const [Hackathonliked, setHackathonLiked] = useState(false);
  const [Hackathondisliked, setHackathonDisliked] = useState(false);
  const handleEventLike = () => {
    setEventLiked(!Eventliked);
    if (Eventdisliked) setEventDisliked(false);
  };

  const handleEventDislike = () => {
    setEventDisliked(!Eventdisliked);
    if (Eventliked) setEventLiked(false);
  };
  const handleHackathonLike = () => {
    setHackathonLiked(!Hackathonliked);
    if (Hackathondisliked) setHackathonDisliked(false);
  };

  const handleHackathonDislike = () => {
    setHackathonDisliked(!Hackathondisliked);
    if (Hackathonliked) setHackathonLiked(false);
  };
  const { events, setEvents } = useEvents();
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
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/active-events"
        );
        setEvents(response.data); // Save data into context
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [setEvents]);
  return (
    <div className="w-full min-h-screen justify-center items-center align-middle bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-8 px-14">
      <div className="w-full flex justify-center align-middle items-center">
        <h1
          className="cursor-pointer tracking-[1em] font-krona text-black text-xl"
          onClick={() => navigate("/")}
        >
          EVENT PULSE
        </h1>
      </div>
      <div className="w-full p-4 flex flex-col gap-6 mt-10 rounded-xl bg-background">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative w-full bg-[#093966]/60 text-white rounded-2xl shadow-xl overflow-hidden mx-auto"
          >
            <img
              src={EventSocials}
              alt="Event Banner"
              className="w-full h-64 object-cover opacity-60"
            />
            <div className="absolute top-4 left-4 bg-[#D9D9D9]/70 text-black px-4 py-1 rounded-full text-2xl font-bold shadow">
              {new Date(event.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center align-middle gap-4 space-y-2">
              <div className="bg-[#D9D9D9]/70 text-black px-6 py-2 rounded-full font-bold text-4xl shadow">
                {event.eventName}
              </div>
              <div className="w-fit bg-[#D9D9D9]/70 text-black px-4 py-1 rounded-full text-2xl shadow">
                <p className="font-bold">
                  Organizer Name :{" "}
                  <span className="font-medium">{event.organizerName}</span>{" "}
                </p>{" "}
              </div>
              <div className="text-3xl font-semibold mt-2">
                THEME : {event.theme}
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={handleEventLike}
                className={`p-2 rounded-full shadow hover:scale-105 transition ${
                  Eventliked ? "bg-green-500 text-white" : "bg-white text-black"
                }`}
              >
                <BiLike className="cursor-pointer w-5 h-5" />
              </button>
              <button
                onClick={handleEventDislike}
                className={`p-2 rounded-full shadow hover:scale-105 transition ${
                  Eventdisliked
                    ? "bg-red-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <BiDislike className="cursor-pointer w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
        {hackathons.map((event, index) => (
          <div
            key={index}
            className="relative w-full bg-[#553DC4]/57 text-white rounded-2xl shadow-xl overflow-hidden mx-auto"
          >
            <img
              src={EventSocials}
              alt="Event Banner"
              className="w-full h-64 object-cover opacity-60"
            />
            <div className="absolute top-4 left-4 bg-[#D9D9D9]/70 text-black px-4 py-1 rounded-full text-2xl font-bold shadow">
              {new Date(event.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center align-middle gap-1 space-y-2">
              <div className="bg-[#D9D9D9]/70 text-black px-6 py-2 rounded-full font-bold text-4xl shadow">
                {event.eventName}
              </div>
              <div className="w-fit bg-[#D9D9D9]/70 text-black px-4 py-1 rounded-full text-2xl shadow">
                <p className="font-bold">
                  Organizer Name :{" "}
                  <span className="font-medium">{event.organizerName}</span>{" "}
                </p>{" "}
              </div>

              <div className="text-3xl font-semibold mt-2">
                THEME : {event.theme}
              </div>
              <div className=" text-3xl font-semibold mt-2">
                <span
                  className={`rounded-xl text-center w-fit p-2 font-bold ${
                    event.registration
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {event.registration ? "OPEN" : "CLOSED"}
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={handleHackathonLike}
                className={`p-2 rounded-full shadow hover:scale-105 transition ${
                  Hackathonliked
                    ? "bg-green-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <BiLike className="cursor-pointer w-5 h-5" />
              </button>
              <button
                onClick={handleHackathonDislike}
                className={`p-2 rounded-full shadow hover:scale-105 transition ${
                  Hackathondisliked
                    ? "bg-red-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <BiDislike className="cursor-pointer w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialSharing;
