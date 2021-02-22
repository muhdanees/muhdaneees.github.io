import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

import NavigationSide from "./Components/Navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

const App = () => {
    return (
      <React.StrictMode>
        <>
            <Router>
                <div className="codeplayer">
                    <div className="header">
                        <div className="container">
                            <div className="infoSec">
                                <div className="main-logo">
                                    <Link to="./">
                                        <img className="logo-mobile" src='/mini-logo.svg' alt="" />
                                        <img className="logo-desktop" src='/codeplayer_logo.svg' alt="" />
                                    </Link>
                                </div>
                                <div className="home-icon">
                                    <FontAwesomeIcon icon={faBars} />
                                </div>
                                <NavigationSide />
                                <div className="social-icons">
                                    <ul>
                                        <li>linkedin</li>
                                        <li>github</li>
                                        <li>twitter</li>
                                        <li>facebook</li>
                                    </ul>
                                </div>
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