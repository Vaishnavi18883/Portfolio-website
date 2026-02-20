import React from "react";
import './education.css';
const Education = (()=>{
    return(
        <>

        <div className="education">
            <p className="title">The education I have</p>
            <h3 className="titletwo">Education</h3>
        </div>
        <div className="edu">
            <div className="class">
                <div className="university">
                <p>Shivaji University, Kolhapur</p>
                <p>2022-2025</p>
                </div>
              <div className="university">
              <p>B.Com (IT)</p>
              <p className="percent">79.80%</p>
              </div>
            </div>
            <div className="class">
                <div className="university">
                <p>Kolhapur Divsional Board</p>
                <p>March 2022</p>
                </div>
              <div className="university"><p>HSC</p>
              <p className="percent">72.50%</p>
              </div>

            </div>
            <div className="class">
                <div className="university">
                <p>Kolhapur Divsional Board</p>
                <p>March 2020</p>
                </div>
              <div className="university">
               <p>SSC</p>
              <p className="percent">88.80%</p>
              </div>
                
            </div>
        </div>
        
        </>
    )

})
export default Education;
