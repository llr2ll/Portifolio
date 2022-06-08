import React from "react";
import "./qualifications.css";
import {data} from './data';

const Qualifications = () => {

  return (
    
    <div id="about">
    
      <span className="quali-text">My Qualifications</span>
      
      <div  className="about-container">
      
        <div className="qualifications-container">
            
          {data.map((data) =>  
      
            <div key ={data.id} className="qualification" >
  
              <div className="content framework" style={{ color:data.color }}>{data.img}</div>
              <h1>{data.title}</h1>
              
            </div>
                    
          )}
      
        </div>
    
      </div>
      
    </div>
  );
};

export default Qualifications;