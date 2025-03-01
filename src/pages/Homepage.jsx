import React from "react";
import Navbar from "../components/HomePage/Navbar";
import HeroSection from "../components/HomePage/HeroSection";
import Features from "../components/HomePage/Features";
import Pricing from "../components/HomePage/Pricing";
import Footer from "../components/HomePage/Footer";

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
