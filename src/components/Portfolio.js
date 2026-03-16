import React from 'react';
import corse from '../assets/corse.svg';
import {ProjectsData} from '../data/projects-data.js';

export default function Portfolio() {

  const projectsElemnt = ProjectsData.map(project=>{
    return(
      <a key={project.id} href={project.link} className='project-card-container' target="_blank" rel="noopener noreferrer">
        <div className='project-card-img-container'>
          <img className='project-card-img' src={project.img} alt={project.title} />
          <div className='overlay'>
          </div>
            <img className='overlay-img' src={corse} alt="" />
        </div>
        <p className='project-card-title'>{project.title}</p>
        <p className='project-card-text'>{project.text}</p>
      </a>
    )
  })

  return(
    <section id='Portfolio' className='Portfolio-section'>
        <h2 className='Portfolio-title'>
        QUALITY WORK<br />
        RECENTLY DONE PROJECT
        </h2>
        <div className='projects-container'>
          {projectsElemnt}
        </div>
    </section>
  )
}
