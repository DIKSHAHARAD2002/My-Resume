import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Trble.css";

const Trble = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate("/thankYou"); 
  };

  return (
    <div className="Trble-section">
      <h2 className="Trble-title">PASSION</h2>
      <div className="Trble-details">
        <div className="Trble-item">
          <div className="icon">&#128218;</div>
          <div>
            <h3>Broadcast Listening</h3>
            <p>Passionate about gaining knowledge from different
                experts and specialists across various domains such as 
                health, spirituality, astronomy, technology, and sports.</p>
          </div>
        </div>
        
        <div className="Trble-item">
          <div className="icon">&#128218;</div>
          <div>
            <h3>Reading</h3>
            <p> Enthusiastic about reading mythological books</p>
          </div>
        </div>
      </div>
      <button className="get-started-button" onClick={handleGetStarted}>
        Next
      </button>
    </div>
  );
};

export default Trble;
