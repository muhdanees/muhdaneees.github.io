import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

import NavigationSide from "./Components/NavigationSide";
// import NavigationTop from "./Components/NavigationTop";
import "./index.css";

const App = () => {
    return (
      <React.StrictMode>
        <>
        <Router>
          <div className="Codeplayer">
            <div className="Header">
              <NavigationSide />
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

        // <div className="Codeplayer">
        //     <div className="Header">
        //         <div className="Logo"><a href="./">Codeplayer</a></div>
        //         {/* <NavigationTop /> */}
        //         <NavigationSide />
        //     </div>
        //     <div className="editorlines">
        //         <span>1</span>
        //         <span>2</span>
        //         <span>3</span>
        //         <span>4</span>
        //         <span>5</span>
        //         <span>6</span>
        //         <span>7</span>
        //         <span>8</span>
        //         <span>9</span>
        //         <span>10</span>
        //         <span>11</span>
        //         <span>12</span>
        //         <span>13</span>
        //         <span>14</span>
        //         <span>15</span>
        //         <span>16</span>
        //         <span>17</span>
        //         <span>18</span>
        //     </div>
        //     <div className="Container">
        //         {/* <div className="docStart"></div> */}
        //         {/* <div className="html"></div> */}
        //         <div class="body">
        //                 <h1>
        //                     Hi, I’m Mohd Anees
        //                 </h1>
        //                 <div>Working in HT Media Limited as <strong>Front-end Developer</strong></div>
        //                 <p>11+ Years of Industry experience in providing User Interface Designing/Development  with most usable enterprise wide applications. Described as the Education of websites,  UI Developers are responsible for writing the code that lives behind every webpage.  Using their creativity and technical knowledge, they plan, build and maintain the structure of a website.</p>
        //                 <a href="./contact-us/" className="contact-us">Contact me!</a>
        //             </div>

        //     </div>
        // </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));