import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import TechSkills from "../components/TechSkills";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="ABOUT" text=" :Lorem "/>
      <AboutContent/>
      <TechSkills/>
      <Footer />
      
    </div>
  );
};

export default About;
