import "./formation.css";
import React from "react";
import Modal from 'react-modal';
import img1 from '../jpg/JS_back-end.jpg';
import img2 from '../jpg/React JS.jpg';

const Formation = () => {

  Modal.setAppElement('#root');
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(){

    setIsOpen(true);
     
  }

  
 function closeModal(){
   
   setIsOpen(false);
   
 }
  
  
  return (
    
    <div id="formation" className="container members-container">
      
        <h1 className="member-txt">Formation</h1>
        
        <div className="member member-1">
          
              <div className="member-img" onClick={openModal}></div>
              
              <div className="member-info">
                
                  <h1 className="name">JavaScript</h1>
                  
                  <h3 className="position">Back-end</h3>
                  
                  <h4 className="about">
                    Completed 7 training courses with a workload of 40 hours.
                  </h4>
                  
                  <a href="#contact" className="contact-member">
                    <span>contact</span>
                  </a>
                
              </div>
  
          
              <Modal isOpen={modalIsOpen}  onRequestClose={closeModal} className="modal">
                    
                    <button className="close" onClick={ closeModal }>×</button>
                    <img src={img1} className="img"></img>
                    
              </Modal>
  
          
        </div>



      <div className="member member-2">
        
          <div className="member-img2" onClick={openModal}></div>
        
          <div className="member-info">
            
              <h1 className="name">React</h1>
              
              <h3 className="position">JS</h3>
              
              <h4 className="about">
                Completed 9 training courses with an estimated workload of 100 hours
              </h4>
              
              <a href="#contact" className="contact-member">
                
                <span>contact</span>
                
              </a>
            
          </div>
        
           <Modal isOpen={modalIsOpen}  onRequestClose={closeModal} className="modal">
                
                <button className="close" onClick={ closeModal }>×</button>
                <img src={img2} className="img"></img>
                
           </Modal>
        
      </div>
      
      

      
    </div>

    
    
  );
};

export default Formation;
