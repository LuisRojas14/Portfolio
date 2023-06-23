import "./WorkCardStyle.css";
import React from "react";
import pro1 from "../assets/martin-katler-unsplash.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="photo" />
          <h2 className="project-title"> Project Title 1</h2>
          <div className="pro-details">
            <p> text  Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio exercitationem est quia inventore aut provident enim et magnam dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              {/* <NavLink to="url.com" className="btn">
                source
              </NavLink> */}
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro1} alt="photo" />
          <h2 className="project-title"> Project Title 2</h2>
          <div className="pro-details">
            <p> text  Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio exercitationem est quia inventore aut provident enim et magnam dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              {/* <NavLink to="url.com" className="btn">
                source
              </NavLink> */}
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro1} alt="photo" />
          <h2 className="project-title"> Project Title 3</h2>
          <div className="pro-details">
            <p> text  Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio exercitationem est quia inventore aut provident enim et magnam dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              {/* <NavLink to="url.com" className="btn">
                source
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default WorkCard;
