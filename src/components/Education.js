import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">

      <h4>Qualification</h4>
      <h2>My Education</h2>

      <div className="education-container">

        <div className="edu-card">
          <span className="year">2022 - 2026</span>

          <h3>Bachelor of Technology</h3>

          <h4>Computer Science Engineering</h4>

          <p>
            MITRC College, Mahendragarh
          </p>

          <p>
            Currently pursuing B.Tech with strong focus on
            Java Full Stack Development, Spring Boot,
            React.js and Database Management.
          </p>
        </div>

        <div className="edu-card">

          <span className="year">2022</span>

          <h3>Senior Secondary (12th)</h3>

          <h4>HBSE Board</h4>

          <p>Haryana Board of School Education</p>

          <p>
            Percentage : <strong>75%</strong>
          </p>

        </div>

        <div className="edu-card">

          <span className="year">2020</span>

          <h3>Secondary (10th)</h3>

          <h4>HBSE Board</h4>

          <p>Haryana Board of School Education</p>

          <p>
            Percentage : <strong>67%</strong>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Education;