import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    name: 'HTML5',
    style: {left: -20}
  },
  {
    name: 'CSS3',
    style: {left: -10}
  },
  {
    name: 'jQuery',
    style: {left: 0}
  },
  {
    name: 'Javascript',
    style: {left: 0}
  },
  {
    name: 'Bootstrap',
    style: {left: -10}
  },
  {
    name: 'React',
    style: {left: -20}
  }
]

function List({ name, style }) {
  return (
    <li style={{ position: 'relative', ...style}}>{ name }</li>
  )
}

function Lists() {
  return (
    <div className="home-skills">
      <ul>
        {skills.map(skill => <List key={skill.name} {...skill} />)}
      </ul>
    </div>
  )
}
function Home() {
  return (
    <>
        <div className="about-section">
            <div className="container flex-cont">
                <div className="sec-skills">
                    <div className="about-me">
                      <img src='/about-bg.jpg' alt="" />
                    </div>
                    <Lists />
                </div>
                <div className="sec-divs">
                    <h1>Mohd Anees</h1>
                    <div className="Work-postion">Front-end Developer</div>
                    <p><strong>11+</strong> Years of Industry experience in providing User Interface Designing/Development  with most usable enterprise wide applications. Described as the Education of websites,  UI Developers are responsible for writing the code that lives behind every webpage.  Using their creativity and technical knowledge, they plan, build and maintain the structure of a website.</p>
                    <a href="./contact-us/" className="btn primary"><FontAwesomeIcon icon={faDownload} /> Download CV</a>
                    {/* <a href="./contact-us/" className="btn secondary"><FontAwesomeIcon icon={faToolbox} /> Experience</a> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;