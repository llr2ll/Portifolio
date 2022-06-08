
import React, { useState } from 'react';
import {data} from './data';
import './certificates.css';

const Content = (props) => {

  return (
    <>
      {
        props.jsonFilter.content.map((certificate) =>{

          return(
            
            <div key={certificate.id} className="certificateModal">
              <img className="certificateImg" src={certificate.img}></img>
            </div>
          )
            
      
        })
      }
    </>
  )
}


export default Content;