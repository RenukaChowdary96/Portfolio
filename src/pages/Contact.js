import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  // Function to handle button click
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Your name" required />

        <label>Email</label>
        <input type="email" placeholder="Your email" required />

        <label>Message</label>
        <textarea placeholder="Your message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-icons">
        <a href="tel:+919391357255">
          <FaPhoneAlt className="icon" />
        </a>
        <a href="mailto:renukaggara@gmail.com">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://linkedin.com/in/renukagaggara" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>

     
    </div>
  );
};

export default Contact;
