import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="background-animation" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;