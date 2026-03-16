import React from 'react';
import phoneIcon from '../assets/phone-call.svg';

export default function About() {

  return(
    <section id='About' className='about-section'>
      <div className='about-conatainer'>
        <div className='about-img-container'>
          <img className="about-image" src="https://preview.colorlib.com/theme/satner/img/about-us.png" alt="" />
        </div>
        <div className="about-text-container">
          <h2 className='about-tilte'>let's Introduce about myself</h2>
          <p className='about-text'>
            I design and build production-ready SaaS platforms and complex backend systems, delivering scalable architectures, secure APIs, and maintainable code. I have hands-on experience working on multiple freelance projects and currently serve as co-founder and backend engineer at Tassyir, a multi-tenant e-commerce platform.
          </p>
          <p className='about-text'>
            I approach development as system design first, solving technical challenges end-to-end and delivering robust, production-ready solutions. I'm seeking remote opportunities where I can contribute to building scalable, reliable, and secure platforms.
          </p>
          <button className="about-btn primary_btn">Hire ME</button>
        </div>
      </div>
      <div>
        <div className='experience-conatainer'>
          <div className='years-experience-conatainer'>
            <div className='year-experience'>4+</div>
            <div className='experience-text'>Years <br /> Experience<br /> Working</div>
          </div>
          <a href="tel:+213667355516" className='call-conatainer'>
            <img className='phone-icon' src={phoneIcon} alt="Phone" />
            <div className='phone-number-container'>
              <p>call us now</p>
              <h3 className='phone-number'>(+213)0667355516</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
