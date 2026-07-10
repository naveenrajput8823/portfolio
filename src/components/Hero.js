import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h3>Hello, It's Me</h3>

        <h1>Naveen</h1>

        <h2>
          Java <span>Full Stack Developer</span>
        </h2>

        <p>
          Passionate Java Full Stack Developer with strong knowledge of
          Java, Spring Boot, React.js, JavaScript, MySQL and MongoDB.
          I love building modern, responsive and user-friendly web
          applications.
        </p>

        <div className="hero-buttons">
          <a href="/nCV.pdf" className="btn">
            Download Resume
          </a>

          <a href="#contact" className="btn btn-outline">
            Hire Me
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img src="/NR.jpg" alt="Naveen Rajput" />
      </div>

    </section>
  );
}

export default Hero;