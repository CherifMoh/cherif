import React, { useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal-on-scroll'));

    if (elements.length === 0) return;

    // Small stagger so the page doesn't feel completely simultaneous.
    // Kept small so the animation starts early (not "late").
    elements.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${Math.min(i, 6) * 40}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('reveal-on-scroll--visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('reveal-on-scroll--visible');
          observer.unobserve(entry.target);
        });
      },
      {
        // Trigger a bit earlier than "fully in view".
        threshold: 0.08,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
