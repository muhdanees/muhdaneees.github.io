import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import styles from "./contact.module.scss";
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
              <h2>Contact Us</h2>
              <form className={styles.Form}>
                <div className={`${styles.FormCol} ${styles.FormLabel}`}>
                  <label className={styles.FormLabelCol}>
                    <input className={styles.FormControl} type="text" placeholder="Enter Name" />
                  </label>
                  <label className={styles.FormLabelCol}>
                    <input className={styles.FormControl} type="number" placeholder="Enter Number" />
                  </label>
                </div>
                <div className={styles.FormCol}>
                  <label>
                    <input className={styles.FormControl} type="email" placeholder="Enter Email" />
                  </label>
                </div>
                <div className={styles.FormCol}>
                  <textarea className={styles.FormControl}>Enter Message</textarea>
                </div>
                <div className={`${styles.FormCol} ${styles.SubContainer}`}>
                  <button type="button" className="btn primary"><FontAwesomeIcon icon={faLocationArrow} /> Send</button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;