import React from 'react'
import SignUp from "../image/SignUp.png"
const LeftSide = () => {
  return (
    <div className="w-1/2 h-full">
      <div className="w-full h-full bg-[#8E7ED7] flex justify-center align-middle items-center ">
          <img src={SignUp} alt="SignIn" />      
      </div>
    </div>
  );
}

export default LeftSide