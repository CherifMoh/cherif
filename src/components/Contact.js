import React from 'react';
import linkedInIcon from '../assets/free-linkedin-icon-130-thumb.png';
import githubIcon from '../assets/github.svg';
import whatsappIcon from '../assets/whatsapp_logo_icon_186881.webp';


export default function Contact() {

  return(
    <section id='Contact' className='contact-section reveal-on-scroll'>
      <h2 className='contact-title'>Contact Us</h2>
      <p className='contact-title-text'>TELL ME MORE ABOUT YOUR AMAZING PROJECT !</p>
      <div className='contact-body-wrpper reveal-on-scroll'>
        <div className='contact-email-wrpper'>
          <div className='contact-email-tilte'>By email</div>
          <a href='mailto:mansouricherifdev@gmail.com' className='email-text'>mansouricherifdev@gmail.com</a>
        </div>
        <div className='contact-socials-wrpper'>
          <div className='contact-socials-tilte'>ON SOCIAL MEDIAS</div>
          <div className='contact-socials-icons-wrpper'>
            <a
              className="contact-socials-circle"
              href="https://linkedin.com/in/cherif-mansouri-5034a1367"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn link"
            >
              <img src={linkedInIcon} alt="LinkedIn"></img>
            </a>
            <a
              className="contact-socials-circle"
              href="https://github.com/CherifMoh"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub link"
            >
              <img src={githubIcon} alt="GitHub"></img>
            </a>
            <a
              className="contact-socials-circle"
              href="https://wa.me/213667355516"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp link"
            >
              <img src={whatsappIcon} alt="WhatsApp"></img>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  )
}
