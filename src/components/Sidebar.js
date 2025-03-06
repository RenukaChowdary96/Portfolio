import React, { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaTrophy, FaEnvelope } from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="sidebar">
      <ul>
        <li className={active === "home" ? "active" : ""} onClick={() => setActive("home")}>
          <FaHome />
        </li>
        <li className={active === "about" ? "active" : ""} onClick={() => setActive("about")}>
          <FaUser />
        </li>
        <li className={active === "projects" ? "active" : ""} onClick={() => setActive("projects")}>
          <FaProjectDiagram />
        </li>
        <li className={active === "achievements" ? "active" : ""} onClick={() => setActive("achievements")}>
          <FaTrophy />
        </li>
        <li className={active === "contact" ? "active" : ""} onClick={() => setActive("contact")}>
          <FaEnvelope />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
