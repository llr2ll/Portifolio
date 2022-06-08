import './home.css';
import React from "react";
import img from '/jpg/dazai.jpg';
import { BsMouse } from 'react-icons/bs';
import {FaReact} from 'react-icons/fa';
import {SiElectron} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {FaLaravel} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {AiOutlineHtml5} from 'react-icons/ai';
import {GrMysql} from 'react-icons/gr';

function Home() {
  
  return (
    
    <div id='home' className='container home-container'>
      
      <div className='logo'>
        
        <div className=''>

          <span ><FaReact /></span>
          <span ><FaNodeJs /></span>
          <span ><SiJavascript /></span>
          <span ><SiElectron /></span>
          <span ><FaLaravel /></span>
          <span ><FaCss3Alt /></span>
          <span ><AiOutlineHtml5 /></span>
          <span ><GrMysql /></span>
          
        </div>
        
        <img  src={img} alt='' />
        
      </div>

      <a href='#footer' className='scroll-down'>
        
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
        
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Hi, I'm Raphael Sanseverino, a Javascript developer with technical and hands-on experience whose passion 
          is to produce websites that users will enjoy interacting 
          with. I'm an entrepreneur and I'm thirsty for knowledge.
        </p>
      </h2>

    </div>
  );
}

export default Home;

/*
className={isActive ? 'circle active-nav' : 'circle'}
onClik = {changeactive}
*/

//https://bobbyhadz.com/blog/react-add-remove-class-on-click

/*

let toggle = document.querySelector('.hover-show');

setTimeout( () => {toggle.classList.toggle('active')} , 1700)

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

let Icons = document.querySelectorAll('.navigation .icon');

Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icon.classList.add('active-nav');
  });
});
*/