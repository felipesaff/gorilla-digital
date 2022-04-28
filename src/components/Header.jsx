import React from "react";
import '../assets/css/header.css'
export default props => {
    return(
        <header>
            {props.children}
            <nav>
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">Works</a>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </nav>
        </header>
    )
}