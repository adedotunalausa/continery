import React, { useState, useEffect } from "react"
import CountrySearch from "./CountrySearch"
import DropDownInput from "./DropDownInput"
import Card from "./Card"
import Axios from "axios"
import { Link } from "react-router-dom"
import countryImg from "./images/countries-main-img.svg"
import { motion } from "framer-motion"

const Countries = () => {
    const [dataArray, setDataArray] = useState([])
    const [regionData, setRegionData] = useState([])
    const [region, setRegion] = useState("")
    const [filtered, setFiltered] = useState(true)

    useEffect(() => {
        Axios.get("https://restcountries.eu/rest/v2/all")
            .then(res => {
                setDataArray(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        Axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
            .then(res => {
                console.log(res);
                setRegionData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [region])

    function handleFilter() {
        return (
            setFiltered(false)
        )
    }

    const pageTransition = {
        duration: 1
    }

    return (
        <motion.div
            className="countries-page-container-overall"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={pageTransition}
        >
            <div className="countries-page-container">
                <div className="countries-page-hero">
                    <div>
                        <h1>Learn about countries and regions</h1>
                        <p className="home-paragraph">Search for a country or filter the list of countries by region</p>
                    </div>
                    <img src={countryImg} alt="hero-img" />
                </div>
                <DropDownInput
                    regionSet={setRegion}
                    showRegionResult={handleFilter}
                />
                <CountrySearch />
                {
                    filtered ?
                        <div className="cards-container">
                            {dataArray.map((data) => (
                                <Link className="link" to={`/details/${data.name}`}>{
                                    <Card
                                        key={Math.random()}
                                        countryFlag={data.flag}
                                        countryName={data.name}
                                        countryPopulation={data.population}
                                        countryRegion={data.region}
                                        countryCapital={data.capital}
                                    />
                                }</Link>
                            ))}
                        </div> :
                        <div className="filtered-cards-container">
                            {regionData.map((data) => (
                                <Link className="link" to={`/details/${data.name}`}>{
                                    <Card
                                        key={Math.random()}
                                        countryFlag={data.flag}
                                        countryName={data.name}
                                        countryPopulation={data.population}
                                        countryRegion={data.region}
                                        countryCapital={data.capital}
                                    />
                                }</Link>
                            ))}
                        </div>
                }
            </div>
        </motion.div>
    )
}

export default Countries
