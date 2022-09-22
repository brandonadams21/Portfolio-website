import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../MainSection';
import Footer from '../Footer';
import About from '../About';
import Projects from './Projects';
import Contact from './Contact';

function Home(id='top') {
  return (
    <>
      <HeroSection />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
