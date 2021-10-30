import React from "react";
import './navbar.css';

const Navbar = () => {
    return(
        <>
        <nav className="main-nav">
        <ul className="menu">
            
            <li className="menu__items to-left">
            <a className="khanakhazana_logo" href="#logo">KHANA KHAZANA</a>
            </li>
            <li className="menu__item">
                <a className="home_nav" href="#home">Home</a>
            </li>
            <li className="menu__item">
                <a className="aboutus_nav" href="#about">About uS</a>
            </li>
            <li className="menu__item">
                <a className="howitworks_nav" href="#forms">How It Works</a>
            </li>
            <li className="menu__item">
                <a className="chefs_nav" href="#forms">Chefs</a>
            </li>
            <li className="menu__item">
                <a className="testimonials_nav" href="#forms">Testimonials</a>
            </li>
            <li className="menu__item">
                <a className="dabba_nav" href="#forms">Dabba Delivery</a>
            </li>
            <li className="menu__item">
                <a className="contact_nav" href="#forms">Contact Us</a>
            </li>
        </ul>
    </nav>
        </>
    )
}

export default Navbar;