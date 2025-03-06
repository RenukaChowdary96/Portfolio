import React from "react";
import "../styles/Skills.css"; 

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills">
        {[
          { name: "HTML", level: "90%", className: "html" },
          { name: "CSS", level: "85%", className: "css" },
          { name: "JavaScript", level: "80%", className: "js" },
          { name: "PHP", level: "75%", className: "php" },
          { name: "Python", level: "85%", className: "python" },
          { name: "MySQL", level: "80%", className: "mysql" },
          { name: "AWS Cloud", level: "70%", className: "aws" },
        ].map((skill) => (
          <div className="skill" key={skill.name}>
            <span>{skill.name}</span>
            <div className="progress">
              <div className={`progress-bar ${skill.className}`} style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
