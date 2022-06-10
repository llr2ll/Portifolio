import './certificates.css';
import React from 'react';

const Content = (props) => {
  return (
    <>
      {
        props.jsonFilter.content.map((certificate) => 
            <div key={certificate.id} className="certificateModal">
              <img className="certificateImg" src={certificate.img} />
            </div>
        )
      }
    </>
  )
}

export default Content;
