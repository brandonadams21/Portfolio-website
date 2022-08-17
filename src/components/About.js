import React from "react";
import "./About.css";
import styled from 'styled-components'
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiReact, SiGit, SiStyledcomponents, SiSass, SiPostgresql, SiHeroku } from 'react-icons/si';
import { DiSass } from 'react-icons/di'

function About() {
  return (
    <div className="about">
      <h1 className="aboutHeader">About me</h1>
      <p style={{ paddingTop: "10px" }}>
        Full stack developer. From Michigan,
        based in Tennessee.
      </p>
      <h2 className="experienceHeader" style={{paddingTop: '25px'}}>Experience</h2>
      <p style={{paddingTop: '10px'}}>United States Army Infantry</p>
      <p style={{paddingTop: '10px'}}>Joint Special Operations Command</p>
      <p style={{paddingTop: '10px'}}>United States Army Data Warfare</p>
      <h2 className="educationHeader" style={{paddingTop: '25px'}}>Education</h2>
      <p style={{paddingTop: '10px'}}>Galvanize SDI</p>
      <p style={{paddingTop: '10px'}}>Universty of Penn State 2022-2026</p>
      <div>
        {/* <h2 style={{textAlign: 'center'}}>Skills</h2>
      <p class="marquee" >
  <span style={{fontSize: '50px'}}><SiJavascript style={{marginRight:'75px'}}/><SiHeroku style={{marginRight:'75px'}}/><SiStyledcomponents style={{marginRight:'75px'}}/><i class="fab fa-golang"/><SiTypescript style={{marginRight:'75px'}}/><SiHtml5 style={{marginRight:'75px'}}/><SiCss3 style={{marginRight:'75px'}}/><DiSass style={{marginRight:'75px'}}/><SiReact style={{marginRight:'75px'}}/><SiGit style={{marginRight:'75px'}}/>&nbsp;</span>;
</p> */}
{/* <p class="marquee marquee2" >
  <span style={{fontSize: '50px'}}><SiJavascript style={{marginRight:'75px'}}/><SiHeroku style={{marginRight:'75px'}}/><SiStyledcomponents style={{marginRight:'75px'}}/><i class="fab fa-golang"/><SiTypescript style={{marginRight:'75px'}}/><SiHtml5 style={{marginRight:'75px'}}/><SiCss3 style={{marginRight:'75px'}}/><DiSass style={{marginRight:'75px'}}/><SiReact style={{marginRight:'75px'}}/><SiGit style={{marginRight:'75px'}}/>&nbsp;</span>;
</p> */}
</div>
    </div>
  );
}

export default About;
