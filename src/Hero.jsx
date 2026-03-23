import React from "react";
import './hero.css';
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-content">

        <div className="hero-tag">👋 Hello I'm</div>

        <h2 className="hero-name">
          Vaishshnavi <span>Patil</span>
        </h2>

        <div className="hero-typewriter">
          <span>Full-stack Developer</span>
        </div>

        <p className="hero-desc">
          A passionate developer skilled in MERN stack,
          eager to build beautiful and user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <button className="cv">Download CV</button>
          <button className="cont">
            <HashLink smooth to="/#contact">Let's Talk</HashLink>
          </button>
        </div>

        <div className="links">
          <a href="https://www.linkedin.com/in/vaishnavi-patil-714a97320/"
            target="_blank" rel="noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczeYT0zSJsPvP0KbFJDJ68aXAXWp4cm3nkg&ss" alt="linkedin" />
          </a>
          <a href="https://github.com/Vaishnavi18883/vaishnavi.git"
            target="_blank" rel="noreferrer">
            <img src="https://images.seeklogo.com/logo-png/50/2/github-icon-logo-png_seeklogo-503247.png" alt="github" />
          </a>
        </div>

      </div>

      {/* Decorative right side */}
      <div className="hero-decoration">
        <div className="deco-circle c1"></div>
        <div className="deco-circle c2"></div>
        <div className="deco-circle c3"></div>
        <div className="deco-text">
          <span className="name">VP</span>
        </div>
      </div>

    </div>
  );
}

export default Hero;