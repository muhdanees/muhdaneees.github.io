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
                <div><FontAwesomeIcon icon={faMapMarker} /> <strong>Address</strong></div>
                <p>New Delhi, India</p>
                <hr />
                <h2>Contact Form</h2>
                <input type="text" placeholder="Enter Name" />
                <input type="number" placeholder="Enter Number" />
                <input type="email" placeholder="Enter Email" />
                <textarea>Enter Message</textarea>
                <button type="button"><FontAwesomeIcon icon={faLocationArrow} /> Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact;