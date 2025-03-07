import React from "react";
import "../styles/Skills.css";

// ✅ Import images from `src/assets`
import frontendLogo from "../assets/frontend.jpg";
import databaseLogo from "../assets/databases.png";
import phpLogo from "../assets/php.jpg";
import awsLogo from "../assets/aws.jpg";
import pythonLogo from "../assets/python.jpg";
import gitLogo from "../assets/git.png";

const Skills = () => {
  const skills = [
    { 
      names: ["HTML", "CSS", "JavaScript"], 
      level: "85%", 
      className: "frontend", 
      logos: [frontendLogo] 
    },
    { 
      names: ["MongoDB", "MySQL"], 
      level: "80%", 
      className: "database", 
      logos: [databaseLogo] 
    },
    { 
      names: ["PHP"], 
      level: "70%", 
      className: "php", 
      logos: [phpLogo] 
    },
    { 
      names: ["AWS Cloud"], 
      level: "75%", 
      className: "aws", 
      logos: [awsLogo] 
    },
    { 
      names: ["Python"], 
      level: "85%", 
      className: "python", 
      logos: [pythonLogo] 
    },
    { 
      names: ["Git & GitHub"], 
      level: "90%", 
      className: "git", 
      logos: [gitLogo] 
    },
  ];

  return (
    <div className="skills-container">
      <div className="skills-content">
        <h2>My Skills</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <span className="skill-name">{skill.names.join(" + ")}</span>
              <div className="progress-container">
                <div className="progress">
                  <div className={`progress-bar ${skill.className}`} style={{ width: skill.level }}></div>
                </div>
                <div className="skill-logos">
                  {skill.logos.map((logo, i) => (
                    <img key={i} src={logo} alt={skill.names[i]} className="skill-logo" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
