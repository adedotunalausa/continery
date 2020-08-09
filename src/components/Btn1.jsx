import React from 'react'
import { Link } from "react-router-dom"

export const Btn1 = () => {
    return (
        <div>
            <Link className="link" to={"/countries"}>
                <p className="btn1">Explore <i className="fas fa-arrow-right"></i></p>
            </Link>
        </div>
    )
}
