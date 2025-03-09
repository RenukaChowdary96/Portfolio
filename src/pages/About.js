import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import resumePDF from "../assets/renuka_resume.pdf";
import profilePic from "../assets/profile.jpeg";

// Animation Variants
const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07, duration: 0.5 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.3 },
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
          
          {/* Animated Title */}
          <motion.h2
            className="about-title"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Animated Word-by-Word Paragraph */}
          <motion.p
            className="intro-text"
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
          >
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
          <motion.a
            href={resumePDF}
            download="Renuka_Resume.pdf"
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 10px #a855f7" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button className="resume-btn">
              Download Resume
            </motion.button>
          </motion.a>
        </div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 70 }}  // Moving image slightly to the right
          transition={{ duration: 1 }}
        >
          <motion.img
            src={profilePic}
            alt="Renuka Durga Lakshmi"
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.5)" }}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default About;
