import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useFormContext } from "../context/FormContext";

const PROFILE_TYPES = {
  github: { label: "GitHub URL", icon: <FaGithub /> },
  linkedin: { label: "LinkedIn", icon: <FaLinkedin /> },
  githubPages: { label: "GitHub Pages", icon: <FaGithub /> },
};

const Links = ({ setActiveTab }) => {
  
  const { formData, updateFormData } = useFormContext();

  const [profiles, setProfiles] = useState(() => {
    return formData.links?.length
      ? formData.links.map((link) => {
          const type =
            link.platform === "GitHub"
              ? "github"
              : link.platform === "LinkedIn"
              ? "linkedin"
              : "githubPages";
          return { type, url: link.url };
        })
      : [
          { type: "github", url: "" },
          { type: "linkedin", url: "" },
          { type: "githubPages", url: "" },
        ];
  });

  const handleChange = (index, value) => {
    const updated = [...profiles];
    updated[index].url = value;
    setProfiles(updated);
  };

  const handleAdd = () => {
    setProfiles([...profiles, { type: "github", url: "" }]);
  };

  const handleRemove = (index) => {
    const updated = profiles.filter((_, i) => i !== index);
    setProfiles(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedLinks = profiles.map((profile) => {
      const platform =
        profile.type === "github"
          ? "GitHub"
          : profile.type === "linkedin"
          ? "LinkedIn"
          : "GitHub Pages";
      return { platform, url: profile.url };
    });

    updateFormData("links", formattedLinks);
    setActiveTab("Contacts");
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-12 font-reddit"
    >
      <h2 className="text-xl font-semibold mb-2">Online Profiles</h2>
      <p className="text-md text-gray-600 mb-4">
        Add links to your website, blog, GitHub, LinkedIn, etc.
      </p>

      {profiles.map((profile, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {PROFILE_TYPES[profile.type]?.label}
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xl">{PROFILE_TYPES[profile.type]?.icon}</span>
            <input
              type="url"
              value={profile.url}
              onChange={(e) => handleChange(index, e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="cursor-pointer text-red-500 text-lg hover:text-red-700"
            >
              ⛔
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAdd}
        className="cursor-pointer w-full mt-4 py-2 text-center bg-green-100 text-green-700 rounded-md hover:bg-green-200"
      >
        + Add new profile
      </button>

      <button
        type="submit"
        className="cursor-pointer w-full bg-indigo-600 text-xl font-medium text-white py-2 rounded hover:bg-indigo-700 mt-4 transition"
      >
        Continue to Contacts
      </button>
    </form>
  );
};

export default Links;
