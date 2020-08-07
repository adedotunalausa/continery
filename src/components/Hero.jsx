import React from 'react'
import heroImg from "./images/hero-image.svg"
import {Button} from "./Button"

export const Hero = () => {
    return (
        <div className="hero">
            <div>
                <h1>Explore the world <br /> around you</h1>
                <p className="Hero-paragraph">Curious about your environment? <br />Let's take you on an adventure around the world</p>
                <Button />
            </div>
            <img src={heroImg} alt="hero-img"/>
        </div>
    )
}
