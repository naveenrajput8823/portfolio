import "./Certificates.css";

import fullstack from "../assets/certificates/Full_stack.jpg";
import javaAdv from "../assets/certificates/JavaAdv.jpg";
import javascript from "../assets/certificates/javascript.png";
import python from "../assets/certificates/python.png";
import tcsYoung from "../assets/certificates/tcs-young.jpg";
import networking from "../assets/certificates/networking.png";
import tcsInterview from "../assets/certificates/tcs-interview.jpg";
import pythonMaster from "../assets/certificates/python-master.png";

function Certificates() {

  const certificates = [

    {
      image: fullstack,
      title: "Full Stack Web Development Internship",
      company: "Upflairs Technologies",
    },

    {
      image: javaAdv,
      title: "Advanced Java Technologies",
      company: "Skill Oceans & MTRC",
    },
      {
      image: javascript,
      title: "JavaScript for Beginners",
      company: "Simplilearn SkillUp",
    },


    {
      image: python,
      title: "Python for Beginners",
      company: "Simplilearn SkillUp",
    },

    {
      image: tcsYoung,
      title: "TCS iON Career Edge - Young Professional",
      company: "TCS iON",
    },

    {
      image: networking,
      title: "Master Computer Networking",
      company: "Scaler Topics",
    },

    {
      image: tcsInterview,
      title: "Interview & Job Readiness",
      company: "TCS iON",
    },

    {
      image: pythonMaster,
      title: "Python Course Mastering Essentials",
      company: "Scaler Topics",
    }

  ];

  return (

    <section className="certificates" id="certificates">

      <h4>My Certificates</h4>

      <h2>Certifications</h2>

      <div className="certificate-container">

        {certificates.map((item, index) => (

          <div className="certificate-card" key={index}>

            <img src={item.image} alt={item.title} />

            <div className="certificate-content">

              <h3>{item.title}</h3>

              <p>{item.company}</p>

              <button
                onClick={() => window.open(item.image, "_blank")}
              >
                View Certificate
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Certificates;