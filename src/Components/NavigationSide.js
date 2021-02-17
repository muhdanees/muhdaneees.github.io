import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCogs, faToolbox, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Styles from "./NavigationSide.module.css";
function NavigationSide() {
  return (
    <div className={`${Styles.Nav}`}>
      <ul>
          <li className="active"><a href="./"><FontAwesomeIcon icon={faHome} /><span>Home</span></a></li>
          <li><a href="./"><FontAwesomeIcon icon={faUser} /><span>About Us</span></a></li>
          <li><a href="./"><FontAwesomeIcon icon={faCogs} /><span>Skills</span></a></li>
          <li><a href="./"><FontAwesomeIcon icon={faToolbox} /><span>Experience</span></a></li>
          <li><a href="./"><FontAwesomeIcon icon={faGlobe} /><span>Portfolio</span></a></li>
          <li><a href="./"><FontAwesomeIcon icon={faEnvelope} /><span>Contact Us</span></a></li>
      </ul>
    </div>
  )
}

export default NavigationSide;