import React, { useState } from "react";
import EventManagement from "../image/EventManagement.gif";
import { useEvents } from "../context/EventContext";
const EventForm = () => {
  const {addEvent} = useEvents();
  const [formData, setformData] = useState({
    eventName: "",
    organizerName: "",
    date: "",
    location: "",
    description: "",
    email: "",
  });
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setformData({
      eventName: "",
      organizerName: "",
      date: "",
      location: "",
      description: "",
      email: "",
    });
    return (
      <div>hfhfh</div>
    )
  };
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-4 px-14 overflow-hidden">
      <h2 className="tracking-[1em] font-krona text-center ">EVENTPULSE</h2>
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
