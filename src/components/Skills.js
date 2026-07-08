import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "Spring",
    "ReactJS",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL",
    "Gen AI",
    "Git & GitHub"
  ];

  return (
    <section className="skills" id="skills">
      <h4>My Skills</h4>
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-title">
              <span>{skill}</span>
            </div>

            <div className="progress">
              <div className={`progress-bar skill-${index + 1}`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;