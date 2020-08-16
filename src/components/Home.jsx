import React from 'react'
import { HomeSection1 } from "./HomeSection1"
import HomeSection2 from './HomeSection2'
import HomeSection3 from './HomeSection3'
import { motion } from "framer-motion"

const pageTransition = {
    duration: 1
}

const Home = () => {
    return (
        <motion.div
            className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={pageTransition}
        >
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
        </motion.div>
    )
}

export default Home
