
import './certificates.css';
import React from "react";
import ReactDom from 'react-dom';
import Window from '../window/window';


const Certificates = () => {
  
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
          title2: 'React',
          img1: 'https://robohash.org/1',
          img2: 'https://robohash.org/1',
          img3: 'https://robohash.org/1'
        },
        {
          id: 3,
          thumb: 'https://robohash.org/1',
          title: 'Others',
          title2: 'Others',
          img1: 'https://robohash.org/1',
          img2: 'https://robohash.org/1',
          img3: 'https://robohash.org/1'
        }
  ]

  function open() {
    const root = ReactDom.createRoot(document.getElementById('modalTarget'));
    const window = React.createElement(Window, {modalContent: data}, null);
    root.render(window);
  }

  return (
      
    <main id="certificates" >

        <h1 className="txt">Certificates</h1>
      
        <section className="Grid">
          
          {data.map((data) =>  

            <div key={data.id} onClick={open} className="Grid-row">
              
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
          
            </div>
        
          )}
                
        </section>
      
    </main>
        
  );
};

export default Certificates;
