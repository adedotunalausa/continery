import React from "react";
import SearchIcon from '@material-ui/icons/Search';

function SearchInput() {
    return (
        <div className="search-input-container">
            <SearchIcon className="search-icon" />
            <input className="search" placeholder="Search for a country..." />
        </div>
    )
}

export default SearchInput;