import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Summary = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [hackathon, setHackathon] = useState(null);

  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_DOMAIN}/api/hackathon/${eventId}`
        );
        setHackathon(response.data); // Save data to state
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchHackathon();
  }, [eventId]);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] py-8 px-14">
      <div className="w-full flex justify-center align-middle items-center ">
        <h1
          className="cursor-pointer tracking-[1em] font-krona"
          onClick={() => navigate("/")}
        >
          EVENT PULSE
        </h1>
      </div>

      <div className="h-fit w-full p-10 mt-10 bg-background rounded-xl shadow-xl flex flex-col justify-between items-center align-middle font-reddit ">
        <h1 className="text-5xl font-bold">Summary</h1>
        <p className="mt-4 text-xl text-gray-700 text-center">
          Thank you for your application! Save the QR code below or screenshot
          it to access your application details later. We will notify you via
          email about the status of your application.
        </p>

        {hackathon && (
          <div className="mt-6">
            <QRCodeSVG value={`${window.location.origin}/Registered`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
