import {useState,useEffect} from 'react';
import logo from "../assets/logo.svg";

export default function Header() {
  const [scrollDown , setScroll] =useState(false)
  const [colapsed , setColapsed] =useState(false)


  function slectedSection(string){
    const button = document.querySelector(string); 
    if(!button.classList.contains('selected-nav')){
      setScroll(true)
      document.querySelector('.header-container').style.height = '70px';
      document.querySelector('.top-header').style.boxShadow = '0px 3px 16px 0px rgba(0, 0, 0, 0.1)';
      turnOffPreviousNav()
      button.classList.add('selected-nav');
    }
  }

  function turnOffPreviousNav(){
      const previousButton = document.querySelector('.selected-nav');
      if(previousButton ){
          previousButton.classList.remove("selected-nav");
      }
  }

  function selctNavOnScroll(){
    const currentScroll = document.documentElement.scrollTop;
    if(currentScroll<900){
      slectedSection('.home')
      return 0
    }
    if(currentScroll<2400){
      slectedSection('.about')
      return 0
    }
    if(currentScroll<4500){
      slectedSection('.portfolio')
      return 0
    }
    if(currentScroll>4500){
      slectedSection('.contact')
      return 0
    }
  }

  function scrollHandler (){
    const currentScroll = document.documentElement.scrollTop;
    selctNavOnScroll()
    if (currentScroll > 100) {
      setScroll(true)
      document.querySelector('.header-container').style.height = '70px';
      document.querySelector('.top-header').style.boxShadow = '0px 3px 16px 0px rgba(0, 0, 0, 0.1)';
    }else if(currentScroll <= 100){
      document.querySelector('.header-container').style.height = '100px';
      document.querySelector('.top-header').style.boxShadow = '';
      setScroll(false)
    }
  }


  useEffect(()=>{
    window.addEventListener('wheel', scrollHandler)
    return ()=>window.removeEventListener('wheel', scrollHandler)
  },[])

  const styles=scrollDown ? {
    position:'fixed',
    top: '0',
    transition:' top 100s ease-in-out',
    animation: 'header 0.5s ease-in-out',
  }:{}

  function togglerColapsed(){
    setColapsed(perColaps=>!perColaps)
  }

  const colapsStyle =window.innerWidth < 1000?
    {
      translate: colapsed?'0 ':'0 -900px',
      transition: colapsed?'all 1s ease-out -0.5s':'all 1s ease-out 0s',
    }:{
      translate: '0 ',  
    }

  return(
    <header className='top-header'  style={styles}>
      <div className='header-container'>
        <div className='log-btn-header'>
          <a href='#' className="logo-container">
              <img className="logo" src={logo} alt="" />
          </a>
          <button className={`navbar-toggler`} onClick={togglerColapsed}>
            <span className={`icon-bar ${colapsed && 'icon-topBar-colapsed'}`}></span>
            <span className={`icon-bar ${colapsed && 'icon-medBar-colapsed'}`}></span>
            <span className={`icon-bar ${colapsed && 'icon-lowBar-colapsed'}`}></span>
          </button>
         </div>
        <nav style={colapsStyle} className="navbar-container">
          <div className='navbar-w'>
                <a href='#' onClick={()=>slectedSection('.home')} className="selected-nav navBar-elements home">Home</a>
                <a href='#About' onClick={()=>slectedSection('.about')} className="navBar-elements about">About</a>
                <a href='#Portfolio' onClick={()=>slectedSection('.portfolio')} className="navBar-elements portfolio">portfolio</a>
                <a href='#Contact' onClick={()=>slectedSection('.contact')} className="navBar-elements contact">contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
