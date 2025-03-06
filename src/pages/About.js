import React from "react";
import "../styles/About.css"; 
import profilePic from "../assets/profile.jpeg"; 
import resumePDF from "../assets/renuka_resume.pdf"; 
import { FaMapMarkerAlt, FaBirthdayCake, FaUserGraduate, FaMicrophone } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Image Section */}
        <div className="about-image">
          <img src={profilePic} alt="Renuka Durga Lakshmi" />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h2>About Me</h2>
          <p className="intro-text">
            Hey, I'm <strong>Renuka Durga Lakshmi</strong>!  
            I am skilled in Full Stack Web Development, Python Development, and AWS Cloud Technologies, aspiring to become a DevOps Engineer.
          </p>

          {/* Information Cards */}
          <div className="info-cards">
            <div className="info-item">
              <FaUserGraduate className="info-icon" />
              <span>BCA Student @ Vignan University</span>
            </div>
            <div className="info-item">
              <FaMicrophone className="info-icon" />
              <span>Public Speaker & Motivator</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>Location: Guntur, India</span>
            </div>
            <div className="info-item">
              <FaBirthdayCake className="info-icon" />
              <span>Born: 2005 (Age: 19)</span>
            </div>
          </div>

          {/* Resume Download Button */}
          <a href={resumePDF} download="Renuka_Resume.pdf">
            <button className="resume-btn">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
