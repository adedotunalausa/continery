import React from "react";
import SearchIcon from '@material-ui/icons/Search';

function SearchInput(props) {
    return (
        <div className="search-input-container">
            <SearchIcon className="search-icon"/>
            <input onChange={props.inputChange} value={props.inputValue} className="search" placeholder="Search for a country..." />
        </div>
    )
}

export default SearchInput;