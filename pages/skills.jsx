import Layout from "../components/Layout";
import Image from "next/image";
import SEO from "../components/SEO";

export default function Skills() {
  return (
    <Layout pageState="skills">
      <SEO
        title="Technical Skills | Mohd Anees - React, HTML5, CSS3, JavaScript"
        description="Comprehensive technical skills in React, HTML5, CSS3, JavaScript, Bootstrap, and modern web development frameworks. 10+ years of professional expertise."
      />
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
            {/* <p>to know me</p>
              <p>The great route to have the best thought to have a bundle of an idea... to express technical knowledge.</p> */}
            <h2>TECHNICAL SKILLS</h2>
            <ul className="tech-skills">
              <li>
                <strong>HTML5</strong>
                <p>
                  First, slice to the psd and convert in html5, mobile first
                  responsive, cross-browser compatible with pixel-perfect.
                </p>
              </li>
              <li>
                <strong>CSS2/CSS3</strong>
                <p>
                  Using new features like grid layout, multi-columns, flexible
                  boxes, shadows, gradients, animations and transitions.
                </p>
              </li>
              <li>
                <strong>BEM</strong>
                <p>
                  BEM (Block Element Modifier is a methodology that helps you to
                  create reusable components and code sharing in front-end
                  development
                </p>
              </li>
              <li>
                <strong>jQuery/JavaScript</strong>
                <p>
                  Custom hand coding and interactions plugin, effects, widgets,
                  and themes built on top of the jQuery JavaScript.
                </p>
              </li>
              <li>
                <strong>Bootstrap/Foundation</strong>
                <p>
                  Bootstrap and Foundation both are the most popular front-end
                  framework, can develop responsive mobile-first web sites.
                </p>
              </li>
              <li>
                <strong>SASS/SCSS</strong>
                <p>
                  CSS with superpowers, SASS/SCSS, to add nested rules,
                  variables, mixins, selector inheritance and more.
                </p>
              </li>
              <li>
                <strong>LESS</strong>
                <p>
                  LESS create dynamic behavior of CSS with variables, mixins,
                  operations, functions and serve on server &amp; client both
                  side.
                </p>
              </li>
              <li>
                <strong>GitHub</strong>
                <p>
                  GitHub is a code hosting platform for collaboration and
                  version control. GitHub is a community of developers to share
                  and build better code.
                </p>
              </li>
              <li>
                <strong>AMP Story</strong>
                <p>
                  AMP stories immerse readers in tappable, full-screen content.
                  Building on the possibilities of the AMP, visual content and
                  user-first.
                </p>
              </li>
              <li>
                <strong>HTML5 Mobile Apps</strong>
                <p>
                  HTML5 is not only use for web app but also in mobile apps, we
                  can easy developed hybrid mobile apps in html5.
                </p>
              </li>
              <li>
                <strong>Web Layouts Design</strong>
                <p>
                  Web layout design, Grid layout design, Mockup design, Banner
                  design, Prototyping, Slicing PSD and convert in to HTML5.
                </p>
              </li>
              <li>
                <strong>PSD to Wordpress</strong>
                <p>
                  PSD to WordPress conversion and Theme Integration,
                  customization, create manage widgets and plugins.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
