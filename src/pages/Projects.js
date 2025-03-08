import React, { useState } from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import projectsData from "../data/project";
import "../styles/Projects.css";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProjectDetails = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`project-card ${activeProject === index ? "active" : ""}`}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title" onClick={() => toggleProjectDetails(index)}>
                {project.title}
              </h3>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="github-icon" />
              </a>
            </div>

            {activeProject === index && (
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  <strong>Tech Used:</strong>
                  <div className="tech-icons">
                    {project.tech.map((techImg, i) => (
                      <img key={i} src={techImg} alt="tech-logo" className="tech-icon" />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
