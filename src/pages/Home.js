import React, { useState, useEffect } from "react"; 
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Home.css";

const sentences = [
    " a Bachelor of Computer Applications student",
    " a Full Stack Web Developer",
    " a Python Developer",
    " an Aspiring DevOps Engineer",
  ];
  

const Home = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Typing speed

    if (!isDeleting && charIndex < sentences[index].length) {
      setTimeout(() => {
        setText((prev) => prev + sentences[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else {
      setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }
      }, 1000); // Delay before switching sentence
    }
  }, [charIndex, isDeleting, index]);

  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="content">
        {/* Fixed Name */}
        <h1 className="name">I am Renuka Durga Lakshmi</h1>

        {/* Dynamic Typing Effect with "I am" in White */}
        <motion.h2
          className="role-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="constant-text">I am </span>
          <span className="animated-role">{text}</span>
          <span className="cursor">|</span>
        </motion.h2>

        {/* Social Icons */}
<div className="social-icons">
  <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://linkedin.com/in/YourLinkedInUsername" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="mailto:Renukagaggara@gmail.com" target="_blank" rel="noopener noreferrer">
    <FaEnvelope />
  </a>
</div>


      </div>
    </div>
  );
};

export default Home;
