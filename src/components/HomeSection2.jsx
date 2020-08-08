import React from 'react'
import countriesImg from "./images/countries-img.svg"
import {Btn2} from "./Btn2"

const HomeSection2 = () => {
    return (
        <div className="home-section2">
            <div>
                <h2>Know more about the countries of the world</h2>
                <p className="home-paragraph home-section2-details">Search and filter through a comprehensive database of information about countries around the Globe</p>
                <Btn2 />
            </div>
            <img src={countriesImg} alt="hero-img"/>
        </div>
    )
}

export default HomeSection2
