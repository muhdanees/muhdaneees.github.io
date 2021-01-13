import React from 'react';
import './Header.css';


class Header extends React.Component {
    render() { 
        return (
            <div className="Header">
                <div className="container">
                    <div className="row-div">
                        <div className="main-logo">
                            <a href="./">www.codePlayer.in</a>
                        </div>
                        <div className="info">
                        11+ Years of Industry experience in providing User Interface Designing/Development with most usable enterprise wide applications.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;

