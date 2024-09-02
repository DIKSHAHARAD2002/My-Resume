import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Education.css";

const Education = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate("/experience"); 
  };

  return (
    <div className="education-section">
      <h2 className="section-title">EDUCATION</h2>
      <div className="education-details">
        <div className="education-item">
          <div className="icon">&#128218;</div>
          <div>
            <h3>SSC</h3>
            <p>New English School, Murbad (2017)</p>
          </div>
        </div>
        <div className="education-item">
          <div className="icon">&#128218;</div>
          <div>
            <h3>Diploma in Electronics</h3>
            <p>Premlila Vithaldas Polytechnic SNDT Women's University (2017-2021)</p>
          </div>
        </div>
        <div className="education-item">
          <div className="icon">&#128218;</div>
          <div>
            <h3>B.Tech in Electronics and Communication</h3>
            <p>Usha Mittal Institute of Technology SNDT Women's University (2021-2024)</p>
          </div>
        </div>
      </div>
      <button className="get-started-button" onClick={handleGetStarted}>
        Next
      </button>
    </div>
  );
};

export default Education;
