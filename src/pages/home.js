import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <>
        <div className="AboutInfo">
            <div className="Container">
                <img className="about-me" src='/about-bg.jpg' alt="" />
                <h1>Mohd Anees</h1>
                {/* <FontAwesomeIcon icon={faToolbox} /> */}
                <div className="Work-postion">Front-end Developer</div>
                <p>11+ Years of Industry experience in providing User Interface Designing/Development  with most usable enterprise wide applications. Described as the Education of websites,  UI Developers are responsible for writing the code that lives behind every webpage.  Using their creativity and technical knowledge, they plan, build and maintain the structure of a website.</p>
                <a href="./contact-us/" className="btn primary"><FontAwesomeIcon icon={faDownload} /> Download CV</a>
            </div>
        </div>
    </>
  )
}

export default Home;