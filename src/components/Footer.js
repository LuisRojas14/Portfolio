import React from "react";
import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  // FaLocationArrow,
} from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>Dortmund, Germany</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
             555-555-5555</h4>
            
          </div>
          <div className="email">
            <h4><FaEnvelope
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            luisignacio1210@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4> About me </h4>
          <p>Hospitality industry professional with 14+ years' experience transitioning to web development. Seeking new opportunities to combine customer service expertise with a passion for technology.
          </p>
          <div className="social-media">
            <a
              href="https://www.instagram.com/maradonita_10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} style={{ color: "#fff", marginRight: "2rem" }}/>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-i-rojas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }}/>
            </a>
            <a
              href="https://github.com/LuisRojas14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
