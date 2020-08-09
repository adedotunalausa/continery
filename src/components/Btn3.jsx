import React from 'react'
import { Link } from "react-router-dom"

const Btn3 = () => {
    return (
        <div>
            <Link className="link" to={"/maps"}>
                <p className="btn1">Start now <i className="fas fa-arrow-right"></i></p>
            </Link>
        </div>
    )
}

export default Btn3
