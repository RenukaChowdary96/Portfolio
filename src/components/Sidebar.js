import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import { FaHome, FaUser, FaProjectDiagram, FaTrophy, FaEnvelope, FaCode } from "react-icons/fa"; // Added FaCode for Skills Icon
import "../styles/Sidebar.css";

const Sidebar = () => {
  const location = useLocation(); 

  return (
    <div className="sidebar">
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">
            <FaHome />
          </Link>
        </li>

        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">
            <FaUser />
          </Link>
        </li>

        <li className={location.pathname === "/skills" ? "active" : ""}>
          <Link to="/skills">
            <FaCode />
          </Link>
        </li>

        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects">
            <FaProjectDiagram />
          </Link>
        </li>

        <li className={location.pathname === "/achievements" ? "active" : ""}>
          <Link to="/achievements">
            <FaTrophy />
          </Link>
        </li>

        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">
            <FaEnvelope />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
