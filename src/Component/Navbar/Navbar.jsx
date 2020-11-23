import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar__logo">
                <h4> Portofolio </h4>
            </div>
            <ul className="navbar__list">
                <li className="navbar__item"><a href="#"> About </a></li>
                <li className="navbar__item"><a href="#"> Skills </a></li>
                <li className="navbar__item"><a href=""> Recent Works </a></li>
                <li className="navbar__item"><a href="#"> Service </a></li>
                <li className="navbar__item"><a href="#"> Achievement </a></li>  
            </ul>
            <div className="navbar__toggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar;