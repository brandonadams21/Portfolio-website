import React, { useEffect } from "react";
import "./About.css";
  

function About() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
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
      <p style={{paddingTop: '10px'}}>Universty of Penn State 2022-2026
      <div
      style={{textAlign: "center"}}
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="small"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="brandon-adams-93966b239"
        data-version="v1"
      >
       <a
          class="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/brandon-adams-93966b239?trk=profile-badge"
        />
      </div>
      </p>
    </div>
  );
}

export default About;
