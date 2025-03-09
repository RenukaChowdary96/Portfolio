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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20, // Adjust this offset based on your layout
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="sidebar">
      <ul>
        {[
          { id: "home", icon: <FaHome />, text: "Home" },
          { id: "about", icon: <FaUser />, text: "About" },
          { id: "skills", icon: <FaCode />, text: "Skills" },
          { id: "projects", icon: <FaProjectDiagram />, text: "Projects" },
          { id: "achievements", icon: <FaTrophy />, text: "Achievements" },
          { id: "contact", icon: <FaEnvelope />, text: "Contact" },
        ].map(({ id, icon, text }) => (
          <li key={id} className={activeSection === id ? "active" : ""} onClick={() => scrollToSection(id)}>
            {icon}
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
