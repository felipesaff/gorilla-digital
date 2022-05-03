import React from "react";
import '../assets/css/services.css'

export default () => {
    return(
        <div className="titles container" id="services">
            <span>
                <h1>Services.</h1>
            </span>
            <p>OUR SERVICES FOR CLIENTS</p>
            <div className="cards">
                <div className="card-soft">
                <ion-icon name="stats-chart-outline" size="large"></ion-icon>
                    <h1>Digital Strategy</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ultricies justo</p>
                </div>
                <div className="card-soft">
                    <ion-icon name="pencil-outline" size="large"></ion-icon>
                    <h1>UX Designs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ultricies justo</p>
                </div>
                <div className="card-soft">
                    <ion-icon name="desktop-outline" size="large"></ion-icon>
                    <h1>UI Designs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ultricies justo</p>
                </div>
                <div className="card-soft">
                    <ion-icon name="globe-outline" size="large"></ion-icon>
                    <h1>Social Media</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ultricies justo</p>
                </div>
                <div className="card-soft">
                    <ion-icon name="globe-outline" size="large"></ion-icon>
                    <h1>Design Concept</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ultricies justo</p>
                </div>
                <div className="card-soft">
                    <ion-icon name="contract-outline" size="large"></ion-icon>
                    <h1>Media Pairing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis ultricies justo</p>
                </div>
            </div>
        </div>
    )
}