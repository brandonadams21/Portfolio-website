import React from "react";
import './Skills.css'

function Skills() {
  return (
    <>
   <div id="sphere">
  <div class="circ" style={{color: 'white'}}>aaaaa</div>
  <div class="circ" style={{color: 'white'}}>bbbbb</div>
  <div class="circ" style={{color: 'white'}}>ccccc</div>
  <div class="circ" style={{color: 'white'}}>ddddd</div>
  <div class="circ" style={{color: 'white'}}>eeeee</div>
  <div class="circ" style={{color: 'white'}}>ffffffff</div>
</div>

      <h1 style={{ color: "rgb(81, 193, 241)", fontSize: '50px', float: 'left', marginLeft: '40px' }}>Skills & Experience</h1>
      <br/>
      <p style={{color: 'white', width: '50%', height: '50%', fontSize: '25px', paddingTop: '100px', marginLeft: '40px'}}>I started my coding journey in August of 2021. During that time I did not think I would be 
      creating this website so early in my career. Currently I am doing remote work for Joint Special Operations Command and have been doing that
      since April of 2022. 
      </p>
      <br/>
      <p style={{color: 'white', width: '50%', height: '50%', fontSize: '25px', marginLeft: '40px'}}>
        During my time with JSOC I have worked on team creating an app specifed towards mission effiency. 
        I have worked with JavaScript, TypeScript, HTML, CSS, and GoLang. We have built that application using TDD as our main focus.
      </p>
      <br/>
      <p style={{color: 'white', width: '50%', height: '50%', fontSize: '25px', marginLeft: '40px'}}>
          After my time with JSOC I will be working for the 18th ABN Corps of the United States Army.
          Shortly after that time I will be starting my civilian carrer. I am currently enrolled and taking classes at 
          the Universty of Penn State. I am studying to become a software engineer.
      </p>
      <br/>
      <p  style={{color: 'white', width: '50%', height: '50%', fontSize: '25px', marginLeft: '40px', marginBottom: '50px'}}>
          Visit my <a style={{color: 'rgb(81, 193, 241)'}} href="https://www.linkedin.com/in/brandon-adams-93966b239">LinkedIn</a> and <a style={{color: 'rgb(81, 193, 241)'}} href="/contact">contact</a> me for more details!
      </p>
      
    </>
  );
}

export default Skills;
