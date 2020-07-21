import React from "react";

function Card(props) {

    return (
            <div className="card">    
            <div className="flag">
                <img src={props.countryFlag} alt="flag"/>
            </div>
            <div className="card-details">
                <h1>{props.countryName}</h1>
                <p>Population: {props.countryPopulation}</p>
                <p>Region: {props.countryRegion}</p>
                <p>Capital: {props.countryCapital}</p>
            </div>
        </div>
    );
}

export default Card;