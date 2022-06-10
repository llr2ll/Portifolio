import "./formation.css";
import React from "react";
import ReactDom from 'react-dom';
import Window from '../window/window';
import {data} from './data';
//       <Window> <img src={data.img} className="img"></img> </Window>
const Formation = () => {
/*
  function open() {
    const root = ReactDom.createRoot(document.getElementById('modalTarget'));
    const window = React.createElement(Window, {modalContent: data}, null);
    root.render(window);
  }
*/
  return (

      <main id="formation" className="container formation-container" >
      
        <h1 className="formation-txt">Formation</h1>
          
          {data.map((obj) =>  
  
            <div key ={obj.id} className="formation">
              
                    <div className="warp">
                      <img className="formation-img" src={obj.thumb} />
                      <button className="button">view more</button>  
                      <Window className="warp"> <img className="img" src={obj.img}/> </Window>  
                    </div>

                    <div className="formation-info">
                      
                        <h1 className="name">{obj.title1}</h1>
                        
                        <h3 className="position">{obj.title2}</h3>
                        
                        <h4 className="about">{obj.text}</h4>
                        
                        <a href="#contact" className="contact-formation"> <span>contact</span> </a>
                        
                    </div>
              
                    
            </div>
        
          )}
      
    </main>
  
  );
};

export default Formation;