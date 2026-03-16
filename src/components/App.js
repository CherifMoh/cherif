import React from 'react';
import Header from './Header';
import Main from './Main';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <About />
      {/* <Services /> */}
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
