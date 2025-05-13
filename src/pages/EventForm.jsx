import React, { useState } from "react";
import EventManagement from "../image/EventManagement.gif";
import { useEvents } from "../context/EventContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const EventForm = () => {
  const navigate = useNavigate();
  const { addEvent } = useEvents();
  const [formData, setformData] = useState({
    eventName: "",
    organizerName: "",
    date: "",
    location: "",
    description: "",
    email: "",
    theme: "",
    // expectedParticipants: "",
    // status: "Online",
    // registration: "Open",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/events", formData);
      navigate("/OrganizeEvent/Eventform/ThankYou");
    } catch (error) {
      console.error("Failed to submit event", error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-4 px-14 ">
      <h2
        className="cursor-pointer tracking-[1em] font-krona text-center "
        onClick={() => navigate("/")}
      >
        EVENTPULSE
      </h2>
      <div className="w-full  flex flex-row justify-between align-middle items-center ">
        <div className="w-1/2 mt-6">
          <form
            className="space-y-4 bg-background p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-12 font-reddit"
            onSubmit={handleSubmit}
          >
            <h2 className=" font-bold text-center text-xl">
              Organize An Event
            </h2>
            <label className="font-medium flex flex-col gap-1">
              Event
              <input
                name="eventName"
                placeholder="Event Name"
                value={formData.eventName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </label>
            <label className="font-medium flex flex-col gap-1">
              Organizer Name
              <input
                name="organizerName"
                placeholder="Organizer Name"
                value={formData.organizerName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </label>
            <label className="font-medium flex flex-col gap-1">
              Date
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </label>
            <label className="font-medium flex flex-col gap-1">
              Location
              <input
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </label>
            <label className="font-medium flex flex-col gap-1">
              Description
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </label>
            <label className="font-medium flex flex-col gap-1">
              Email Address
              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </label>
            {/* <div className="grid grid-cols-2 gap-4 mb-4"> */}
            {/* <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Theme
                </label>
                <select
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="NO RESTRICTIONS">NO RESTRICTIONS</option>
                  <option value="AI/ML">AI/ML</option>
                  <option value="FINTECH">FINTECH</option>
                  <option value="HEALTH">HEALTH</option>
                  <option value="EDUCATION">EDUCATION</option>
                </select>
              </div> */}
            <label className="font-medium flex flex-col gap-1">
              Theme
              <input
                name="theme"
                placeholder="Theme"
                value={formData.theme}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </label>
            {/* <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Expected Participants
                </label>
                <input
                  type="number"
                  name="expectedParticipants"
                  value={formData.expectedParticipants}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div> */}
            {/* </div> */}

            {/* <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="OFFLINE">OFFLINE</option>
                  <option value="ONLINE">ONLINE</option>
                  <option value="HYBRID">HYBRID</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Registration
                </label>
                <select
                  name="registration"
                  value={formData.registration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value={true}>OPEN</option>
                  <option value={false}>CLOSED</option>
                </select>
              </div>
            </div> */}
            <button
              type="submit"
              className="w-full bg-button text-white py-2 rounded hover:bg-buttonHover"
            >
              Submit Event
            </button>
          </form>
        </div>
        <div className="w-1/2">
          <img src={EventManagement} alt="event" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default EventForm;
