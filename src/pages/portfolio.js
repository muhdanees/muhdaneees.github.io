import { useContext, useEffect } from "react";
import { PageContext } from "../PageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import styles from "./skills.module.scss";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Portfolio() {
  const { setPageState } = useContext(PageContext);

  useEffect(() => {
    setPageState("portfolio");
  }, [setPageState]);

  return (
    <div className="content">
      <div className="container flex-cont">
        <div className="sec-skills">
          <div className="about-me">
            <img src="/about-bg.jpg" alt="" />
          </div>
        </div>
        <div className="sec-divs">
          <h2>Portfolio</h2>
          <p>
            A front-end developer with having versatile ability to solve lots of
            things along with 8 years of great industry experience.
          </p>
          <p>
            I have diverse experience as I have worked with agencies and brands
            dealing in different industries. This includes Enterprise software
            companies, Media houses, Branding and Advertising agencies. Each has
            its own set of challenges and learnings. This has enabled me to
            venture into unknown territories without much thought.
          </p>
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
                <span>www.hindustantimes.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.hindustantimes.com</h3>
                      <a
                        href="https://www.hindustantimes.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.hindustantimes.com
                      </a>
                      <ul>
                        <li>
                          Fundamental knowledge of application development using
                          technology like <strong>HTML5</strong>,{" "}
                          <strong>CSS3</strong>, <strong>SCSS/LESS</strong>,{" "}
                          <strong>Flexbox</strong>, <strong>Grid</strong>,{" "}
                          <strong>JavaScript</strong>, <strong>jQuery</strong>,{" "}
                          <strong>Responsive</strong> <strong>GIT</strong> from starting etc.
                        </li>
                        <li>
                          A desired to work in a fast-paced and challenging
                          environment as I am working here.
                        </li>
                        <li>
                          <strong>Wrote clean</strong>, <strong>modular</strong>{" "}
                          web-based <strong>SAAS</strong> applications in an
                          agile and <strong>ever-changing</strong> environment
                          in this project which I have completed and working on
                          widgets and sections
                        </li>
                        <li>
                          <strong>Debug</strong>, and refactor existing
                          applications and software modules as required Quickly
                          respond to <strong>critical support</strong> issues in
                          digital media project.
                        </li>
                        <li>
                          Work with Software Architect to understand coding{" "}
                          <strong>standards</strong> and{" "}
                          <strong>architectural</strong> practices
                        </li>
                        <li>
                          <strong>Assist</strong> Other Sr. Engineers with other
                          tasks as allined.
                        </li>
                        <li>
                          Develop highly interactive web applications utilizing{" "}
                          <strong>JavaScript</strong>, <strong>HTML5</strong>,{" "}
                          <strong>CSS3(SCSS/functions/mixins/variables)</strong>
                          , and external web services ensuring high performance
                          on <strong>Mobile</strong> and{" "}
                          <strong>Desktop</strong>.
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> VS Code, Zeplin, GIT
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/hindustan.jpg" alt="" />
                <span>www.livehindustan.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.livehindustan.com</h3>
                      <a
                        href="https://www.livehindustan.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.livehindustan.com
                      </a>
                      <ul>
                        <li>
                          worked on this project as few months on election time
                        </li>
                        <li>
                          as reqired many widgets for elections along with
                          charts etc.
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> VS Code, Zeplin, HighCharts for
                        charts making
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/desimartini.jpg" alt="" />
                <span>www.desimartini.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.desimartini.com</h3>
                      <a
                        href="https://www.desimartini.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.desimartini.com
                      </a>
                      <ul>
                        <li>
                          Worked started on this project when i joned this
                          organisation <strong>(Hindustan Times Media)</strong>
                        </li>
                        <li>
                          Implement lots of things that time required from
                          Product
                        </li>
                        <li>
                          Converted PSD to HTML5 along with CSS3 alos worked on
                          Mobile as seperate Mobile application
                        </li>
                        <li>
                          wrote code from scratch and romved jQueery mobile for
                          best performance
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Sublime Text 3, Photoshop
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/dfurnishing.jpg" alt="" />
                <span>www.dfurnishingdreamz.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.dfurnishingdreamz.com</h3>
                      <a
                        href="http://www.dfurnishingdreamz.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.dfurnishingdreamz.com
                      </a>
                      <ul>
                        <li>
                          Fully, I made this design and developement along with
                          logo as you are watching
                        </li>
                        <li>
                          Bootstrap 4, for Responsive deisgn developement and
                          Adobe XD for Template deisgn
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> VS Code, Adobe XD
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/fincalci.jpg" alt="" />
                <span>www.fincalci.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.dfurnishingdreamz.com</h3>
                      <a
                        href="http://www.fincalci.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.fincalci.com
                      </a>
                      <ul>
                        <li>
                          I designed and developement this project as requried
                          things from documents and delivered smoothly
                        </li>
                        <li>RWD with Bootstrap 4</li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> VS Code, Adobe XD
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/4square.jpg" alt="" />
                <span>www.4squarepromotions.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.4squarepromotions.com</h3>
                      <a
                        href="http://4squarepromotions.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.4squarepromotions.com
                      </a>
                      <ul>
                        <li>
                          I worked for this company, fully all things like logo,
                          visiting cards, envelope, letterhead, and hoarding
                          design too.
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Illustrator, Adobe XD
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/dmagnus.jpg" alt="" />
                <span>www.dmagnuslighting.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.dmagnuslighting.com</h3>
                      <a
                        href="http://www.dmagnuslighting.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.dmagnuslighting.com
                      </a>
                      <ul>
                        <li></li>
                        <li>
                          I made a funtastic logo for this company in
                          Illustrator
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Illustrator
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/zureka.jpg" alt="" />
                <span>www.Zureka.in</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.Zureka.in</h3>
                      <a
                        href="http://www.Zureka.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.Zureka.in
                      </a>
                      <ul>
                        <li>
                          I worked started on this project after joining the
                          copany Cloudchowk Solutions pvt ltd.
                        </li>
                        <li>
                          It was very usefull project as doctors and patients it
                          was the digital bridge between parients and doctors
                        </li>
                        <li>
                          Custome Design Pdf generator with backend developers
                          in Jquery and JavaScript. was working smoothly
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Sublime Text 3, Dreamviewer,
                        Notepad++, Photoshop
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/healthscion.jpg" alt="" />
                <span>crm.healthscion.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>crm.healthscion.com</h3>
                      <a
                        href="https://crm.healthscion.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        crm.healthscion.com
                      </a>
                      <ul>
                        <li>
                          It was running project when i joned still was running
                          perfectly
                        </li>
                        <li>worked with .Net developers in this project</li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Sublime Text 3, Dreamviewer,
                        Notepad++
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/ipgprojects.jpg" alt="" />
                <span>admin.ipgprojects.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>admin.ipgprojects.com</h3>
                      <a
                        href="https://admin.ipgprojects.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        admin.ipgprojects.com
                      </a>
                      <ul>
                        <li>
                          worked with LifeRay developers for completing this
                          projects
                        </li>
                        <li>I didn't now about LifeRay before worked on it.</li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Dreamviewer, Photoshop,
                        Notepad++, LifeRay
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/energylineindia.jpg" alt="" />
                <span>www.energylineindia.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.energylineindia.com/</h3>
                      <a
                        href="https://www.energylineindia.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.energylineindia.com
                      </a>
                      <ul>
                        <li>
                          It was running project that time i was joined this
                          organisation (Indian Petro Group)
                        </li>
                        <li>
                          I was maintaining this project from starting as i
                          joned this organization
                        </li>
                        <li>
                          can check the menu of this project its was superb for
                          me
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Dreamviewer, Photoshop,
                        Notepad++, LifeRay
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/indianpetrochem.jpg" alt="" />
                <span>www.indianpetrochem.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.indianpetrochem.com</h3>
                      <a
                        href="https://indianpetrochem.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.indianpetrochem.com
                      </a>
                      <ul>
                        <li>
                          It was running project that time i was joined this
                          organisation (Indian Petro Group)
                        </li>
                        <li>
                          I was maintaining this project from starting as i
                          joned this organization
                        </li>
                        <li>
                          I designed and implement lots of thing on this project
                          full covered menu with superb designed
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Dreamviewer, Photoshop,
                        Notepad++, LifeRay
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={styles.Item}>
                <img src="/excelaccessconsultant.jpg" alt="" />
                <span>www.excelaccessconsultant.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.excelaccessconsultant.com</h3>
                      <a
                        href="https://excelaccessconsultant.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.excelaccessconsultant.com
                      </a>
                      <ul>
                        <li>
                          I designed and developed this website for SEO purpose
                          whitch was for Organisation (Oscillate Infotech Pvt.
                          Ltd.) that time i was working on this organisation
                        </li>
                        <li>I started work RWD from this time</li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Dreamviewer, Photoshop,
                        Notepad++
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>

              <div className={styles.Item}>
                <img src="/access-programmer.jpg" alt="" />
                <span>www.access-programmer.org</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.access-programmer.org</h3>
                      <a
                        href="http://www.access-programmer.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.access-programmer.org
                      </a>
                      <ul>
                        <li>
                          I designed and developed this website for SEO purpose
                          whitch was for Organisation (Oscillate Infotech Pvt.
                          Ltd.) that time i was working on this organisation
                        </li>
                        <li>I started work RWD from this time</li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Dreamviewer, Photoshop,
                        Notepad++
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>

              <div className={styles.Item}>
                <img src="/sesi.jpg" alt="" />
                <span>www.sesi.in</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.sesi.in</h3>
                      <a
                        href="https://www.sesi.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.sesi.in
                      </a>
                      <ul>
                        <li>
                          I designed and developed this website for out client
                          along with header animation in flash that was superb
                          that time, not still running...
                        </li>
                        <li>
                          check this design in the section of Portfolio{" "}
                          <a href="http://makbog.com/">http://makbog.com</a>. I
                          was working in this organisation that time (Makbod
                          Solutions Pvt ltd.)
                        </li>
                        <li>
                          I started work in DIVs becuase that time developers
                          was working in Table structure
                        </li>
                        <li>
                          I worked as <strong>wordpress developer</strong> in
                          this organisation
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Dreamviewer, Photoshop, flash,
                        Notepad++
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>

              <div className={styles.Item}>
                <img src="/makbog.jpg" alt="" />
                <span>www.makbog.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.makbog.com</h3>
                      <a
                        href="http://makbog.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.makbog.com
                      </a>
                      <ul>
                        <li>
                          I designed and developed HTMl and CSS. Also, I
                          designed this logo for this organisation before joined
                          this company
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Dreamviewer, Photoshop,
                        Notepad++
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>

              <div className={styles.Item}>
                <img src="/samay.jpg" alt="" />
                <span>www.samaywatch.com</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                    <button className={styles.close}></button>
                      <h3>www.samaywatch.com</h3>
                      <a
                        href="http://www.samaywatch.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.samaywatch.com
                      </a>
                      <ul>
                        <li>
                          I designed and developed HTMl and CSS along with Flash
                          animations for Banner fo the website. Also i worked on
                          this website in Pure DIVs as you can see the code in
                          view pages source code.
                        </li>
                        <li>
                          I was working that time in Modulus Systems Private
                          Limited as Webn Designer. But you can check this
                          design in section of Portfolio{" "}
                          <a href="http://makbog.com/">http://makbog.com</a>{" "}
                          which was my second company.
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Dreamviewer, Photoshop, Flash,
                        Notepad++
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>

              <div className={styles.Item}>
                <img src="/linkorg.jpg" alt="" />
                <span>www.link.org.in</span>
                <div className={styles.hoverItem}>
                  <FontAwesomeIcon icon={faRetweet} />
                  <Popup
                    trigger={<button type="button">More Details...</button>}
                    modal
                  >
                    <div className={styles.projectDetails}>
                      <button className={styles.close}></button>
                      <h3>www.link.org.in</h3>
                      <a
                        href="http://www.link.org.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.link.org.in
                      </a>
                      <ul>
                        <li>
                          I designed and developed HTMl and CSS along with Flash
                          animations for Banner fo the website. Also i worked on
                          this website in Pure DIVs as you can see the code in
                          view pages source code.
                        </li>
                        <li>
                          I was working that time in Modulus Systems Private
                          Limited as Webn Designer. It was my First Company.
                        </li>
                      </ul>
                      <p>
                        <strong>Tools:</strong> Dreamviewer, Photoshop, Flash,
                        Notepad
                      </p>
                    </div>
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
