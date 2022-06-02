import React from "react";
import "./experience.css";
import unimes from "/jpg/unimes.png";
import hercules from "/jpg/hercules.png"


function Experience() {
  return (

    <div className="experience-container">
       
      <h1>I Worked For</h1>
      
      <div className="experience-links">

        <a href="https://portal.unimes.br" className="experience1" target={"blank"}>
          <img src={unimes} className="icon" />
          <h2>Unimes</h2>
        </a>
        
        <a href="https://h8oficial.com" className="experience2" target={"blank"}>
          <img src={hercules} className="icon" />
          <h2>Hércules 8</h2>
        </a>


        
      </div>
      
    </div>
  );
}

export default Experience;