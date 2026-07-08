import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src="/NaveenRajput.jpg" alt="Naveen Rajput" />
      </div>

      <div className="about-content">

        <h4>About Me</h4>

        <h2>
          I'm <span>Naveen </span>
        </h2>

        <h3>Java Full Stack Developer</h3>

        <p>
          I am a passionate Java Full Stack Developer with a strong
          foundation in Java, Spring Boot, React.js, JavaScript,
          MySQL and MongoDB.
        </p>

        <p>
          I enjoy building responsive and scalable web applications.
          I am a quick learner, hardworking, and always eager to
          learn new technologies.
        </p>

        <div className="about-info">

          <div>
            <strong>Name :</strong> Naveen
          </div>

          <div>
            <strong>Email :</strong> naveenrajput3363@gmail.com
          </div>

          <div>
            <strong>Phone :</strong> +91 8607721374
          </div>

          <div>
            <strong>Location :</strong> Mahendragarh, Haryana
          </div>

          <div>
            <strong>Degree :</strong> B.Tech (CSE)
          </div>

          <div>
            <strong>Status :</strong> Available for Internship & Job
          </div>

        </div>

        <a href="/resume.pdf" className="about-btn">
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default About;