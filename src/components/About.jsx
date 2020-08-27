import React from 'react'
import aboutImg from "./images/about-img.svg"
import {motion} from "framer-motion"

const pageTransition = {
    duration: 1
}

export const About = () => {
    return (
        <motion.div
            className="about-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={pageTransition}
        >
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
                    the project, please contact the developer via email adedotunalausa@gmail.com
                    or visit <a className="link adedotun-link" href="https://adedotunalausa.com/">adedotunalausa.com</a>
                </p>
            </div>
        </motion.div>
    )
}
