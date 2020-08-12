import React from 'react'
import { Link } from "react-router-dom"

export const Btn2 = () => {
    return (
        <div>
            <Link className="link" to={"/countries"}>
                <p className="btn2">Countries</p>
            </Link>
        </div>
    )
}
