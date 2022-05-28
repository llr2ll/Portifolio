import React from "react";
import './ct.css';
import Modal from 'react-modal';
//https://codepen.io/arthurcamara1/pen/KaMBZg
//https://www.pluralsight.com/guides/iterate-through-a-json-response-in-jsx-render-for-reactjs
//https://www.devmedia.com.br/react-js-utilizando-o-metodo-map/42902
//https://www.npmjs.com/package/react-modal

export default function CT() {

var data = [
       {
          id: 1,
          thumb: 'https://robohash.org/1',
          title: 'Javascript',
          title2: 'js',
          img1: 'https://robohash.org/1',
          img2: 'https://robohash.org/1',
          img3: 'https://robohash.org/1'
        },
        {
          id: 2,
          thumb: 'https://robohash.org/1',
          title: 'React',
          title2: 'React'
        },
        {
          id: 3,
          thumb: 'https://robohash.org/1',
          title: 'Others',
          title2: 'Others'
        }
]
  

  Modal.setAppElement('#root');
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openGallery(){

    setIsOpen(true);
     
  }

  
 function closeModal(){
   
   setIsOpen(false);
   
 }
  
  return (

      
    <main id="ct" >
      

        <h1 className="txt">Formation</h1>
      
        <section className="Grid">
          
          {data.map((data) =>  
  
            <div key ={data.id} onClick={ openGallery } className="Grid-row">
              
                <a className="Card">
                
                  <div className="Card-thumb">
                    
                    <div className="Card-shadow"></div>
                    <div className="Card-shadow"></div>
                    <div className="Card-shadow"></div>
                    <img className="Card-image" src={data.thumb} />
                    
                  </div>
                    
                  <div className="Card-title"> <span>{data.title}</span> </div>
                  <div className="Card-explore"> <span>Explore More {data.title2}</span> </div>
                  <button className="Card-button">view more</button>
                  
                </a>
                  
                <Modal isOpen={modalIsOpen}  onRequestClose={closeModal} className="modal">
                        
                        <button className="close" onClick={ closeModal }>×</button>
                        <img src={data.img1} />
                        <img src={data.img2} />
                        <img src={data.img3} />
                  
                </Modal>
              
            </div>
        
          )}
                
        </section>

      
      
    </main>
      
      
          
  );
}
