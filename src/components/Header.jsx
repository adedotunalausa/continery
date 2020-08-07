import React from "react"
import { Link } from "react-router-dom"
import { ThemeBtn } from "./ThemeBtn"
import Hamburger from "./Hamburger"

function Header(props) {
    return (
        <nav>
            <Link className="link" to={"/"}>
                <h1>Continery</h1>
            </Link>
            <Hamburger />
            <ThemeBtn mode={props.mode} addTheme={props.addTheme} />
        </nav>
    )
}

export default Header;