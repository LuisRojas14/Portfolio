import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React1 from "../assets/Luis Rojas.jpg";
import React2 from "../assets/markus-spiske-iar-afB0QQw-unsplash.jpg";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p className=" justified-paragraph">
          I am a driven and determined individual who is passionate about
          technology and innovation. After working for more than a decade in the
          hospitality industry, I made the decision to pursue a career in tech
          by completing a Full Stack Web and App Development Bootcamp. Through
          this program, I have developed a strong foundation in HTML, CSS,
          JavaScript, and Node.js, as well as experience working with Git and
          GitHub. I am excited to bring my new skills and my extensive
          experience in customer service to a career in tech.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
