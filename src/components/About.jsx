import React from 'react'
import aboutImg from "./images/about-img.svg"

export const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <img src={aboutImg} alt="hero-img" />
                <h2>-- About --</h2>
                <p>
                    The purpose of Continery is to provide an easy way
                    to explore infomation about the countries and regions of the world.
                </p>
                <p>
                    All data is courtesy of Mohammed Le Doze's countries project on github
                    and Google Maps API.
                </p>
                <p>
                    If you have any questions, suggestions or would like to support
                    the project, please contact the developer via email adedotunalausa@gmail.com.
                </p>
            </div>
        </div>
    )
}
