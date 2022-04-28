import React from "react";
import '../assets/css/works.css'

export default () => {
    return (
        <div className="works">
            <div className="works-top container">
                <div className="titles">
                    <span>
                        <h1>Services.</h1>
                    </span>
                    <p>OUR SERVICES FOR CLIENTS</p>
                </div>
                <button>VIEW ALL</button>
            </div>
            <div className="gallery">
                <span>
                    <img src="../components" alt="" />
                </span>

                <span>
                    <img src="" alt="" />                    
                </span>

                <span>
                    <img src="" alt="" />
                </span>

                <span>
                    <img src="" alt="" />                    
                </span>

                <span>
                    <img src="" alt="" />                    
                </span>

                <span>
                    <img src="" alt="" />                    
                </span>
            </div>
        </div>
    )
}