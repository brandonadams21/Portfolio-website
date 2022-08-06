import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../MainSection';
import Footer from '../Footer';
import About from '../About';
import Projects from './Projects';

function Home() {
  return (
    <>
      <HeroSection />
      
      <Projects />
      <About />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
