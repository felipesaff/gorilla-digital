import React from "react";
import '../assets/css/presentation.css'

export default () => {
    return (
        <div className="background">
            <div className="presentation container">
                <div className="pres-top">
                    <p>CREATIVE MIND, CREATIVE WORKS</p>
                    <h1>We are digital agency.</h1>
                    <a href="#">GETTING STARTED</a>
                </div>

                <div className="pres-bottom container">
                    <div className="card">
                        <ion-icon name="paper-plane-outline" size="large"></ion-icon>
                        <h1>Future Concept</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ultricies justo</p>
                    </div>
                    <div className="card">
                        <ion-icon name="extension-puzzle-outline" size="large"></ion-icon>
                        <h1>The Big Ideas</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ultricies justo</p>
                    </div>
                    <div className="card">
                        <ion-icon name="bulb-outline" size="large"></ion-icon>
                        <h1>Creative Solutions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ultricies justo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}