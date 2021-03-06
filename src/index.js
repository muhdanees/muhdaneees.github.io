import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

import NavigationSide from "./Components/Navigation";
import { PageContext } from "./PageContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Social from "./Components/Social";

import "./index.scss";

const App = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [pageState, setPageState] = useState("home");

    return (
      <React.StrictMode>
        <PageContext.Provider value={{ setPageState }}>
            <Router>
                <div className={`codeplayer ${pageState}`}>
                    <div className="header">
                        <div className="container">
                            <div className="infoSec">
                                <div className="main-logo">
                                    <Link to="./">
                                        <img className="logo-mobile" src='/mini-logo.svg' alt="" />
                                        <img className="logo-desktop" src='/codeplayer_logo.svg' alt="" />
                                    </Link>
                                </div>
                                <button className="home-icon" onClick={e => setOpenMenu(true)}>
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                                <NavigationSide isOpen={openMenu} onClick={setOpenMenu} />
                                <Social />
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
        </PageContext.Provider>
      </React.StrictMode>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));