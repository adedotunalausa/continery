import React from 'react'
import heroImg from "./images/hero-img.svg"
import { Btn2 } from "./Btn2"
import Btn3 from "./Btn3"

export const HomeSection1 = () => {
    return (
        <div className="hero-container">
            <div className="hero">
                <div>
                    <h1>Explore the world <br /> around you</h1>
                    <p className="home-paragraph">Curious about your environment? Let's take you on an adventure around the world</p>
                    <div className="section-one-btn-container">
                        <Btn2 />
                        <Btn3 />
                    </div>
                </div>
                <img src={heroImg} alt="hero-img" />
            </div>
        </div>
    )
}
