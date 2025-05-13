import { SlSocialStumbleupon } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
const SocialSharingbutton = () => {
  const navigate = useNavigate();
  return (
    <div className=" fixed bottom-6 right-6 z-50">
      <button
        onClick={() => navigate("/Socials")}
        className="cursor-pointer flex flex-row gap-2 justify-between align-middle items-center p-4 bg-button rounded-full shadow-xl text-white relative hover:scale-105 transition-transform duration-200"
      >
        <span className="absolute inset-0 bg-white opacity-10 rounded-full blur-xl animate-pulse"></span>
        <SlSocialStumbleupon className="text-2xl font-bold" />
        <p className="text-xl font-reddit text-center">Socials</p>
      </button>
    </div>
  );
};

export default SocialSharingbutton;
