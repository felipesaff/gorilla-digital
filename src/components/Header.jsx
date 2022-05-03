import React from "react";
import '../assets/css/header.css'
export default props => {
    return(
        <header>
            {props.children}
            <nav>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#works">Works</a>
                <a href="#about">About</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}