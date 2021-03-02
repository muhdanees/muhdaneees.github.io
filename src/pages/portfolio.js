import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { PageContext } from "../PageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet} from "@fortawesome/free-solid-svg-icons";
import styles from "./skills.module.scss";

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
                      <img src="/hindustan.jpg" alt="" />
                      <Link to="https://www.livehindustan.com/">www.livehindustan.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/desimartini.jpg" alt="" />
                      <Link to="https://www.desimartini.com/">www.desimartini.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/dfurnishing.jpg" alt="" />
                      <Link to="http://www.dfurnishingdreamz.com/">www.dfurnishingdreamz.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/fincalci.jpg" alt="" />
                      <Link to="https://www.fincalci.com/">www.fincalci.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/4square.jpg" alt="" />
                      <Link to="http://4squarepromotions.com/">www.4squarepromotions.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/dmagnus.jpg" alt="" />
                      <Link to="http://www.dmagnuslighting.com/">www.dmagnuslighting.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/zureka.jpg" alt="" />
                      <Link to="http://www.Zureka.in/">www.Zureka.in</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/healthscion.jpg" alt="" />
                      <Link to="https://crm.healthscion.com/">crm.healthscion.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/ipgprojects.jpg" alt="" />
                      <Link to="https://admin.ipgprojects.com/">admin.ipgprojects.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/energylineindia.jpg" alt="" />
                      <Link to="https://www.energylineindia.com/">www.energylineindia.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/indianpetrochem.jpg" alt="" />
                      <Link to="https://indianpetrochem.com/">www.indianpetrochem.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    <div className={styles.Item}>
                      <img src="/excelaccessconsultant.jpg" alt="" />
                      <Link to="https://excelaccessconsultant.com/">www.excelaccessconsultant.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>

                    <div className={styles.Item}>
                      <img src="/access-programmer.jpg" alt="" />
                      <Link to="http://www.access-programmer.org/">www.access-programmer.org</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>

                    <div className={styles.Item}>
                      <img src="/sesi.jpg" alt="" />
                      <Link to="https://www.sesi.in/">www.sesi.in</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    

                    <div className={styles.Item}>
                      <img src="/makbog.jpg" alt="" />
                      <Link to="http://makbog.com/">www.makbog.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>


                    <div className={styles.Item}>
                      <img src="/samay.jpg" alt="" />
                      <Link to="http://www.samaywatch.com/">www.samaywatch.com</Link>
                      <div className={styles.hoverItem}>
                        <FontAwesomeIcon icon={faRetweet} />
                        <button type="button">More Details...</button>
                      </div>
                    </div>
                    

                    <div className={styles.Item}>
                      <img src="/linkorg.jpg" alt="" />
                      <Link to="http://www.link.org.in/">www.link.org.in</Link>
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