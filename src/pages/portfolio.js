<<<<<<< Updated upstream
import { useContext, useEffect } from "react";
import { PageContext } from "../PageContext";

=======
import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet} from "@fortawesome/free-solid-svg-icons";
import styles from "./skills.module.scss";
>>>>>>> Stashed changes
function Portfolio() {
  const { setPageState } = useContext(PageContext)

  useEffect(() => {
    setPageState("portfolio")
  }, [setPageState])

  return (
    <div className="content">
        <div className="container flex-cont">
            <div className="sec-skills">
                <div className="about-me">
                  <img src='/about-bg.jpg' alt="" />
                </div>
            </div>
            <div className="sec-divs">
                <h2>Portfolio</h2>
                <p>A front-end developer with having versatile ability to solve lots of things along with 8 years of great industry experience.</p>
                <p>I have diverse experience as I have worked with agencies and brands dealing in different industries. This includes Enterprise software companies, Media houses, Branding and Advertising agencies. Each has its own set of challenges and learnings. This has enabled me to venture into unknown territories without much thought.</p>
                <div className={styles.Portfolio}>
                  <ul>
                    <li className="active">All</li>
                    <li>HTML5/CSS3</li>
                    <li>Logos</li>
                    <li>Template Designs</li>
                    <li>AMP</li>
                    <li>Widgets</li>
                  </ul>
                  <div className={styles.FolioCont}>
                    <div className={styles.Item}>
                      <img src="/hindustantimes.jpg" alt="" />
                      <Link to="https://www.hindustantimes.com/">www.hindustantimes.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/hindustantimes.jpg" alt="" />
                      <Link to="https://www.hindustantimes.com/">www.hindustantimes.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/hindustantimes.jpg" alt="" />
                      <Link to="https://www.hindustantimes.com/">www.hindustantimes.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/hindustantimes.jpg" alt="" />
                      <Link to="https://www.hindustantimes.com/">www.hindustantimes.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio;