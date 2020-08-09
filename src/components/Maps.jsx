import React from 'react'
import mapsImg from "./images/mapss-page-img.svg"
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import { formatRelative } from "date-fns"

// import {
//     getGeocode,
//     getLatLng,
// } from "use-places-autocomplete"
// import {
//     Combobox,
//     ComboboxInput,
//     ComboboxPopover,
//     ComboboxList,
//     ComboboxOption,
//     ComboboxOptionText,
//   } from "@reach/combobox"
  import "@reach/combobox/styles.css"

  const libraries = ["places"]

const maps = () => {
    const { isLoaded, loadError } = useLoadScript ({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API,
        libraries,
    })

    return (
        <div className="maps-container">
            <div className="maps-container-hero">
                <h1>See the maps of different countries</h1>
                <img src={mapsImg} alt="hero-img" />
            </div>
        </div>
    )
}

export default maps
