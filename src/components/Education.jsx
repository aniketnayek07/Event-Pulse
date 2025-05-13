import React from "react";
import { useFormContext } from "../context/FormContext"; // 👈 import context

const Education = ({ setActiveTab }) => {
  const { formData, updateFormData } = useFormContext(); // 👈 get context state & updater

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: 50 },
    (_, i) => new Date().getFullYear() - i
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("education", { [name]: value }); // 👈 update context state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveTab("Links");
  };

  return (
    <form
      className="w-full flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-12 font-reddit"
      onSubmit={handleSubmit}
    >
      <label className="font-medium flex flex-col gap-2">
        DEGREE TYPE
        <select
          name="degreeType"
          value={formData.education.degreeType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Degree</option>
          <option>Bachelors</option>
          <option>Masters</option>
          <option>PhD</option>
          <option>Diploma</option>
          <option>Other</option>
        </select>
      </label>

      <label className="font-medium flex flex-col gap-2">
        EDUCATIONAL INSTITUTION
        <input
          name="educationInstitution"
          placeholder="e.g. IIT Delhi"
          className="w-full px-3 py-2 border rounded"
          value={formData.education.educationInstitution}
          onChange={handleChange}
          required
        />
      </label>

      <label className="font-medium flex flex-col gap-2">
        FIELD OF STUDY
        <input
          type="text"
          name="fieldofstudy"
          placeholder="e.g. Computer Science"
          value={formData.education.fieldofstudy}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </label>

      <label className="font-medium flex flex-col gap-2">
        MONTH OF GRADUATION
        <select
          name="monthofgraduation"
          value={formData.education.monthofgraduation}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </label>

      <label className="font-medium flex flex-col gap-2">
        YEAR OF GRADUATION
        <select
          name="yearofgraduation"
          value={formData.education.yearofgraduation}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="cursor-pointer w-full bg-indigo-600 text-xl font-medium text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Continue to Experience
      </button>
    </form>
  );
};

export default Education;
