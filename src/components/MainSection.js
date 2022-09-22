import React from "react";
import "../App.css";
import "./MainSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>
        <p style={{ height: "60px", paddingTop: "40px" }}>
          <span class="text">H</span>
          <span class="text">e</span>
          <span class="text">y</span>
          <span class="text">,</span>
        </p>
        <p style={{ paddingTop: "50px" }}>
          <span class="text">I</span>
          <span class="text">'</span>
          <span class="text">m</span>
          <span class="text" style={{ marginLeft: "15px" }}>
            Brandon
          </span>
        </p>

        <p style={{ height: "60px", paddingTop: "20px" }}>
          <span class="text">F</span>
          <span class="text">u</span>
          <span class="text">l</span>
          <span class="text">l</span>
          <span class="text">s</span>
          <span class="text">t</span>
          <span class="text">a</span>
          <span class="text">c</span>
          <span class="text">k</span>
        </p>
        <p style={{ height: "200px", paddingTop: "15px" }}>
          <span class="text">D</span>
          <span class="text">e</span>
          <span class="text">v</span>
          <span class="text">e</span>
          <span class="text">l</span>
          <span class="text">o</span>
          <span class="text">p</span>
          <span class="text">e</span>
          <span class="text">r</span>
        </p>
        <a href="#contact" className="text">
          Contact me!
        </a>
      </h1>
      <div className="social-icons">
        <a
          class="social-icon-link linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/brandon-adams-93966b239"
          aria-label="LinkedIn"
          style={{}}
        >
          <i class="fab fa-linkedin" />
        </a>
        <a
          class="social-icon-link linkedin"
          target="_blank"
          href="https://github.com/brandonadams21"
          aria-label="LinkedIn"
          style={{ marginLeft: "14px" }}
        >
          <i class="fab fa-github" />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
