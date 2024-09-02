import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Skills.css";

const Skills = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate("/Certificates"); 
  };

  return (
    <div className="Skills-section">
      <h2 className="Skills-title">SKILLS</h2>
      <div className="Skills-details">
        <div className="Skills-item">
          <div>
            <p>JavaScript</p>
          </div>
        </div>
        <div className="Skills-item">
          <div>
            <p>HTML5</p>
          </div>
        </div>
        <div className="Skills-item">
          <div>
            <p>CSS</p>
          </div>
        </div>
        <div className="Skills-item">
          <div>
            <p>VS Code</p>
          </div>
        </div>
        <div className="Skills-item">
          <div>
            <p>Figma</p>
          </div>
        </div>
        <div className="Skills-item">
          <div>
            <p>IQC of Components</p>
          </div>
        </div>
        <div className="Skills-item">
          <div>
            <p>Troubleshooting of DC Power Supply </p>
          </div>
        </div>
        <div className="Skills-item">
          <div>
            <p>Network Models</p>
          </div>
        </div>
        <div className="Skills-item">
          <div>
            <p>Github</p>
          </div>
        </div>
      </div>
      <button className="get-started-button" onClick={handleGetStarted}>
        Next
      </button>
    </div>
  );
};

export default Skills;
