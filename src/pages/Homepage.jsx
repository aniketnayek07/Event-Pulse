import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="w-screen h-full bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] ">
      <Navbar />
      <HeroSection />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Homepage;
