import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { PageContext } from "../PageContext";

function About() {
  const { setPageState } = useContext(PageContext)

  useEffect(() => {
    setPageState("about")
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
                <h2>About Us</h2>
                <p>Hi, I am <strong>Mohd Anees</strong> with a great attitude to introduce you to Creativity and Crazy world. Passionate thinking with <strong>10+</strong> years of experience in Front End Development from New Delhi India.</p>

                <p>The objective of each project is to capitalize on the latest technologies and achieve a highly optimized end product. I am always keen on experimenting with different platforms and frameworks.</p>

                <p>I specialize in front-end development and like to learn new technologies like AMP is an open-source library, <strong>BEM</strong> for naming convention, <strong>GitHub</strong> for code hosting, <strong>SVN</strong> Subversion open source version control system, Liquid for templating and <strong>CSS</strong> Pre-processors <strong>SCSS</strong>, <strong>SASS</strong>, <strong>LESS</strong> and <strong>Stylus</strong> scripting language of CSS.</p>
                <a href="./skills/" className="btn primary"><FontAwesomeIcon icon={faBriefcase} />know more...</a>
            </div>
        </div>
    </div>
  )
}

export default About;