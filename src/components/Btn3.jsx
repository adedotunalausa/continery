import React from 'react'
import { Link } from "react-router-dom"

const Btn3 = () => {
    return (
        <div>
            <Link className="link" to={"/maps"}>
                <p className="btn1">Maps</p>
            </Link>
        </div>
    )
}

export default Btn3
