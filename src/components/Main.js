import React from 'react';
import '../style/main.css'
import line from "../assets/hello-line.svg";
import purpeldot from "../assets/purpel dot.svg";
import greendot from "../assets/green dot.svg";
import heart from "../assets/heart beat.svg";
import name from "../assets/name.svg";
import lamp from "../assets/lamp.svg";

export default function Main() {
  const scrollToProjects = () => {
    const el = document.getElementById('Portfolio') || document.querySelector('#Portfolio');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return(
    <main id='Main' className='reveal-on-scroll'>
      <img src='https://preview.colorlib.com/theme/satner/img/body-bg.png' className='bg-img'></img>
      <img src={purpeldot} className='purpel-dot'></img>
      <img src={greendot} className='green-dot'></img>
      <img src={heart} className='heart1'></img>
      <img src={heart} className='heart2'></img>
      <img src={name} className='name-image'></img>
      <img src={lamp} className='lamp-image1'></img>
      <img src={lamp} className='lamp-image2'></img>
      <div className="banner-container">
          <h3 className="main-title">hello<img className="hello-line" src={line}></img></h3>
          <h1 className="main-name">i aM mansouri Cherif</h1>
          <h5 className="main-info">a Full-Stck web DEVELOPER</h5>
          <button type="button" className="main-button primary_btn" onClick={scrollToProjects}>
            Explore Projects
          </button>
      </div >
      <div className="main-image-wraper">
        <img className="main-image" src="https://preview.colorlib.com/theme/satner/img/banner/home-right.png"></img>
      </div>
        
    </main>
  )
}