import { createContext, useState, useContext } from "react";

const HackathonContext = createContext();

export const HackathonProvider = ({ children }) => {
  const [hackathons, setHackathons] = useState([]);

  const addHackathon = (event) => {
    setHackathons([...hackathons, event]);
  };

  return (
    <HackathonContext.Provider value={{ hackathons, addHackathon }}>
      {children}
    </HackathonContext.Provider>
  );
};

export const useHackathons = () => useContext(HackathonContext);
