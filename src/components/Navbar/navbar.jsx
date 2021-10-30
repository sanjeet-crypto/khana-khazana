import React from "react";
import './navbar.css';
import styled from "styled-components";

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  margin-left: 4rem;
  color: #000000;
  font-weight: 600;
  border-radius: 20px;
  background-color: #fea904;
  border: 2px solid #490055;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  
  &:hover {
    color: #fff;
    
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;
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
                <a className="aboutus_nav" href="#about">About Us</a>
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
        <Button>
            Login
        </Button>
        
    </nav>
        </>
    )
}

export default Navbar;