// context/FormContext.js
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    about: {
      firstname: "",
      lastname: "",
      gender: "",
      bio: "",
    },
    education: {
      degreeType: "",
      educationInstitution: "",
      fieldofstudy: "",
      monthofgraduation: "",
      yearofgraduation: "",
    },
    links: [
      { platform: "GitHub", url: "" },
      { platform: "LinkedIn", url: "" },
      { platform: "GitHub Pages", url: "" },
    ],

    contacts: {
      email: "",
      phone: "",
      city: "",
    },
  });

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data,
      },
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
