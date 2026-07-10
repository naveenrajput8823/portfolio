import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

    <footer className="footer">

      <h2>Naveen Rajput</h2>

      <p>Java Full Stack Developer</p>

      <div className="footer-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </div>

      <div className="footer-social">

        <a
          href="https://github.com/naveenrajput8823"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/naveen-rajput-422325251"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

      <button
        className="top-btn"
        onClick={scrollTop}
      >
        <FaArrowUp />
      </button>

      <div className="copyright">

        <p>
          © 2026 Naveen Rajput | Made with
          <FaHeart className="heart" />
          using React.js
        </p>

      </div>

    </footer>

  );
}

export default Footer;