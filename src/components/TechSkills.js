import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import "./TechSkills.css";

const TechSkillsComponent = () => {
  const techSkills = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },

    { name: "React Bootstrap", icon: faReact },

    // Add more skills as needed
  ];

  return (
    <Container>
      <h2 className="tech">My Tech Skills</h2>
      <Row>
        {techSkills.map((skill, index) => (
          <Col key={index} sm={10} md={4} lg={3}>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title className="skill-card-title">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className={`skill-logo ${skill.name.toLowerCase()}`}
                  />
                  {skill.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TechSkillsComponent;
