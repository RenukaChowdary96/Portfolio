import React, { useEffect, useState } from "react";
import "../styles/Preloader.css"; // Ensure you have this file

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Disappears after 2 seconds
  }, []);

  return loading ? (
    <div className="preloader-container">
      <div className="spinner"></div>
    </div>
  ) : null;
};

export default Preloader;
