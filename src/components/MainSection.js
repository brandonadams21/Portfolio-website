import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function HeroSection() {
  return (
    <div className='hero-container' >
      <h1>
        <p style={{height: '90px'}}>
        <span class='text'>H</span>
        <span class='text'>e</span>
        <span class='text'>y</span>
        <span class='text'>,</span>
        </p>
        <p style={{height: '90px', position: 'relative'}}>
        <span class='text'>I</span>
        <span class='text'>'</span>
        <span class='text'>m</span>
        <span class='text' style={{marginLeft: '50px'}}>Brandon</span>
        <span class='text'>,</span>
       </p>
       
        <p style={{height: '90px'}}>
        <span class='text'>F</span>
        <span class='text'>u</span>
        <span class='text'>l</span>
        <span class='text'>l</span>
        <span class='text'>s</span>
        <span class='text'>t</span>
        <span class='text'>a</span>
        <span class='text'>c</span>
        <span class='text'>k</span>
        </p>
        <p style={{height: '90px'}}>
          <span class='text'>D</span>
          <span class='text'>e</span>
          <span class='text'>v</span>
          <span class='text'>e</span>
           <span class='text'>l</span>
           <span class='text'>o</span>
           <span class='text'>p</span>
           <span class='text'>e</span>
           <span class='text'>r</span>
        </p>
      </h1>
      <p>Checkout this dope website</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
