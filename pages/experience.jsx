import Layout from "../components/Layout";
import Image from "next/image";

export default function Experience() {
  return (
    <Layout pageState="experience">
      <div className="content">
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
          </div>
          <div className="sec-divs">
            <h2>Experience</h2>
            <ul className="tech-skills mb0">
              <li>
                <strong>Hindustan Time Media</strong>
                <p>
                  <strong>Position: </strong> Senior Front-end
                  Developer(Assistant Manager)
                </p>
                <p>
                  <a
                    href="https://www.hindustantimes.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.hindustantimes.com
                  </a>
                </p>
                <p>9/2016 - Present</p>
              </li>
              <li>
                <strong>CloudChowk Solutions Private Limited</strong>
                <p>
                  <strong>Position: </strong> UI Developer
                </p>
                <p>
                  <a
                    href="https://cloudchowk.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.cloudchowk.com
                  </a>
                </p>
                <p>4/2015 - 9/2016</p>
              </li>
              <li>
                <strong>Indian Petro Group - </strong>{" "}
                <span>
                  (A division of 360 Analytics &amp; Advisory Pvt. Ltd)
                </span>
                <p>
                  <strong>Position: </strong> UI Developer
                </p>
                <p>
                  <a
                    href="http://www.indiapetro.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.indiapetro.com
                  </a>
                </p>
                <p>6/2013 - 4/2015</p>
              </li>
              <li>
                <strong>Oscillate Infotech Pvt. Ltd.</strong>
                <p>
                  <strong>Position: </strong> UI/UX Developer
                </p>
                <p>
                  <a
                    href="https://oscillateinfo.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.oscillateinfo.com
                  </a>
                </p>
                <p>10/2012 - 6/2013</p>
              </li>
              <li>
                <strong>Makbog Solutions Pvt. Ltd.</strong>
                <p>
                  <strong>Position: </strong> UI Developer
                </p>
                <p>
                  <a href="http://makbog.com/" target="_blank" rel="noreferrer">
                    www.makbog.com
                  </a>
                </p>
                <p>5/2011 - 10/2012</p>
              </li>
              <li>
                <strong>Modulus Systems</strong>
                <p>
                  <strong>Position: </strong> UI Designer/Developer
                </p>
                <p>3/2009 - 4/2011</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
