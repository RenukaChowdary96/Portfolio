import React, { useState } from "react";
import "../styles/Achievements.css";
import { FaMedal } from "react-icons/fa"; // Import Medal Icon

import districtAward from "../assets/district-award.jpg";
import debateAward from "../assets/d-award.jpeg";
import debateCertificate from "../assets/d-certifacte.jpg";
import ideathonAward from "../assets/id-award.jpeg";
import ideathonCertificate from "../assets/id-certificate.jpg";
import publicSpeakingAward from "../assets/public-award.jpeg";

const Achievements = () => {
  const [selectedImages, setSelectedImages] = useState(null);

  const achievements = [
    {
      level: "District Level",
      title: "First Prize - Project Expo Competition",
      award: districtAward,
      icon: <FaMedal className="gold-medal" />, // Gold Medal Icon
    },
    {
      level: "University Level",
      title: "Third Place - Debate Competition",
      award: debateAward,
      certificate: debateCertificate,
      icon: <FaMedal className="bronze-medal" />, // Bronze Medal Icon
    },
    {
      level: "Department Level",
      title: "Multiple Awards in Ideathons & Projectexpos",
      award: ideathonAward,
      certificate: ideathonCertificate,
      icon: <FaMedal className="silver-medal" />, // Silver Medal Icon
    },
    {
      level: "Public Speaking",
      title: "Recognized as a public speaker in elocution & debate competitions",
      award: publicSpeakingAward,
    },
  ];

  const openModal = (award, certificate) => {
    setSelectedImages({ award, certificate });
  };

  const closeModal = () => {
    setSelectedImages(null);
  };

  return (
    <div className="achievements-section">
      <h1 className="achievements-header">Achievements</h1>

      <div className="achievements-container">
        <div className="achievements-row">
          {achievements.slice(0, 2).map((item, index) => (
            <div key={index} className="achievement-box" onClick={() => openModal(item.award, item.certificate)}>
              <h3>
                {item.icon} {item.level}
              </h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="achievements-row">
          {achievements.slice(2, 4).map((item, index) => (
            <div key={index} className="achievement-box" onClick={() => openModal(item.award, item.certificate)}>
              <h3>
                {item.icon} {item.level}
              </h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedImages && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="images-container">
              <img src={selectedImages.award} alt="Award" className="modal-image" />
              {selectedImages.certificate && <img src={selectedImages.certificate} alt="Certificate" className="modal-image" />}
            </div>
          </div>
        </div>
      )}

      {/* Button to see more details */}
      <div className="more-info">
        <a href="/achievements-details.html" className="more-info-button" target="_blank">
          Click here to see more information
        </a>
      </div>
    </div>
  );
};

export default Achievements;
