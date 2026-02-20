import React, { useEffect } from "react";
import './about.css';
import Photo from'./images/Photo.jpg';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";





const About = (()=>{
    
    return(
        <>

        <div className="about">
            
            <p className="title">Get to Know</p>
            <h3 className="titletwo">About Me</h3>
           
            <div className="bg"></div>
             <div className="aboutme">
            <div className="pic">
                <img src={Photo}alt="" />
        
            </div>
            <div className="info">
                <p>
                    I am passionate Full Stack Web Developer<br/> with developing Full Stack web applications<br/>
                    with HTML,CSS,JAVASCRIPT,REACT.JS . <br/>I am strongly interested in 
                    learning <br/> new technologies and implementing them in my projects.<br/>
                    I am hardworking individual who is <br/>always ready to learn new things and 
                    work in new new team.
                </p>
                < HashLink smooth to= '/#contact'className="cont">Let's Talk</HashLink>
            </div>

         </div>
        </div>
        </>
    )
})
export default About;