import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCogs, faToolbox, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Styles from "./NavigationSide.module.css";
function NavigationSide() {
  return (
    <div className={`${Styles.Nav}`}>
      <ul>
          <li className="active"><a href="./"><span>Home</span><FontAwesomeIcon icon={faHome} /></a></li>
          <li><a href="./"><span>About Us</span><FontAwesomeIcon icon={faUser} /></a></li>
          <li><a href="./"><span>Skills</span><FontAwesomeIcon icon={faCogs} /></a></li>
          <li><a href="./"><span>Experience</span><FontAwesomeIcon icon={faToolbox} /></a></li>
          <li><a href="./"><span>Portfolio</span><FontAwesomeIcon icon={faGlobe} /></a></li>
          <li><a href="./"><span>Contact Us</span><FontAwesomeIcon icon={faEnvelope} /></a></li>
      </ul>
    </div>
  )
}

export default NavigationSide;