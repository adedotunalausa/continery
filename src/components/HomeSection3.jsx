import React from 'react'
import mapsImg from "./images/maps-img.svg"
import Btn3 from "./Btn3"

const HomeSection3 = () => {
    return (
        <div className="home-section3-container">
            <div className="home-section3">
                <div>
                    <h2>Navigate through maps of regions around the world</h2>
                    <p className="home-paragraph">Feed your curiosity with information from well detailed maps. Search and explore locations around the world </p>
                    <Btn3 />
                </div>
                <img src={mapsImg} alt="section3-img" />
            </div>
        </div>
    )
}

export default HomeSection3
