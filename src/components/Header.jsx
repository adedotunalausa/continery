import React from "react";

function Header(props) {
    return (
        <nav>
            <h1>Where in the world?</h1>
            <input id="dark-theme" onClick={props.addTheme} className="theme-input" type="checkbox" /><label htmlFor="dark-theme">Toggle</label>
        </nav>
    )
}

export default Header;