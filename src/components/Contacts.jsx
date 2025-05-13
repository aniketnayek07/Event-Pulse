import { useFormContext } from "../context/FormContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Contacts = () => {
  const { formData, updateFormData } = useFormContext();
 
  const navigate = useNavigate();
  const handleChange = (e) => {
    updateFormData("contacts", {
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DOMAIN}/api/submitted`,
        formData
      );
      console.log("Submitted successfully:", response.data);
      const eventId = response.data._id;
      // Pass event ID to summary
      navigate(`/ApplyHackathon/Summary/${eventId}`);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-12 font-reddit"
    >
      <div>
        <label className="block text-sm text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.contacts.email}
          onChange={handleChange}
          className="w-full p-2 rounded-md border bg-blue-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
        <div className="flex flex-row gap-4">
          <span className="px-3 flex items-center rounded-md border border-gray-300 bg-blue-50 text-sm">
            IN +91
          </span>
          <input
            type="tel"
            name="phone"
            value={formData.contacts.phone}
            onChange={handleChange}
            className="flex-1 p-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-700 mb-1">City</label>
        <input
          type="text"
          name="city"
          value={formData.contacts.city}
          onChange={handleChange}
          className="w-full p-2 rounded-md border bg-blue-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full py-2 text-white rounded-md bg-indigo-600 hover:bg-indigo-700"
      >
        Continue
      </button>
    </form>
  );
};

export default Contacts;
