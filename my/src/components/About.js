import React from 'react';

export default function About() {

  return(
    <section id='About' className='about-section'>
      <div className='about-conatainer'>
        <div className='about-img-container'>
          <img className="about-image" src="https://preview.colorlib.com/theme/satner/img/about-us.png"></img>
        </div>
        <div className="about-text-container">
          <h2 className='about-tilte'>let’s  Introduce about myself</h2>
          <p className='about-text'>👨‍💻 Hi,I’m Cherif, a  Full-Stack web developer based in Algiers, Algeria.<br /></p>
          <p className='about-text'>Passionate about crafting visually stunning and user-friendly websites. Proficient in HTML, CSS, JavaScript and Next-JS, I transform design concepts into responsive, dynamic experiences. Let's collaborate to bring your digital ideas to life with creativity and precision. 🚀<br /></p>
          <button className="about-btn primary_btn">Hire ME</button>
        </div>
      </div>
      <div>
        <div className='experience-conatainer'>
          <div className='years-experience-conatainer'>
            <div className='year-experience'>2</div>
            <div className='experience-text'>Years <br /> Experience<br /> Working</div>
          </div>
          <div className='call-conatainer'>
            <img className='phone-icon' src='https://static-00.iconduck.com/assets.00/phone-icon-1561x2048-qjhf7be8.png' />
            <div className='phone-number-container'>
              <p>call us now</p>
              <h3>(+213)0775633763</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}