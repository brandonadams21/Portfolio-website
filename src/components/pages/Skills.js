import React from "react";
import './Skills.css'
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiReact, SiGit, SiStyledcomponents, SiSass, SiPostgresql, SiHeroku } from 'react-icons/si';
import { DiSass } from 'react-icons/di'

function Skills() {
  
  return (
    <>
     <div class="card">
    <h1>Skills and Technologies
      <div class="scroller">
        
        <span>
        
        <span className='span2'><SiTypescript/></span><br/>
        <span className='span3'><SiHtml5/></span><br/>
        <span className='span4'><SiCss3/></span><br/>
        <span className='span5'><DiSass/></span><br/>
        <span className='span6'><SiReact/></span><br/>
        <span className='span7'><SiGit/></span>
        </span>
      </div>
    </h1>
  </div>
  <div className="scroller"></div>
      <p style={{color: 'white', width: '50%', height: '50%', fontSize: '25px', paddingTop: '100px', marginLeft: '40px'}}>
        Languages
      </p>
      <span className='span1'><SiJavascript/></span>
      <span className='span1'><SiTypescript/></span>
      <br/>
      <div className="scroller1">
      <p style={{color: 'white', width: '50%', height: '50%', fontSize: '25px', paddingTop: '100px', marginLeft: '40px'}}>
        Front-End
      </p>
      <span className='span1'><SiHtml5/></span>
      <span className='span1'><SiCss3/></span>
      <span className='span1'><SiReact/></span>
      <span className='span1'><SiStyledcomponents/></span>
      <span className='span1'><SiSass/></span>
      </div>
      <div className="scroller1">
      <p style={{color: 'white', width: '50%', height: '50%', fontSize: '25px', paddingTop: '100px', marginLeft: '40px'}}>
        Back-End
      </p>
      <span className='span1'><SiPostgresql/></span>
      <i class="fab fa-golang"></i>
      </div>
      <div className="scroller1">
      <p style={{color: 'white', width: '50%', height: '50%', fontSize: '25px', paddingTop: '100px', marginLeft: '40px'}}>
        Tools
      </p>
      <span className='span1'><SiGit/></span>
      <span className='span1'><SiHeroku/></span>
      </div>
      <p  style={{color: 'white', width: '50%', height: '50%', fontSize: '25px', marginLeft: '40px', marginBottom: '50px'}}>
          Visit my <a style={{color: 'rgb(81, 193, 241)'}} href="https://www.linkedin.com/in/brandon-adams-93966b239">LinkedIn</a> and <a style={{color: 'rgb(81, 193, 241)'}} href="/contact">contact</a> me for more details!
      </p>
    </>
  );
}

export default Skills;
