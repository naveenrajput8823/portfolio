import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h3>Let's Work Together</h3>

          <p>
            I am a Java Full Stack Developer passionate about building
            responsive and scalable web applications. Feel free to
            contact me for internships, jobs or freelance projects.
          </p>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <span>naveenrajput3363@gmail.com</span>
          </div>

          <div className="info-box">
            <FaPhone className="icon" />
            <span>+91 8607721374</span>
          </div>

          <div className="social-links">

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;