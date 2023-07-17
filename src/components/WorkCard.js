import "./WorkCardStyle.css";
import React from "react";
import pro1 from "../assets/the-cook-book.png";
import pro2 from "../assets/simple-todo-list.png";
import pro3 from "../assets/martin-katler-unsplash.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt=" the cook book" />
          <h2 className="project-title">  The Cook Book</h2>
          <div className="pro-details">
            <p>
              {" "}
              text Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio
              exercitationem est quia inventore aut provident enim et magnam
              dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="https://the-cook-book-u0jy.onrender.com" className="btn">
                View
              </NavLink>
              <NavLink to="https://github.com/LuisRojas14/CookBook_Project" className="btn">
                source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro2} alt="photo" />
          <h2 className="project-title"> Simple Todo List</h2>
          <div className="pro-details">
            <p>
              {" "}
              text Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio
              exercitationem est quia inventore aut provident enim et magnam
              dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="https://simple-todo-list-s2i1.onrender.com" className="btn">
                View
              </NavLink>
              <NavLink to="https://github.com/LuisRojas14/Todo_List" className="btn">
                source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro3} alt="photo" />
          <h2 className="project-title"> Project Title 3</h2>
          <div className="pro-details">
            <p>
              {" "}
              text Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio
              exercitationem est quia inventore aut provident enim et magnam
              dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="ur" className="btn">
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
