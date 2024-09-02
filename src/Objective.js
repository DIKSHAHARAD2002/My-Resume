import React from "react";
import { useNavigate } from "react-router-dom";
import "./Objective.css";

const Objective = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/education");
  };

  return (
    <div className="objective-section">
      <div className="objective-content">
        <div className="name-box">
          <h1>DIKSHA</h1>
        </div>
        <h2 className="job-title">Enthusiastic Student</h2>
        <p className="description">
        Passionate and dedicated student with a strong foundation in web development, 
        seeking to apply my skills in creating dynamic and interactive web applications. 
        Eager to learn and grow in a fast-paced environment. I am genuinely 
        interested in personal development.

        </p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Objective;
