import React from "react";
import LoginPage from "../image/LoginPage.png";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="w-full flex flex-row h-screen bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA]">
      <div className="w-1/2 h-full bg-[#8E7ED7] flex justify-center align-middle items-center">
        <img src={LoginPage} alt="Login" />
      </div>
      <div className="w-1/2 h-full flex justify-center align-middle items-center font-reddit">
        <SignIn
          path="/login"
          routing="path"
          signUpUrl="/sign-up"
          redirectUrl="/"
          appearance={{
            elements: {
              formButtonPrimary: "bg-[#7266AA] hover:bg-[#5D5399]",
              card: "bg-white shadow-lg rounded-lg",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Login;
