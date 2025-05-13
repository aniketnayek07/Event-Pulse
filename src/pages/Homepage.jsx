import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
;
import Footer from "../components/Footer";
import SocialSharingbutton from "../components/SocialSharingbutton";
const Homepage = () => {
  return (
    <div className=" scroll-smooth w-screen h-full bg-gradient-to-b from-[#AEB2DA] via-[#9A92C5] to-[#7266AA] ">
      <Navbar />
      <section id="about">
        <HeroSection />
      </section>
      <section id="features">
        <Features />
      </section>
      
      <Footer />
      <SocialSharingbutton />
    </div>
  );
};

export default Homepage;
