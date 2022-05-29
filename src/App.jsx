import React from 'react';
import './App.css';
import Home from "./home/home";
import Qualifications from './qualifications/qualifications';
import Contact from './contact/contact';
import Nav from './nav/nav';
import Certificates from './certificates/certificates';
import Formation from "./formation/formation";
import Experience from "./experience/experience";
import Footer from "./footer/footer";

function App() {
  return (
    
    <>
      
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Nav />
      <Home />
      <Qualifications />
      <Certificates />
      <Experience />
      <Formation />
      <Footer />
      <Contact />
      
    </>
      
  );
}

export default App;