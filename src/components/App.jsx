import React, { useState, useEffect } from "react";
import Header from "./Header";
import CountryFilter from "./CountryFilter";
import DropDownInput from "./DropDownInput";
import Card from "./Card";
import Axios from "axios";
import CountryDetails from "./CountryDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    const [dataArray, setDataArray] = useState([])
    const [countryData, setCountryData] = useState([])
    const [country, setCountry] = useState("")
    const [regionData, setRegionData] = useState([])
    const [region, setRegion] = useState("")
    const [filtered, setFiltered] = useState(true)
    const [colorTheme, setColorTheme] = useState("")

    useEffect(() => {
        Axios.get("https://restcountries.eu/rest/v2/all")
            .then(res => {
                console.log(res);
                setDataArray(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        Axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
            .then(res => {
                console.log(res);
                setCountryData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [country])

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

    function handleSearch(e) {
        e.preventDefault()
        const event = e.target.value;
        setCountry(event)
    }

    function handleFilter() {
        return (
            setFiltered(false)
        )
    }

    function handleTheme() {
        setColorTheme(prevValue => {
            if (prevValue === "dark-theme") {
                return ""
            } else {
                return "dark-theme"
            }
        })
        // localStorage.setItem("theme-color", prevValue)
    }

    const Home = () => {
        return (
            <div>
                <div className="filter-container">
                    <CountryFilter
                        inputChange={handleSearch}
                        countryValue={country}
                        // showCountryResult={handleFilter}
                    />
                    <DropDownInput
                        regionSet={setRegion}
                        showRegionResult={handleFilter}
                    />
                </div>
                <div className="filtered-cards-container">
                    {countryData.map((data, index) => (
                        <Link className="link" to={`/details/${data.name}`}>{
                            <Card
                                key = { Math.random() }
                                countryFlag={data.flag}
                                countryName={data.name}
                                countryPopulation={data.population}
                                countryRegion={data.region}
                                countryCapital={data.capital}
                            />
                        }</Link>
                    ))}
                </div>
                {
                    filtered ?
                        <div className="cards-container">
                            {dataArray.map((data, index) => (
                                <Link className="link" to={`/details/${data.name}`}>{
                                    <Card
                                        key = { Math.random()}
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
                            {regionData.map((data, index) => (
                                <Link className="link" to={`/details/${data.name}`}>{
                                    <Card
                                        key = { Math.random() }
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
        )
    }

    return (
        <Router>
            <div className={`App ${colorTheme}`}>
                <Header
                    addTheme={handleTheme}
                />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/details/:name" component={CountryDetails} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;