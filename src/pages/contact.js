import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="content">
        <div className="container flex-cont">
            <div className="sec-skills">
                <div className="about-me">
                  <img src='/about-bg.jpg' alt="" />
                </div>
            </div>
            <div className="sec-divs">
                <div className="address-info"><FontAwesomeIcon icon={faMapMarker} /> <strong>Address</strong></div>
                <p>New Delhi, India</p>
                <hr />
                <h2>Contact Form</h2>
                <div className="formelement">
                  <ul>
                    <li><input type="text" placeholder="Enter Name" /></li>
                    <li><input type="number" placeholder="Enter Number" /></li>
                  </ul>
                </div>
                <div className="formelement">
                  <ul>
                    <li><input type="email" placeholder="Enter Email" /></li>
                  </ul>
                </div>
                <div className="formelement">
                  <ul>
                    <li><textarea>Enter Message</textarea></li>
                  </ul>
                </div>
                <div className="formelement">
                  <button type="button" className="btn primary"><FontAwesomeIcon icon={faLocationArrow} /> Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;