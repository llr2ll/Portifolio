import './certificates.css';
import React from "react";
import Window from '../window/window';
import {data} from './data';
import Content from './content'

const Certificates = (props) => {

  return (

    <main id="certificates" >

        <h1 className="txt">Certificates</h1>
      
        <section className="Grid">
          
          {data.map( (obj) =>  

            <div key={obj.id} className="Grid-row">
              
                <a className="Card">
                
                  <div className="Card-thumb">
                    
                    <div className="Card-shadow"></div>
                    <div className="Card-shadow"></div>
                    <div className="Card-shadow"></div>
                    <img className="Card-image" src={obj.thumb} />
                    
                    <Window > <Content jsonFilter={obj} /> </Window>
                  </div>
                    
                  <div className="Card-title"> <span>{obj.title}</span> </div>
                  <div className="Card-explore"> <span>Explore More {obj.title2}</span> </div>
                  
                  
                </a>
              
                    

            </div>
        
          )}
                
        </section>
      
    </main>
        
  );
};

export default Certificates;