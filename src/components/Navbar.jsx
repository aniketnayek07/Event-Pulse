import React from "react";
import { useNavigate } from "react-router-dom";
import { SignOutButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();

  return (
    <div className="w-full py-4 font-krona flex flex-row justify-between align-middle items-center px-10 ">
      <div className="flex flex-row gap-10 justify-items-start ">
        <a
          href="#about"
          className="cursor-pointer hover:bg-background rounded-md w-fit p-1"
        >
          About
        </a>
        <a
          href="#features"
          className="cursor-pointer hover:bg-background rounded-md w-fit p-1 "
        >
          Features
        </a>
      </div>
      <div className="w-[60%] flex flex-row justify-between align-middle items-center">
        <h2 className="cursor-pointer tracking-[1em]" onClick={() => navigate("/")}>EVENTPULSE</h2>

        {isSignedIn ? (
          <div className="flex items-center gap-4">
            <span className="text-sm">
              Hello, {user.firstName || user.username || "User"}
            </span>
            <SignOutButton>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Sign Out
              </button>
            </SignOutButton>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
