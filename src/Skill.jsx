import React from "react";
import './skill.css';


const Skill =()=>{
    return(
        <>

    <div className="skill">
            <p className="title">The Skills I Have</p>
            <h3 className="titletwo">Skills</h3>
        </div>
        <div className="skills">
        <div className="frontend">
            <ul typeof="none">
            <img src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-260nw-2654740721.jpg" alt="" />
            <li>HTML</li>
            <img src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-260nw-2654740721.jpg" alt="" />
            <li>CSS</li>
            <img src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-260nw-2654740721.jpg" alt="" />
            <li>Javascript</li>
            <img src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-260nw-2654740721.jpg" alt="" />
            <li>Bootstrap </li>
            <img src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-260nw-2654740721.jpg" alt="" />
            <li>React</li>
            </ul>
        </div>
        <div className="backend">
            <ul>
                <img src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-260nw-2654740721.jpg" alt="" />
                <li>My SQL</li>
                <img src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-260nw-2654740721.jpg" alt="" />
                <li>Mongo DB</li>
                <img src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-260nw-2654740721.jpg" alt="" />
                <li>Express JS</li>
                <img src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-260nw-2654740721.jpg" alt="" />
                <li>Node JS</li>
                <img src="https://www.shutterstock.com/image-vector/blue-check-mark-vector-illustration-260nw-2654740721.jpg" alt="" />
                <li>Git/Github</li>
            </ul>
        </div>
       
     </div>

        </>
    );
}
export default Skill;