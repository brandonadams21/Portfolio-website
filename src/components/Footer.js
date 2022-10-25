import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <div className="input-areas"></div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items"></div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items"></div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img
                src="BA.png"
                alt="Footer Logo"
                style={{ width: "80px", height: "80px" }}
              ></img>
            </Link>
          </div>
          <div class="website-rights">&copy; Brandon Adams 2022</div>
          <div className="social-icons">
            <a
              class="social-icon-link linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/brandon-adams-93966b239"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{}}
            >
              <i class="fab fa-linkedin" />
            </a>
            <a
              class="social-icon-link linkedin"
              target="_blank"
              href="https://github.com/brandonadams21"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ marginLeft: "14px" }}
            >
              <i class="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
