import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  faMapMarker,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { PageContext } from "../PageContext";
import styles from "./contact.module.scss";

function Contact() {
  const { setPageState } = useContext(PageContext);

  useEffect(() => {
    setPageState("about");
  }, [setPageState]);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbzHtewVqM6UrSkkz3InIJao3UnJQ1ZIbL_SRz8j33EQFaJmIx4/exec",
      { method: "POST", body: new FormData(e.currentTarget) }
    )
      .then((response) => {
        toast("Thanks for Contacting us..! We Will Contact You Soon...");
        e.target.reset();
      } 
    )
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div className="content">
      <div className="container flex-cont">
        <div className="sec-skills">
          <div className="about-me">
            <img src="/about-me.jpg" alt="Mohd Anees" />
          </div>
        </div>
        <div className="sec-divs">
          <div className="address-info">
            <FontAwesomeIcon icon={faMapMarker} /> <strong>Address</strong>
          </div>
          <p>New Delhi, India</p>
          <hr />
          <h2>Contact Us</h2>
          <form className={styles.Form} onSubmit={onSubmit}>
            <div className={`${styles.FormCol} ${styles.FormLabel}`}>
              <label className={styles.FormLabelCol}>
                <input
                  className={styles.FormControl}
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                />
              </label>
              <label className={styles.FormLabelCol}>
                <input
                  className={styles.FormControl}
                  name="phone"
                  type="number"
                  placeholder="Enter Number"
                />
              </label>
            </div>
            <div className={styles.FormCol}>
              <label>
                <input
                  className={styles.FormControl}
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                />
              </label>
            </div>
            <div className={styles.FormCol}>
              <textarea
                className={styles.FormControl}
                name="message"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <div className={`${styles.FormCol} ${styles.SubContainer}`}>
              <button type="submit" className="btn primary">
                <FontAwesomeIcon icon={faLocationArrow} /> Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Contact;
