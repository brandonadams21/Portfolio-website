import React from "react";
import "./About.css";
  

function About() {
  return (
    <div className="about" id="aboutMe">
      <h1 className="aboutHeader">About me</h1>
      <p style={{ paddingTop: "10px" }}>
        Full stack developer. From Michigan,
        based in Tennessee.
      </p>
      <h2 className="experienceHeader" style={{paddingTop: '50px'}}>Experience</h2>
      <p style={{paddingTop: '10px'}}>United States Army Infantry</p>
      <p style={{paddingTop: '10px'}}>Joint Special Operations Command</p>
      <p style={{paddingTop: '10px'}}>101st ABN DIV Innovations Team</p>
      <h2 className="educationHeader" style={{paddingTop: '50px'}}>Education</h2>
      <p style={{paddingTop: '10px'}}>Galvanize SDI</p>
      <p style={{paddingTop: '10px'}}>Universty of Penn State 2022-Current</p>
    </div>
  );
}

export default About;
