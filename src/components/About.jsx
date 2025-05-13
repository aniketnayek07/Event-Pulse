import { useFormContext } from "../context/FormContext";

const About = ({ setActiveTab }) => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData("about", { [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveTab("Education");
  };

  return (
    <form
      className="w-full h-full flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-12 font-reddit"
      onSubmit={handleSubmit}
    >
      <label className="font-medium flex flex-col gap-2">
        FIRST NAME
        <input
          name="firstname"
          placeholder="First Name"
          value={formData.about.firstname}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="font-medium flex flex-col gap-2">
        LAST NAME
        <input
          name="lastname"
          placeholder="Last Name"
          value={formData.about.lastname}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="font-medium flex flex-col gap-2">
        GENDER
        <select
          name="gender"
          value={formData.about.gender}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender">Transgender</option>
          <option value="Prefer Not To Say">Prefer Not To Say</option>
        </select>
      </label>

      <label className="font-medium flex flex-col gap-2">
        BIO
        <textarea
          name="bio"
          placeholder="Add a Bio"
          value={formData.about.bio}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <button
        type="submit"
        className="cursor-pointer w-full bg-button text-xl font-medium text-white py-2 rounded hover:bg-buttonHover"
      >
        Continue to Education
      </button>
    </form>
  );
};

export default About;
