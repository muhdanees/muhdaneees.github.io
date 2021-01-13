import React from 'react';
import './About.css';
class About extends React.Component {
    render() { 
        return (
            <div className="About">
                <div className="container">
                    <div className="about-profile">
                        <img className="avtar" src="./avtar.jpg" title="" alt="" />
                        <div className="about-info">
                            <div className="name">Mohd Anees</div>
                            <div className="profile">Frontend Developer</div>
                            <p>11+ Years of Industry experience in providing User Interface Designing/Development with most usable enterprise wide applications. Described as the Education of websites, UI Developers are responsible for writing the code that lives behind every webpage. Using their creativity and technical knowledge, they plan, build and maintain the structure of a website.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;