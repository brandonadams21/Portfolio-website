import React, { useEffect } from "react";
import "./About.css";
  

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
      <p style={{paddingTop: '10px'}}>Universty of Penn State 2022-Current</p>
    </div>
  );
}

export default About;
