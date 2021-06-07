import React from 'react';
import Img from './img1.png';
import './style.css';


const Header = () => {
    return (
        <div className="media">
         <img className="logo" src="./logo.png" alt="logo"></img>

        <div className="m1">
        <nav>
            <ul class="nav-links">
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">OUR EXPERTISE</a></li>
                <li><a href="#">SUSTAIN</a></li>
                <li><a href="#">PORTFOLIO</a></li>
                <li><a href="#">MEDIA CENTER</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>

        </div>
        <div className="esg">
        <h2>Incubating the </h2>

    
        <h1>Next Generation of Black-Owned Asset Managers</h1>

        </div>
            <div className="esg-2">
                

            </div>
        </div>
    )
}

export default Header;

