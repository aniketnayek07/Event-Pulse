import React, { useState } from "react";
import features from "../../assets/featuresArray";
const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  return (
    <div>
      <div className="text-center mt-14 font-krona font-bold text-4xl px-10">
        WHAT WE PROVIDE
      </div>
      <div className="flex flex-col gap-8 px-14 ">
        <div className="px-24">
          <div className="w-full bg-[rgba(184,174,228,0.83)] mt-14 py-14 rounded-xl px-16 font-reddit flex flex-row justify-center gap-14 ">
            <img
              src={selectedFeature.url}
              alt={selectedFeature.title}
              className="w-fit h-72 transform transition-transform duration-500 ease-in-out scale-90 hover:scale-100"
            />
            <div className="flex flex-col justify-center align-middle items-center gap-10 w-1/2 transition-all duration-500 transform translate-x-4 ">
              <h1 className="text-4xl font-bold text-center">
                {selectedFeature.title}
              </h1>
              <p className="text-xl text-center font-medium">
                {selectedFeature.content}
              </p>
            </div>
          </div>
        </div>
        <div className="px-24">
          <div className="w-full bg-background px-20 py-3 rounded-2xl flex flex-row justify-between align-middle items-center text-center font-krona">
            <h5
              className="cursor-pointer hover:bg-[rgba(255,255,255,0.5)] rounded-xl  px-8"
              onClick={() => setSelectedFeature(features[0])}
            >
              QR <br /> CODE
            </h5>
            <h5
              className="cursor-pointer hover:bg-[rgba(255,255,255,0.5)] rounded-xl  px-4"
              onClick={() => setSelectedFeature(features[1])}
            >
              REAL TIME <br />
              MONITORING
            </h5>
            <h5
              className="cursor-pointer hover:bg-[rgba(255,255,255,0.5)] rounded-xl  px-4"
              onClick={() => setSelectedFeature(features[2])}
            >
              AUTOMATED
              <br />
              CERTIFICATE
            </h5>
            <h5
              className="cursor-pointer hover:bg-[rgba(255,255,255,0.5)] rounded-xl  px-4"
              onClick={() => setSelectedFeature(features[3])}
            >
              SOCIAL
              <br />
              SHARINGS
            </h5>
            <h5
              className="cursor-pointer hover:bg-[rgba(255,255,255,0.5)] rounded-xl  px-4"
              onClick={() => setSelectedFeature(features[4])}
            >
              ANALYTICS
              <br />
              DASHBOARD
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
