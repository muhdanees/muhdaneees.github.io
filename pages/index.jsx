import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
const skills = [
  {
    name: "HTML5",
    style: { left: -20 },
  },
  {
    name: "CSS3",
    style: { left: -10 },
  },
  {
    name: "jQuery",
    style: { left: 0 },
  },
  {
    name: "Javascript",
    style: { left: 0 },
  },
  {
    name: "Bootstrap",
    style: { left: -10 },
  },
  {
    name: "React",
    style: { left: -20 },
  },
];

function List({ name, style }) {
  return <li style={{ position: "relative", ...style }}>{name}</li>;
}

function Lists() {
  return (
    <div className="home-skills">
      <ul>
        {skills.map((skill) => (
          <List key={skill.name} {...skill} />
        ))}
      </ul>
    </div>
  );
}
export default function Home() {
  return (
    <Layout pageState="home">
      <Head>
        <title>Code Player</title>
        <meta name="description" content="Code Player Portal" />
      </Head>
      <div className="about-section">
        <div className="container flex-cont">
          <div className="sec-skills">
            <div className="about-me">
              <Image
                src="/about-me.jpg"
                width="300"
                height="300"
                layout="fixed"
                alt="Mohd Anees"
              />
            </div>
            <Lists />
          </div>
          <div className="sec-divs">
            <h1>Mohd Anees</h1>
            <div className="Work-postion">Front-end Developer</div>
            <p>
              10+ Years of Industry experience in providing User Interface
              Designing/Development with most usable enterprise wide
              applications. Described as the Education of websites, UI
              Developers are responsible for writing the code that lives behind
              every webpage. Using their creativity and technical knowledge,
              they plan, build and maintain the structure of a website.
            </p>
            <a
              href="/mohd-anees-resume.pdf"
              target="_blank"
              className="btn primary"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
            {/* <a href="./contact-us/" className="btn secondary"><FontAwesomeIcon icon={faToolbox} /> Experience</a> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
