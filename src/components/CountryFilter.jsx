import React, { useState, useEffect } from "react";
import SearchIcon from '@material-ui/icons/Search';
import DropDownInput from "./DropDownInput";
import Axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

function CountryFilter() {
    const [countryData, setCountryData] = useState([])
    const [country, setCountry] = useState("");

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

    return (
        <div className="search-input-container">
            <div className="country-filter">
                <div>
                    <SearchIcon className="search-icon" />
                    <input onChange={event => { event.preventDefault(); setCountry(event.target.value) }} value={country} className="search" placeholder="Search for a country..." />
                </div>
                <DropDownInput />
            </div>
            {countryData.map((data, id) => (
                <Link className="link" to={`/details/${data.name}`}>{
                    <Card
                        key={id}
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

export default CountryFilter;