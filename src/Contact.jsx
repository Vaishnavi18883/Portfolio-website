import React from "react";
import './contact.css'

const Contact =(()=>{
    return(
        <>
        <div className="contact">
            <p className="title">Get In Touch</p>
            <h3 className="titletwo">Contact Me </h3>
        </div>
        <div className="con">
        <div className="email">
          <img src="https://cdn-icons-png.flaticon.com/512/6711/6711567.png" alt="" />
          <p>Email</p>
          <p>patilvaishnavi1022@gmail.com</p>
          <p className="sendmsg"><a href="mailto:patilvaishnavi1022@gmail.com">Send Message</a></p>
        </div>
        <div className="maildetails">
            <input type="text" placeholder="Your Full Name" /><br/>
            <input type="email" placeholder="Your Email" /><br/>
            <input type="text" placeholder="Your Message" id="message" /> <br/>
            <button className="cont">Send Message</button>
        </div>
        </div>
        </>
    )
})
export default Contact;