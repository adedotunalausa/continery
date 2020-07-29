import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import DropDownInput from "./DropDownInput";
import Card from "./Card";
import Axios from "axios";
import CountryDetails from "./CountryDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    const [dataArray, setDataArray] = useState([])
    const [countryData, setCountryData] = useState([])
    const [country, setCountry] = useState("");
    const [colorTheme, setColorTheme] = useState("");

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
                <div className="search-filter">
                    <SearchInput
                        inputValue={country}
                        inputChange={event => {event.preventDefault(); setCountry(event.target.value)}}
                    />
                    <DropDownInput />
                </div>
                {countryData.map((data, index) => (
                    <Card
                        key={index}
                        countryFlag={data.flag}
                        countryName={data.name}
                        countryPopulation={data.population}
                        countryRegion={data.region}
                        countryCapital={data.capital}
                    />
                ))}
                {dataArray.map((data, index) => (
                    <Link to={`/details/${data.name}`}>{
                        <Card
                            key={index}
                            countryFlag={data.flag}
                            countryName={data.name}
                            countryPopulation={data.population}
                            countryRegion={data.region}
                            countryCapital={data.capital}
                        />
                    }</Link>
                ))}
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