import React from "react";
import "./qualifications.css";


 import {FaReact} from 'react-icons/fa';
 import {SiElectron} from 'react-icons/si';
 import {FaNodeJs} from 'react-icons/fa';
 import {SiJavascript} from 'react-icons/si';
 import {FaLaravel} from 'react-icons/fa';
 import {FaCss3Alt} from 'react-icons/fa';
 import {AiOutlineHtml5} from 'react-icons/ai';
 import {GrMysql} from 'react-icons/gr';
 import {DiPhp} from 'react-icons/di';
 import {SiTypescript} from 'react-icons/si';
 import {DiComposer} from 'react-icons/di';
 import {SiXampp} from 'react-icons/si';
 import {SiVuedotjs} from 'react-icons/si';
 import {DiDart} from 'react-icons/di';
 import {SiJson} from 'react-icons/si';
 import {FaGitAlt} from 'react-icons/fa';
 import {AiFillGithub} from 'react-icons/ai';
 import {MdHttp} from 'react-icons/md';
 import {GrArchlinux} from 'react-icons/gr';
 import {SiKalilinux} from 'react-icons/si';
 import {DiPhotoshop} from 'react-icons/di';
 import {SiBlender} from 'react-icons/si';
 import {SiUnrealengine} from 'react-icons/si';
 import {SiUnity} from 'react-icons/si';
 import {FaWordpressSimple} from 'react-icons/fa';



const Qualifications = () => {
  return (
    <div id="about">
      

      <span className="quali-text">My Qualifications</span>
      
      <div  className="about-container">
      
          <div className="qualifications-container">
            <div className="qualification">
              <div className="content html"><AiOutlineHtml5 /></div>
              <h1>Html</h1>
            </div>
            
            <div className="qualification">
              <div className="content css"><FaCss3Alt /></div>
              <h1>CSS</h1>
            </div>
            
            <div className="qualification">
              <div className="content javascript"><SiJavascript /></div>
              <h1>Javascript</h1>
            </div>
            
            <div className="qualification">
              <div className="content nodejs"><FaNodeJs /></div>
              <h1>Nodejs</h1>
            </div>
            
            <div className="qualification">
              <div className="content react"><FaReact /></div>
              <h1>React</h1>
            </div>
            
            <div className="qualification">
              <div className="content electron"><SiElectron /></div>
              <h1>Electron</h1>
            </div>
            
            <div className="qualification">
              <div className="content laravel"><FaLaravel /></div>
              <h1>Laravel</h1>
            </div>
            
            <div className="qualification">
              <div className="content php"><DiPhp /></div>
              <h1>PHP</h1>
            </div>
    
            <div className="qualification">
              <div className="content mysql"><GrMysql /></div>
              <h1>Mysql</h1>
            </div>
    
            <div className="qualification">
              <div className="content typescript"><SiTypescript /></div>
              <h1>Typescript</h1>
            </div>
    
            <div className="qualification">
              <div className="content composer"><DiComposer /></div>
              <h1>Composer</h1>
            </div>
    
            <div className="qualification">
              <div className="content xamp"><SiXampp /></div>
              <h1>XAMP</h1>
            </div>
            
            <div className="qualification">
              <div className="content vue"><SiVuedotjs /></div>
              <h1>Vue</h1>
            </div>
            
            <div className="qualification">
              <div className="content dart"><DiDart /></div>
              <h1>Dart</h1>
            </div>
            
            <div className="qualification">
              <div className="content json"><SiJson /></div>
              <h1>Json</h1>
            </div>
            
            <div className="qualification">
              <div className="content git"><FaGitAlt /></div>
              <h1>Git</h1>
            </div>
            
            <div className="qualification">
              <div className="content github"><AiFillGithub /></div>
              <h1>Git Hub</h1>
            </div>
            
            <div className="qualification">
              <div className="content http"><MdHttp /></div>
              <h1>Http</h1>
            </div>
            
            <div className="qualification">
              <div className="content arch"><GrArchlinux /></div>
              <h1>Arch Linux</h1>
            </div>
    
            <div className="qualification">
              <div className="content kali"><SiKalilinux /></div>
              <h1>Kali Linux</h1>
            </div>
    
            <div className="qualification">
              <div className="content photoshop"><DiPhotoshop /></div>
              <h1>Photoshop</h1>
            </div>
    
            <div className="qualification">
              <div className="content blender"><SiBlender /></div>
              <h1>Blender</h1>
            </div>
    
            <div className="qualification">
              <div className="content unreal"><SiUnrealengine /></div>
              <h1>Unreal Engine</h1>
            </div>
    
            <div className="qualification">
              <div className="content unity"><SiUnity /></div>
              <h1>Unity</h1>
            </div>
    
            <div className="qualification">
              <div className="content wordpress"><FaWordpressSimple /></div>
              <h1>Wordpress</h1>
            </div>
      


          </div>
      </div>
      
    </div>
  );
};

export default Qualifications;
