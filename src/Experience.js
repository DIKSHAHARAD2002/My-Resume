import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Experience.css";

const Experience = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate("/Projects"); 
  };

  return (
    <div className="experience-section">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="experience-details">
        <div className="experience-item">
          <div className="icon">&#128218;</div>
          <div>
            <h3>Position: Intern - Software Developer</h3>
            <p>Farmayu, Airoli (2024, Feb-May)</p>
            <p>Successfully completed a 3-month internship at Farmayu.</p>
            
            <p>Designed and developed various webpages, including:</p>
            <ul>
              <li>Sign-up pages</li>
              <li>Registration pages</li>
              <li>Landing page</li>
              <li>E-album pages</li>
            </ul>
          </div>
        </div>
      </div>
      <button className="get-started-button" onClick={handleGetStarted}>
        Next
      </button>
    </div>
  );
};

export default Experience;
