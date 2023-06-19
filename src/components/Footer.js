import React from "react";
import {
  FaHome,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Hollestrasse 3</p>
              <p>Dortmund</p>
            </div>
          </div>

          <div className="email">
            <FaEnvelope
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <p>luisignacio1210@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <div className="social-media">
            <a
              href="https://www.instagram.com/your_instagram_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/your_linkedin_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/your_github_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
