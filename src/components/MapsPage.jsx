import React from 'react'
import mapsImg from "./images/mapss-page-img.svg"
import Maps from "./Maps"
import { motion } from "framer-motion"

const pageTransition = {
    duration: 1
}

function MapsPage() {
    return (
        <motion.div
            className="maps-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={pageTransition}
        >
            <div className="maps-content">
                <div className="maps-container-hero">
                    <div>
                        <h1>See the maps of locations around the world</h1>
                        <p className="home-paragraph">Search for places, get suggestions on the go and markdown locations for future exploration</p>
                    </div>
                    <img src={mapsImg} alt="maps-img" />
                </div>
                <div className="map">
                    <Maps />
                </div>
            </div>
        </motion.div>
    )
}

export default MapsPage
