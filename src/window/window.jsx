import './window.css';
import React from "react";
import Modal from 'react-modal';

const Window = (props) => {
  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!modalIsOpen);

  return (
    <>   
         <button className="Card-button" onClick={toggle}>view more</button>

         <Modal isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={toggle} className="modal">
           
            {props.children}
            <button className="close" onClick={toggle}>×</button>  
           
          </Modal>
    </>
  );
};

export default Window;
