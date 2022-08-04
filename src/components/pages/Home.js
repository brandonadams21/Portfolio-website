import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../MainSection';
import Footer from '../Footer';
import About from '../About';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <About />
      <Footer />
    </>
  );
}

export default Home;
