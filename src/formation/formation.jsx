import "./formation.css";
import React from "react";
import ReactDom from 'react-dom';
import Window from '../window/window';


//      thumb:'../jpg/teste1.png',
//      img:'../jpg/JS_back-end.jpg'
//            thumb:'../jpg/teste2.png',
 //           img:'../jpg/React JS.jpg'


//       <Window> <img src={data.img} className="img"></img> </Window>

const Formation = () => {

  var data = [
    {
      id: 1,
      title1: 'Javascript',
      title2: 'Back-end',
      text: 'Completed 7 training courses with a workload of 40 hours.',

    },
    {
      id: 2,
      title1: 'React',
      title2: 'JS',
      text: 'Completed 9 training courses with an estimated workload of 100 hours.',

    },
  ]
  
  function open() {
    const root = ReactDom.createRoot(document.getElementById('modalTarget'));
    const window = React.createElement(Window, {modalContent: data}, null);
    root.render(window);
  }

  return (
    
      <main id="formation" className="container formation-container" >
      

        <h1 className="formation-txt">Formation</h1>
      
          
          {data.map((data) =>  
  
            <div key ={data.id} className="formation">
              
                    <img src={data.thumb} className="formation-img" onClick={open} />
                    
                    <div className="formation-info">
                      
                        <h1 className="name">{data.title1}</h1>
                        
                        <h3 className="position">{data.title2}</h3>
                        
                        <h4 className="about">{data.text}</h4>
                        
                        <a href="#contact" className="contact-formation"> <span>contact</span> </a>
                      
                    </div>
        
                
             
              
            </div>
        
          )}
      
    </main>
    
    
  );
};

export default Formation;
