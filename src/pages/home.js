import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faToolbox } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <>
        <div className="about-section">
            <div className="container flex-cont">
                <div className="sec-skills">
                    <div className="about-me">
                      <img src='/about-bg.jpg' alt="" />
                    </div>
                    <div className="home-skills">
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>jQuery</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
                <div className="sec-divs">
                    <h1>Mohd Anees</h1>
                    <div className="Work-postion">Front-end Developer</div>
                    <p>11+ Years of Industry experience in providing User Interface Designing/Development  with most usable enterprise wide applications. Described as the Education of websites,  UI Developers are responsible for writing the code that lives behind every webpage.  Using their creativity and technical knowledge, they plan, build and maintain the structure of a website.</p>
                    <a href="./contact-us/" className="btn primary"><FontAwesomeIcon icon={faDownload} /> Download CV</a>
                    {/* <a href="./contact-us/" className="btn secondary"><FontAwesomeIcon icon={faToolbox} /> Experience</a> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;