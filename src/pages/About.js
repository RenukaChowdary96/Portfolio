import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import resumePDF from "../assets/renuka_resume.pdf";
import profilePic from "../assets/profile.jpeg";

// Animation for letter-by-letter effect in the title
const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

// Animation for word-by-word effect in the paragraph
const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const About = () => {
  const text = "About Me";
  const aboutText =
    "As a Bachelor of Computer Applications student at Vignan University, I've diligently cultivated a robust skill set spanning Python development, full-stack web development, and AWS cloud technologies. My aspiration is to become a DevOps Engineer, and I'm eager to leverage my technical foundation to gain practical, real-world experience. I'm a quick learner, readily adapting to evolving technologies and challenges, and possess strong communication skills, ensuring seamless collaboration within any team environment.";

  return (
    <div className="about-container">
      <div className="about-content">
        
        {/* Left Side - Text Section */}
        <div className="about-text">
          
          {/* Animated About Me Title */}
          <h2 className="about-title">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </h2>

          {/* Animated Word-by-Word Paragraph */}
          <motion.p className="intro-text">
            {aboutText.split(" ").map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                style={{ display: "inline-block", marginRight: "5px" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Resume Download Button */}
          <a href={resumePDF} download="Renuka_Resume.pdf">
            <motion.button className="resume-btn" whileHover={{ scale: 1.05 }}>
              Download Resume
            </motion.button>
          </a>
        </div>

        {/* Right Side - Image Section */}
        <div className="about-image">
          <motion.img
            src={profilePic}
            alt="Renuka Durga Lakshmi"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

      </div>
    </div>
  );
};

export default About;
