import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import HackathonInfoimg from "../image/HackathonInfoimg.png";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { LiaAffiliatetheme } from "react-icons/lia";

const HackathonInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [hackathon, setHackathon] = useState({});
  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [liveAttendees, setLiveAttendees] = useState(0);

  const isToday = (dateString) => {
    const today = new Date();
    const eventDate = new Date(dateString);
    return (
      today.getDate() === eventDate.getDate() &&
      today.getMonth() === eventDate.getMonth() &&
      today.getFullYear() === eventDate.getFullYear()
    );
  };

  useEffect(() => {
    const fetchEnrolled = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/enrolled/${params.eventId}`
        );
        setEnrolled(response.data.enrolled);
      } catch (error) {
        console.error("Error fetching enrolled status:", error);
      }
    };

    const interval = setInterval(fetchEnrolled, 30000);
    return () => clearInterval(interval);
  }, [params.eventId]);

  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/hackathonInfo/${params.eventId}`
        );
        setHackathon(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hackathon:", error);
      }
    };

    fetchHackathon();
  }, [params]);

  useEffect(() => {
    if (isToday(hackathon.date)) {
      const interval = setInterval(() => {
        setLiveAttendees((prev) => prev + Math.floor(Math.random() * 1) + 1);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [hackathon]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="min-h-screen bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-8 px-14 overflow-hidden">
      <div className="w-full flex justify-center items-center">
        <h1
          className="cursor-pointer tracking-[1em] font-krona"
          onClick={() => navigate("/")}
        >
          EVENT PULSE
        </h1>
      </div>

      <div className="h-fit w-full p-10 mt-10 gap-3 bg-background rounded-xl shadow-xl flex flex-row justify-between font-reddit">
        {/* Left Card */}
        <div className="w-[70%] h-fit flex flex-col border-2 border-black rounded-xl p-4 shadow-xl mt-10">
          <img src={HackathonInfoimg} alt="hackathon" />

          <div className="flex flex-col gap-2">
            <p className="mt-4 text-5xl font-bold text-black ">
              {hackathon.eventName}
            </p>
            <p className="text-xl font-medium text-black">
              {hackathon.organizerName}
            </p>

            {/* Live Badge + Count */}
            {isToday(hackathon.date) && (
              <div className="flex flex-row items-center gap-3 mt-2">
                <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-xl text-sm animate-pulse">
                  🔴 LIVE
                </span>
                <span className="text-black font-medium">
                  {liveAttendees} Attendees Live
                </span>
              </div>
            )}
          </div>

          <hr className="w-full mt-2" />
          <p className="text-2xl font-bold mt-4">Description</p>
          <p className="text-xl mt-2 font-medium text-black text-justify ">
            {hackathon.description}
          </p>
          <hr className="w-full mt-4" />

          <button
            className={`w-full p-4 text-white text-xl rounded-lg mt-4 transition duration-300 ${
              isToday(hackathon.date)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-button hover:bg-buttonHover cursor-pointer"
            }`}
            onClick={() =>
              !isToday(hackathon.date) && navigate("/ApplyHackathon")
            }
            disabled={isToday(hackathon.date)}
          >
            {isToday(hackathon.date)
              ? "Registration Closed Today"
              : "Register Now!"}
          </button>

          <p className="mt-4 text-xl text-center text-gray-700 ">
            {enrolled
              ? "You are enrolled in this hackathon"
              : "You are not enrolled in this hackathon"}
          </p>
        </div>

        {/* Right Card */}
        <div className="w-[30%] h-fit flex flex-col border-2 border-black rounded-xl p-4 shadow-xl mt-10">
          <p className="text-2xl font-bold">Event Details</p>
          <hr className="mt-2" />
          <div className="flex flex-col gap-2 mt-2">
            <div className="space-y-2 text-xl text-black mt-2">
              <div className="flex flex-row gap-2 items-center">
                <BsCalendarDateFill />
                <span className="font-bold mr-2">Event Date:</span>
                <span>
                  {new Date(hackathon.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <FaLocationDot />
                <span className="font-bold mr-2">Event Location:</span>
                <span>{hackathon.location}</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <span className="font-bold mr-2">Contact:</span>
                <span>{hackathon.email}</span>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <LiaAffiliatetheme />
                <span className="font-bold mr-2">Event Theme:</span>
                <span>{hackathon.theme}</span>
              </div>

              <button
                className={`w-full p-4 text-white text-xl rounded-lg mt-4 transition duration-300 ${
                  isToday(hackathon.date)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-button hover:bg-buttonHover cursor-pointer"
                }`}
                onClick={() =>
                  !isToday(hackathon.date) && navigate("/ApplyHackathon")
                }
                disabled={isToday(hackathon.date)}
              >
                {isToday(hackathon.date)
                  ? "Registration Closed Today"
                  : "Register Now!"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonInfo;
