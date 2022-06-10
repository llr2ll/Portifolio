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
//https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3
//https://namespaceit.com/blog/uncaught-error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-infinite-loop
function Home() {

  const [verify, setVerify] = React.useState(false);
  let arr = [];
  
 setInterval(function() {
   
  let distance = 1 - new Date().getTime();

  if (distance < 0) {
    setVerify(true);
  }
}, 1700);

  if(verify == true){
     arr.push('hover-show'+' '+'active')
  }

  return (
    <div id='home' className='container home-container'>
      
      <div  className='logo'>
              
        <div className={arr} >
          <span className='circle'><FaReact /></span>
          <span className='circle' ><FaNodeJs /></span>
          <span className='circle'><SiJavascript /></span>
          <span className='circle'><SiElectron /></span>
          <span className='circle'><FaLaravel /></span>
          <span className='circle'><FaCss3Alt /></span>
          <span className='circle'><AiOutlineHtml5 /></span>
          <span className='circle'><GrMysql /></span>
          
        </div>
        
        <img  src={img}/>
        
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