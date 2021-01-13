import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import "./index.css";

const App = function (){
    return (
        <>
            <Header />
            <Navigation />
            <About />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));