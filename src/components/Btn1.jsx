import React from 'react'
import { Link } from "react-router-dom"

export const Btn1 = () => {
    return (
        <div>
            <Link className="link" to={"/countries"}>
                <p className="btn1">Explore</p>
            </Link>
        </div>
    )
}
