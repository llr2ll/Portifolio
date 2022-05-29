import "./formation.css";
import React from "react";
import Modal from 'react-modal';

const Formation = () => {

  var data = [
    {
      id: 1,
      title1: 'Javascript',
      title2: 'Back-end',
      text: 'Completed 7 training courses with a workload of 40 hours.',
      thumb:'../jpg/teste1.png',
      img:'../jpg/JS_back-end.jpg'
    },
    {
      id: 2,
      title1: 'React',
      title2: 'JS',
      text: 'Completed 9 training courses with an estimated workload of 100 hours.',
      thumb:'../jpg/teste2.png',
      img:'../jpg/React JS.jpg'
    },
  ]
  
  Modal.setAppElement('#root');
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(){

    setIsOpen(true);
     
  }

  
 function closeModal(){
   
   setIsOpen(false);
   
 }
  
  
  return (
    
      <main id="formation" className="container formation-container" >
      

        <h1 className="formation-txt">Formation</h1>
      
          
          {data.map((data) =>  
  
            <div key ={data.id} className="formation">
              
                    <img src={data.thumb} className="formation-img" onClick={openModal} />
                    
                    <div className="formation-info">
                      
                        <h1 className="name">{data.title1}</h1>
                        
                        <h3 className="position">{data.title2}</h3>
                        
                        <h4 className="about">{data.text}</h4>
                        
                        <a href="#contact" className="contact-formation"> <span>contact</span> </a>
                      
                    </div>
        
                
                    <Modal isOpen={modalIsOpen}  onRequestClose={closeModal} className="modal">
                          
                          <button className="close" onClick={closeModal}>×</button>
                          <img src={data.img} className="img"></img>
                          
                    </Modal>
              
            </div>
        
          )}
      
    </main>
    
    
  );
};

export default Formation;
