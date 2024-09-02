import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Objective from './Objective';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Header from './Header';
import Certificates from './Certificates';
import Trble from './Trble';
import ThankYou from './ThankYou';



function App() {
  return (
    <Router>
      <Header /> 
      <div className="App" style={{ paddingTop: '100px' }}> 
        <Routes>
          <Route path="/" element={<Objective />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} /> 
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Trble" element={<Trble />} /> 
          <Route path="/ThankYou" element={<ThankYou />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
