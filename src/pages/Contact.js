import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your name" />

        <label>Email</label>
        <input type="email" placeholder="Your email" />

        <label>Message</label>
        <textarea placeholder="Your message"></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-icons">
        <p>
          <FaPhoneAlt className="icon" />
          9391357255
        </p>
        <p>
          <FaEnvelope className="icon" />
          <a href="mailto:renukaggara@gmail.com">renukaggara@gmail.com</a>
        </p>
        <p>
          <FaLinkedin className="icon" />
          <a href="https://linkedin.com/in/renukagaggara" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/renukagaggara
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
