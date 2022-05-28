import React from "react";
import './ct.css';
import img1 from '../jpg/teste2.png';
//https://codepen.io/arthurcamara1/pen/KaMBZg


 function openGallery(id) {
  closeAll();  
  const gallery = document.getElementById('gallery-' + id);
  const card = document.getElementById('card-' + id);
   gallery.classList.add('Gallery--active');
   card.classList.add('Card--active');
}

function closeAll() {
  const galleryActv = document.querySelector('.Gallery--active');
  const cardActv = document.querySelector('.Card--active');
  if (galleryActv) {
    galleryActv.classList.remove('Gallery--active');
  }
  if (cardActv) {
    cardActv.classList.remove('Card--active');
  }
}

function CT() {
  return (
<>
  
<section id="ct" className="Grid">
  
  <div className="Grid-row">


    
    
    <a className="Card" onClick={openGallery(1)} id="card-1">
      
      <div className="Card-thumb">
        <div className="Card-shadow"></div>
        <div className="Card-shadow"></div>
        <div className="Card-shadow"></div>
        <div className="Card-image"></div>
      </div>
      <div className="Card-title"><span>Super interesting card</span></div>
      <div className="Card-explore"><span>Explore 50 more</span></div>
      <button className="Card-button">view more</button>
      
    </a>



    
    <a className="Card" onClick={openGallery(2)} id="card-2">
      
      <div className="Card-thumb">
        <div className="Card-shadow"></div>
        <div className="Card-shadow"></div>
        <div className="Card-shadow"></div>
        <div className="Card-image"></div>
      </div>
      
      <div className="Card-title"><span>Super interesting card</span></div>
      <div className="Card-explore"><span>Explore 50 more</span></div>
      <button className="Card-button">view more</button>
      
    </a>


    

    
    <a className="Card" onClick={openGallery(3)} id="card-3">
      <div className="Card-thumb">
        <div className="Card-shadow"></div>
        <div className="Card-shadow"></div>
        <div className="Card-shadow"></div>
        <div className="Card-image"></div>
      </div>
      <div className="Card-title"><span>Super interesting card</span></div>
      <div className="Card-explore"><span>Explore 50 more</span></div>
      <button className="Card-button">view more</button>
    </a>

    
  </div>
  
</section>

  
<section className="Gallery" id="gallery-1">
  
  <div className="Gallery-header">
    <a className="Gallery-close" onClick={closeAll()}>×</a></div>
    <div className="Gallery-images">
    <div className="Gallery-left">
      <div className="Gallery-image"></div>
      <div className="Gallery-image"></div>
    </div>
    <div className="Gallery-image Gallery-image--primary"></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  
</section>


  

  
<section className="Gallery" id="gallery-2">
  
  <div className="Gallery-header"><a className="Gallery-close" onClick={closeAll()}>×</a></div>
  <div className="Gallery-images">
    <div className="Gallery-left">
      <div className="Gallery-image"></div>
      <div className="Gallery-image"></div>
    </div>
    <div className="Gallery-image Gallery-image--primary"    ></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  
</section>



  
<section className="Gallery" id="gallery-3">
  
  <div className="Gallery-header"><a className="Gallery-close" onClick={closeAll()}>×</a></div>
  <div className="Gallery-images">
    <div className="Gallery-left">
      <div className="Gallery-image"></div>
      <div className="Gallery-image"></div>
    </div>
    <div className="Gallery-image Gallery-image--primary"    ></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
  </div>
  <div className="Gallery-images">
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    <div className="Gallery-image"></div>
    
  </div>
  
</section>
  
</>
  
  );
}

export default CT;