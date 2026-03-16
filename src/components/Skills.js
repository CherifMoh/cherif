import React from 'react';
import {skills} from '../data/Skills-data.js';

export default function Skills() {

  const skillsElemnt = skills.map(project=>{
    return(
      <div key={project.id} className='skill-card'>
          <img src={project.skillImg} className='skill-card-img' alt={project.skillName} />
          <div className='skill-card-name' >{project.skillName}</div>
      </div>
    )
  })


  return(
    <section className='skills-section'>
      <h1 className='skills-title'>What I'm good at</h1>  
      <div className='skills-cards-container'>
        {skillsElemnt}
      </div>
    </section>
  )
}
