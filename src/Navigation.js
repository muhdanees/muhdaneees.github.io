import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {

    const 
    render() { 
        return (
            <div className="Navigation">
                <ul className="container">
                    <li>
                        <a href="./">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="experience">
                            experience
                        </a>
                    </li>
                    <li>
                        <a href="contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Navigation;