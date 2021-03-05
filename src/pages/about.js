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
                <img src="/about-me.jpg" alt="Mohd Anees" />
                </div>
            </div>
            <div className="sec-divs">
                <h2>About Us</h2>

                <p>Hi, This is Mohd Anees wanna say about me something.</p>
                <p>Building state of the art, easy to use, user-friendly website and applications is turly a passion of mind and I am confident I would and excelemt addition to your organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trnds and advancements. This ahse allowed me to saty ahead o the curve and deliver exceptional work to all of my employers, Including those I have workidn for on a project basis.</p>

                <p>I have attched a copy of my resume detailing my experience, along with links to website and companies I have had the honor of working on. on the home page <a href="mailto:https://www.codeplayer.in/">www.codeplayer.in</a></p>

                <p>Also, I got <strong>The Rising Star Award</strong> In June 2015 for honor from <strong>CloudChowk Solutions Pvt. Ltd.</strong></p>

                <a href="./skills/" className="btn primary"><FontAwesomeIcon icon={faBriefcase} />know more...</a>
            </div>
        </div>
    </div>
  )
}

export default About;