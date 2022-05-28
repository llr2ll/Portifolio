import './home.css';
import React from "react";
import img from '../jpg/dazai.jpg';
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
        <div className='hover-show'>
          <span className='circle'><FaReact /></span>
          <span className='circle'><FaNodeJs /></span>
          <span className='circle'><SiJavascript /></span>
          <span className='circle'><SiElectron /></span>
          <span className='circle'><FaLaravel /></span>
          <span className='circle'><FaCss3Alt /></span>
          <span className='circle'><AiOutlineHtml5 /></span>
          <span className='circle'><GrMysql /></span>
          
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
          Hi, I'm Raphael Sanseverino an Javascript developer with technical and hands-on experience whose passion is to produce websites that users will enjoy interacting 
          with. I'm an entrepreneur and I'm thirsty to learn.
        </p>
      </h2>

    </div>
  );
}

export default Home;