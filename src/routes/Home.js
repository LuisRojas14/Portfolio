import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
// import WorkCards from "../components/WorkCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      {/* <WorkCards /> */}
      <Footer />
    </div>
  );
};

export default Home;
