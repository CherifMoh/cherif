import React from 'react';
import {ServicesData} from "../data/Services-data";



export default function Services() {


  const cartElemnt = ServicesData.map((Service)=>{
    return(
      <div key={Service.id} className='service-card'>
          <img className={Service.imgClasse} src={Service.img} alt=""></img>
          <h4 className='service-title'>{Service.title}</h4>
          <p className='service-text'>{Service.text}</p>
      </div>
    )
  })


  function cardRotation(){
    document.querySelectorAll('.service-card').forEach(element=>{
      element.addEventListener('mousemove', e=> {
        var mouseX = e.clientX - element.getBoundingClientRect().left;
        var mouseY = e.clientY - element.getBoundingClientRect().top;
        
        var rotationX = (mouseY / element.clientHeight - 0.5) * 360; 
        var rotationY = (mouseX / element.clientWidth - 0.5) * 360;
        
        element.style.transform = 'rotateX(' + rotationY/10 + 'deg) rotateY(' + rotationX/10 + 'deg)';
        element.style.transition= '';
      });
      
      
      element.addEventListener('mouseleave',  ()=>{
        element.style.transition= 'transform 0.2s ease-in-out';
        element.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    })
  }
  setTimeout(cardRotation,1)


  return(
    <section id='Services' className='Services-section'>
    <header className='Services-header'>
      <h2 className='Services-header-tile'>SERVICE OFFERS</h2>
      <p className='Services-header-text'>
      Explore our expertly crafted services and bring your ideas to life 
        <br /> 
      </p>
    </header>
    <div className='cards-container'>{cartElemnt}</div>
  </section>
  )
}
