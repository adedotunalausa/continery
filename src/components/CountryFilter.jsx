import React from "react";
import SearchIcon from '@material-ui/icons/Search';

function CountryFilter(props) {

    return (
        <div>
            <div className="search-container">
                <SearchIcon className="search-icon" />
                <input className="search" onChange={ props.inputChange } value={props.countryValue} placeholder="Search for a country..." />
            </div>
        </div>
    )
}

export default CountryFilter;