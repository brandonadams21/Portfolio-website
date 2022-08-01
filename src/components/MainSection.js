import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>
        <p style={{height: '90px'}}>
        <span class='text'>T</span>
        <span class='text'>H</span>
        <span class='text'>E</span>
        </p>
        <p style={{height: '90px'}}>
        <span class='text'>F</span>
        <span class='text'>U</span>
        <span class='text'>T</span>
        <span class='text'>U</span>
        <span class='text'>R</span>
        <span class='text'>E</span>
        </p>
        <p style={{height: '90px'}}>
        <span class='text'>A</span>
        <span class='text'>W</span>
        <span class='text'>A</span>
        <span class='text'>I</span>
        <span class='text'>T</span>
        <span class='text'>S</span>
        </p>
      </h1>
      <p>Checkout this dope website</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
