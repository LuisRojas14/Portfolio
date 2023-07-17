import "./WorkCardStyle.css";
import React from "react";
import { NavLink } from "react-router-dom";
import pro1 from "../assets/the-cook-book.png";
import pro2 from "../assets/ReactTodo.png";
import pro3 from "../assets/SpotSwap.png";
import pro4 from "../assets/simple-todo-list.png";
import pro5 from "../assets/simple-todo-list.png";
import pro6 from "../assets/the-cook-book.png";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container" >
        <div className="project-card">
          <img src={pro1} alt="The Cook Book" className="project-image" />
          <h2 className="project-title">The Cook Book</h2>
          <div className="pro-details">
            <p>
              Text Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio exercitationem est quia inventore aut provident enim et magnam dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="https://the-cook-book-u0jy.onrender.com" className="btn" target="_blank" rel="noopener noreferrer">
                View
              </NavLink>
              <NavLink to="https://github.com/LuisRojas14/CookBook_Project" className="btn" target="_blank" rel="noopener noreferrer">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro2} alt="Simple Todo List" className="project-image" />
          <h2 className="project-title">React Todo List</h2>
          <div className="pro-details">
            <p>
              Text Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio exercitationem est quia inventore aut provident enim et magnam dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="https://reacttodolist-8ta1.onrender.com" className="btn" target="_blank" rel="noopener noreferrer">
                View
              </NavLink>
              <NavLink to="https://github.com/LuisRojas14/React_Todo_List" className="btn" target="_blank" rel="noopener noreferrer">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro3} alt="Project Title 3" className="project-image" />
          <h2 className="project-title">SpotSwap</h2>
          <div className="pro-details">
            <p>
              Text Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio exercitationem est quia inventore aut provident enim et magnam dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="https://frontendspotswap.onrender.com" className="btn" target="_blank" rel="noopener noreferrer">
                View
              </NavLink>
              <NavLink to="https://github.com/LuisRojas14/SpotSwap_Project_FrontEnd" className="btn" target="_blank" rel="noopener noreferrer">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro4} alt="Project Title 4" className="project-image" />
          <h2 className="project-title">Project Title 4</h2>
          <div className="pro-details">
            <p>
              Text Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio exercitationem est quia inventore aut provident enim et magnam dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="ur" className="btn" target="_blank" rel="noopener noreferrer">
                View
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro5} alt="Project Title 5" className="project-image" />
          <h2 className="project-title">Project Title 5</h2>
          <div className="pro-details">
            <p>
              Text Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio exercitationem est quia inventore aut provident enim et magnam dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="ur" className="btn" target="_blank" rel="noopener noreferrer">
                View
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro6} alt="Project Title 6" className="project-image" />
          <h2 className="project-title">Project Title 6</h2>
          <div className="pro-details">
            <p>
              Text Lorem ipsum dolor sit amet. Cum aperiam maiores ea odio exercitationem est quia inventore aut provident enim et magnam dolorem! 33 vitae recusandae ab
            </p>
            <div className="pro-btns">
              <NavLink to="ur" className="btn" target="_blank" rel="noopener noreferrer">
                View
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
