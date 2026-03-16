import React from 'react';
import instIcon from '../assets/instagram_.svg';
import githubIcon from '../assets/github.svg';


export default function Contact() {

  return(
    <section id='Contact' className='contact-section'>
      <h2 className='contact-title'>Contact Us</h2>
      <p className='contact-title-text'>TELL ME MORE ABOUT YOUR AMAZING PROJECT !</p>
      <div className='contact-body-wrpper'>
        <div className='contact-email-wrpper'>
          <div className='contact-email-tilte'>By email</div>
          <a href='mailto:chchch7002@gmail.com' className='email-text'>chchch7002@gmail.com</a>
        </div>
        <div className='contact-socials-wrpper'>
          <div className='contact-socials-tilte'>ON SOCIAL MEDIAS</div>
          <div className='contact-socials-icons-wrpper'>
            <a className="contact-socials-circle" href="https://instagram.com/cherif_moh7/" title="Instagram link">
              <img src={instIcon} alt="Instagram"></img>
            </a>
            <a className="contact-socials-circle" href="https://github.com/CherifMoh" title="GitHub link">
              <img src={githubIcon} alt="GitHub"></img>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  )
}
