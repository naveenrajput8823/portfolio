import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Job Recommendation System",
      description:
        "A web application that recommends jobs to users based on their profile and skills.",
      technologies: "React.js | Java | Spring Boot | MySQL",
      github: "#",
      demo: "#",
    },
    {
      title: "Restaurant Management System",
      description:
        "Restaurant management application with menu, orders, billing and customer management.",
      technologies: "Java | MySQL | HTML | CSS | JavaScript",
      github: "#",
      demo: "#",
    },
    {
      title: "E-Learning Website",
      description:
        "An online learning platform where students can access study material and courses.",
      technologies: "React.js | Spring Boot | MySQL",
      github: "#",
      demo: "#",
    },
    {
      title: "DevPad",
      description:
        "Online code editor with syntax highlighting and code execution support.",
      technologies: "React.js | JavaScript | HTML | CSS",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">

      <h4>My Work</h4>
      <h2>Latest Projects</h2>

      <div className="project-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">
              💻
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h5>{project.technologies}</h5>

            <div className="project-buttons">

              <a href={project.github}>
                GitHub
              </a>

              <a href={project.demo}>
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;