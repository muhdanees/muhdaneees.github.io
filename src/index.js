import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

import NavigationSide from "./Components/Navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const App = () => {
    return (
      <React.StrictMode>
        <>
            <Router>
                <div className="Codeplayer">
                    <div className="Header">
                        <div className="InfoSec">
                            <div className="Logo"><a href="./">Codeplayer</a></div>
                            <NavigationSide />
                        </div>
                        <div className="AboutInfo">
                            <div className="Container">
                                <h1>Hi, I’m Mohd Anees</h1>
                                <div className="Work-postion"><FontAwesomeIcon icon={faToolbox} />Currently workin as <strong>Front-end Developer</strong> in HT Media Limited.</div>
                                <p>11+ Years of Industry experience in providing User Interface Designing/Development  with most usable enterprise wide applications. Described as the Education of websites,  UI Developers are responsible for writing the code that lives behind every webpage.  Using their creativity and technical knowledge, they plan, build and maintain the structure of a website.</p>
                                <a href="./contact-us/" className="contact-us">Contact me!</a>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about-us" component={About} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/experience" component={Experience} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact-us" component={Contact} />
                    </Switch>
                </div>
            </Router>
        </>
      </React.StrictMode>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));