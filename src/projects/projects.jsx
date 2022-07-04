import React from 'react';
import './projects.css';
import {data} from './data';

function Projects() {
    
  return (
    <>
      <h1 className='projects-title'>Projects I Worked</h1>
      <div className="projects">
        {data.map( (obj) =>
         <a href={obj.link} key={obj.id} className="project">
            <div className="project-div">
              <img src={obj.img} />
            </div>
         </a>
        )}
      </div>
    </>
      
  );
}
export default Projects;