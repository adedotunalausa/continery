import React, { useState, useEffect } from "react";
// import {ThemeProvider, createGlobalStyle} from "styled-components";
import Header from "./Header";
import SearchInput from "./SearchInput";
import DropDownInput from "./DropDownInput";
import Card from "./Card";
import Axios from "axios";

// const GlobalStyle = createGlobalStyle`
// body {
//     --text-color: ${props => props.theme.mode === "light" ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};
//     --bg-color: ${props => props.theme.mode === "light" ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"};
//     --element-color: ${props => props.theme.mode === "light" ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
//     --input-color: ${props => props.theme.mode === "light" ? "hsl(0, 0%, 52%)" : "hsl(209, 23%, 22%)"};
// }
// `

function App() {
    const [dataArray, setDataArray] = useState([])

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

    return (
        <div>
            <Header/>
            <div className="search-filter">
                <SearchInput/>
                <DropDownInput />
            </div>
            {dataArray.map(data => (
                <Card
                countryFlag={data.flag}
                countryName={data.country}
                countryPopulation={data.population}
                countryRegion={data.region}
                countryCapital={data.capital}
             />
            ))}
        </div>
    )
}


export default App;