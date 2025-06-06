import React, { useEffect } from "react";
import { useEvents } from "../context/EventContext";
import { IoIosLink } from "react-icons/io";
import axios from "axios";

const EventCard = () => {
  const { events, setEvents } = useEvents();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/active-events"
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [setEvents]);

  return (
    <div>
      {events.length === 0 ? (
        <div className="text-center text-gray-600 font-semibold text-xl mt-10">
          🎉 Events will be added soon. Stay tuned!
        </div>
      ) : (
        <div className="w-full h-fit grid grid-cols-3 gap-6 font-reddit">
          {events.map((event, index) => {
            const eventDate = new Date(event.date);
            const today = new Date();
            // Zero out the time part for accurate date-only comparison
            eventDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            const isFutureEvent = eventDate >= today;

            return (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{event.eventName}</h2>
                    <p className="text-sm font-medium text-footer">
                      {event.organizerName}
                    </p>
                  </div>
                  <div className="bg-gray-200 rounded-2xl p-2 cursor-pointer">
                    <IoIosLink className="text-xl" />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-1">
                  <p className="font-bold text-sm text-footer">THEME</p>
                  <div className="border-2 border-footerText rounded-xl w-fit p-2">
                    {event.theme}
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-6">
                  <div className="bg-gray-200 rounded-xl w-fit p-2">
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  {isFutureEvent ? (
                    <button className="cursor-pointer bg-button py-2 px-4 rounded-xl text-white hover:bg-buttonHover">
                      See Now !!
                    </button>
                  ) : (
                    <button
                      className="cursor-not-allowed bg-gray-400 py-2 px-4 rounded-xl text-white"
                      disabled
                    >
                      See Now !!
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EventCard;
