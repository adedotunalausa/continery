import React from 'react'
import mapsImg from "./images/mapss-page-img.svg"
import Maps from "./Maps"

function MapsPage() {
    return (
        <div className="maps-container">
            <div className="maps-content">
                <div className="maps-container-hero">
                    <div>
                        <h1>See the maps of locations around the world</h1>
                        <p className="home-paragraph">Search for places, get suggestions on the go and markdown locations for future exploration</p>
                    </div>
                    <img src={mapsImg} alt="hero-img" />
                </div>
                <div className="map">
                    <Maps />
                </div>
            </div>
        </div>
    )
}

export default MapsPage
