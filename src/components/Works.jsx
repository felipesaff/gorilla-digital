import React from "react";
import '../assets/css/works.css'

export default props => {
    return (
        <div id="works">
            <div className="works-top container">
                <div className="titles">
                    <span>
                        <h1>Works.</h1>
                    </span>
                    <p>THINGS WE'VE MADE</p>
                </div>
                <button>VIEW ALL</button>
            </div>
            <div className="gallery">
                {props.children}
            </div>
        </div>
    )
}