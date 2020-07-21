import React from "react";

function Header(props) {
    return (
        <nav>
            <h1>Where in the world?</h1>
            <input onClick={props.themeChange} className="theme-input" type="checkbox" id="switch" /><label for="switch">Toggle</label>
        </nav>
    )
}

export default Header;