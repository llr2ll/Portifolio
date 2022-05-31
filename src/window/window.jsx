import './window.css';
import React from "react";
import Modal from 'react-modal';

//https://codepen.io/arthurcamara1/pen/KaMBZg
//https://www.pluralsight.com/guides/iterate-through-a-json-response-in-jsx-render-for-reactjs
//https://www.devmedia.com.br/react-js-utilizando-o-metodo-map/42902
//https://www.npmjs.com/package/react-modal

const Window = () => {
  
  Modal.setAppElement('#root');
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(){
    setIsOpen(true);  
  }

 function closeModal(){
    setIsOpen(false);
 }

  return (  
    
         <Modal isOpen={modalIsOpen}  onRequestClose={closeModal} className="modal">
                          
              <button className="close" onClick={closeModal}>×</button>
                      
          </Modal>
    
  );
};
export default Window;