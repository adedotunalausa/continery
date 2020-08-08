import React from 'react'
import heroImg from "./images/hero-img.svg"
import {Btn1} from "./Btn1"

export const HomeSection1 = () => {
    return (
        <div className="hero">
            <div>
                <h1>Explore the world <br /> around you</h1>
                <p className="home-paragraph">Curious about your environment? Let's take you on an adventure around the world</p>
                <Btn1 />
            </div>
            <img src={heroImg} alt="hero-img"/>
        </div>
    )
}
