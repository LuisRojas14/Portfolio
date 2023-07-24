import React from "react";
import expressLogo from "../assets/express.png";
import mongoDBLogo from "../assets/mongoDB.png";
import postgreSQL from "../assets/postgreSQL.png";
import { Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faBootstrap,
  faNodeJs,
  faGithub,
  faPython,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import "./TechSkills.css";

const TechSkills = () => {
  const skills = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React JS", icon: faReact },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Node.js", icon: faNodeJs },
    { name: "GitHub", icon: faGithub },
    { name: "Git", icon: faGit },
    { name: "Express.js", icon: expressLogo },
    { name: "MongoDb", icon: mongoDBLogo },
    { name: "PostgreSQL" , icon: postgreSQL}
  ];

  return (
    <Container>
      <h2 className="tech">My Tech Skills</h2>
      <Card className="skill-card">
        <Card.Body className="skill-card-body">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <FontAwesomeIcon
                icon={skill.icon}
                className={`skill-logo ${skill.name.toLowerCase()}`}
              />
              {skill.name}
            </div>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TechSkills;
