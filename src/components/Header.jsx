import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav>
            <Link className="link" to={"/"}>
                <h1>Where in the world?</h1>
            </Link>
            <input id="dark-theme" onClick={props.addTheme} className="theme-input" type="checkbox" /><label htmlFor="dark-theme">Toggle</label>
        </nav>
    )
}

export default Header;