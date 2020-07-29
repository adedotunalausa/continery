import React, { useState, useEffect } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

function DropDownInput(props) {
    const [reveal, setReveal] = useState(false);
    const [regionData, setRegionData] = useState([])
    const [region, setRegion] = useState("");

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

    function DropDown() {
        setReveal(prevValue => {
            if (prevValue === true) {
                return false;
            } else {
                return true;
            }
        });
    }

    return (
        <div>
            <div className="dropdown">
                <button onClick={DropDown} className="dropdown-btn" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="dropdown-elements">
                        Filter by region
                        <ExpandMoreIcon fontSize="small" />
                    </div>
                </button>

                {reveal ? <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li onClick={() => { setRegion("Africa"); setReveal(false) }} className="dropdown-item">
                        Africa
                    </li>
                    <li onClick={() => { setRegion("Americas"); setReveal(false) }} className="dropdown-item">
                        Americas
                    </li>
                    <li onClick={() => { setRegion("Asia"); setReveal(false) }} className="dropdown-item">
                        Asia
                    </li>
                    <li onClick={() => { setRegion("Europe"); setReveal(false) }} className="dropdown-item">
                        Europe
                    </li>
                    <li onClick={() => { setRegion("Oceania"); setReveal(false) }} className="dropdown-item">
                        Oceania
                    </li>
                </ul> : null}
            </div>
            {regionData.map((data, id) => (
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

export default DropDownInput;