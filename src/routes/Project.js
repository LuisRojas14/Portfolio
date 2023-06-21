import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";

const Project = () => {
  return (
    <div>
      <Navbar />
      *// it will pass the variable below as props//
      <HeroImg2 heading="PROJECTS" text="Highlighting my most recent projects" />
      <Footer />
    </div>
  );
};

export default Project;
