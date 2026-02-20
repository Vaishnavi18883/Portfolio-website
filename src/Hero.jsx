import React from "react";
import './hero.css';
import { HashLink } from "react-router-hash-link";




const Hero = ()=>{
    return(
        <>

        <div className="hero">
            <div className="links">
                <a href="https://www.linkedin.com/in/vaishnavi-patil-714a97320/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczeYT0zSJsPvP0KbFJDJ68aXAXWp4cm3nkg&ss" alt="" /></a>
                <a href="https://github.com/Vaishnavi18883/vaishnavi.git"><img src="https://images.seeklogo.com/logo-png/50/2/github-icon-logo-png_seeklogo-503247.png" alt="" /></a>
        
            </div>
            <div className="intro">
              <p>Hello I'm</p>
              <h2>Vaishshnavi Patil</h2>
              <h6>Full-stack Developer</h6>
              <button className="cv">Download CV</button>
              <button className="cont">
                <HashLink smooth to = "/#contact">Let's Talk</HashLink>
                </button>
            </div>
          

        </div>
        
        </>
    )
} 
export default Hero;