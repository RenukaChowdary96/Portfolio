import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "../data/project";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" />
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="live-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
