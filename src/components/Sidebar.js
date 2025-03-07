import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaTrophy, FaEnvelope } from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "achievements", "contact"];
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sidebar">
      <ul>
        <li className={activeSection === "home" ? "active" : ""} 
            onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
          <FaHome />
          <span className={`sidebar-text ${activeSection === "home" ? "visible" : ""}`}>Home</span>
        </li>
        <li className={activeSection === "about" ? "active" : ""} 
            onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
          <FaUser />
          <span className={`sidebar-text ${activeSection === "about" ? "visible" : ""}`}>About</span>
        </li>
        <li className={activeSection === "skills" ? "active" : ""} 
            onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}>
          <FaCode />
          <span className={`sidebar-text ${activeSection === "skills" ? "visible" : ""}`}>Skills</span>
        </li>
        <li className={activeSection === "projects" ? "active" : ""} 
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
          <FaProjectDiagram />
          <span className={`sidebar-text ${activeSection === "projects" ? "visible" : ""}`}>Projects</span>
        </li>
        <li className={activeSection === "achievements" ? "active" : ""} 
            onClick={() => document.getElementById("achievements").scrollIntoView({ behavior: "smooth" })}>
          <FaTrophy />
          <span className={`sidebar-text ${activeSection === "achievements" ? "visible" : ""}`}>Achievements</span>
        </li>
        <li className={activeSection === "contact" ? "active" : ""} 
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
          <FaEnvelope />
          <span className={`sidebar-text ${activeSection === "contact" ? "visible" : ""}`}>Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
