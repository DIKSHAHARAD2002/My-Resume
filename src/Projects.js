import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate("/Skills"); 
  };

  return (
    <div className="Projects-section">
      <h2 className="Projects-title">PROJECTS</h2>
      <div className="Projects-details">
        <div className="Projects-item">
          <div className="icon">&#128218;</div>
          <div>
            <h3>Microcontroller-Based Solar Tracking System</h3>
            <p>2022</p>
            <p>Developed a solar tracking system using Arduino Uno, a microcontroller board based on ATmega328.</p>
            <p>Designed the system to compare the intensity of light falling on each LDR, allowing for precise tracking of the sun.</p>
            <p>Utilized the Arduino microcontroller to convert analog signals from LDRs into digital signals using PWM pins.</p>
            <p>Integrated a servo motor controlled by the digital input to adjust the solar panel's orientation based on the light intensity.</p>
          </div>
        </div>
        
        <div className="Projects-item">
          <div className="icon">&#128218;</div>
          <div>
            <h3>Solar Tracking System Using GPS and AI</h3>
            <p>2023</p>
            <p> Designing a custom Android app for real-time sun tracking.</p>
            <p>Integrating GPS technology for precise location data.</p>
            <p>Utilizing AI for hardware fault prediction.</p>
            <p>Employing ThingSpeak for remote monitoring and data relay.</p>
            <p>Using a NodeMCU ESP8266 microcontroller for data processing.</p>
            <p>Implementing an SG90 servo motor for dynamic solar panel positioning.</p>
          </div>
        </div>
      </div>
      <button className="get-started-button" onClick={handleGetStarted}>
        Next
      </button>
    </div>
  );
};

export default Projects;
