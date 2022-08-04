import React from "react";
import "./About.css";
import styled from 'styled-components'

const AboutGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(1, 1fr)',
});

const DivCol = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0px',
    width: '100%',
    height: '100%',
  });

function About() {
    // let amount = 200;
    // let body = document.querySelector('body');
    // let iterator = 0; 
    // while(iterator < amount){
    //     let drop = document.createElement('iterator');
    //     let size = Math.random() * 5;
    //     let posX = Math.floor(Math.random() * window.innerWidth)
    //     let delay = Math.random() * -20;
    //     let duration = Math.random() * 5;

    //     drop.style.width = .02 + size + 'px';
    //     drop.style.left = posX + 'px';
    //     drop.style.animationDelay = delay + 's';
    //     drop.style.animationDuration = 1 + duration + 's';
    //     body.appendChild(drop);
    //     iterator++
    // }
  return (
    <div className="about">
        <body>
      <h1>About me</h1>
      <p style={{ paddingTop: "25px" }}>
        I am a young and eager to learn full stack developer. From Michigan,
        based in Tennessee.
      </p>
      <AboutGrid>
      <DivCol style={{gridColumn: '1', gridRow: '1'}}>
      <h2 style={{paddingTop: '20px'}}>Main Skills</h2>
      <p style={{paddingTop: '10px'}}>JavaScript</p>
      <p style={{paddingTop: '10px'}}>TypeScript</p>
      <p style={{paddingTop: '10px'}}>CSS</p>
      <p style={{paddingTop: '10px'}}>React</p>
      <p style={{paddingTop: '10px'}}>HTML</p>
      <p style={{}}>Frontend</p>
      </DivCol>
      <DivCol style={{gridColumn: '2', gridRow: '1'}}>
      <h2 style={{paddingTop: '25px'}}>Experience</h2>
      <p style={{paddingTop: '10px'}}>Joint Special Operations Command</p>
      <p style={{paddingTop: '10px'}}>current</p>
      </DivCol>
      <DivCol style={{gridColumn: '2'}}>
      <h2 style={{paddingTop: '25px'}}>Education</h2>
      <p style={{paddingTop: '10px'}}>Galvanize SDI</p>
      <p style={{paddingTop: '10px'}}>Universty of Penn State 2022-2026</p>
      </DivCol>
      </AboutGrid>
      </body>
    </div>
  );
}

export default About;
