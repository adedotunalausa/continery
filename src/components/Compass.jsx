import React from 'react'
import compassImg from "./images/compass.png"

const Compass = ({ panTo }) => {
    return (
        <button
            className="locate"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        })
                    },
                    () => null
                );
            }}
        >
            <img src={compassImg} alt="compass-img" />
        </button>
    )
}

export default Compass
