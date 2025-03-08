import React from "react";
import { FaGithub } from "react-icons/fa";
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
              <h3 className="project-title">
                <a href={project.detailsPage} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="github-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
