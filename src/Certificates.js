import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Certificates.css";

const Certificates = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate("/Trble"); 
  };

  const certificates = [
    { id: 1, title: "Gujarat Grassroots Innovation Augmentation Network", image: "/images/Gian.jpeg" },
    { id: 2, title: "Web- Developer completion certificate", image: "/images/Farmayu.jpeg" },
    { id: 3, title: "State Level Technical Quiz Competition", image: "/images/State Level Technical Quiz Competition.jpeg" },
    { id: 4, title: "Ethical hacking - Mobile Platforms and Network Architectures", image: "/images/EH - Mobile.jpeg" },
    { id: 5, title: "Linux Tutorial", image: "/images/Linux.jpeg" },
    { id: 6, title: "Introduction to Ethical Hacking", image: "/images/Intro to EH.jpeg" },
  ];

  return (
    <div className="certificates-section">
      <h2 className="section-title">CERTIFICATES</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-item">
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <div className="certificate-overlay">
              <div className="certificate-title">{cert.title}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="get-started-button" onClick={handleGetStarted}>
        Next
      </button>
    </div>
  );
};

export default Certificates;
