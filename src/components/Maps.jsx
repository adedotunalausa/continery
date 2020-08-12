import React, { useState, useCallback, useRef } from "react"
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import { formatRelative } from "date-fns"
import bagImg from "./images/bag.svg"
import "@reach/combobox/styles.css"
import mapStyles from "./mapStyles"
import Search from "./MapSearch"
import Compass from "./Compass"

const libraries = ["places"]

const mapContainerStyle = {
    width: "90vw",
    height: "50rem",
    margin: "0 auto",
    borderRadius: "5px",
    maxWidth: "1440px",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 5px 0px",
};

const center = {
    lat: 9.081999,
    lng: 8.675277,
}

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

function Maps() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })
    const [markers, setMarkers] = useState([])
    const [selected, setSelected] = useState(null)

    const onMapsClick = useCallback(
        (event) => {
            setMarkers(current => [...current, {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            }])
        }, []
    )

    const mapRef = useRef()
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, [])

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error loading maps!";
    if (!isLoaded) return "Loading App...";

    return (
        <div>
            <h3 className="places-to visit">Places to visit <img className="bag-img" src={bagImg} alt="hero-img" /> </h3>
            <p className="home-paragraph">Click locations on the map for a markdown</p>
            <Compass panTo={panTo} />
            <Search panTo={panTo} />
            <div className="google-map">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}
                    options={options}
                    onClick={onMapsClick}
                    onLoad={onMapLoad}
                >
                    {markers.map(marker => (
                        <Marker
                            key={marker.time.toISOString()}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            icon={{
                                url: "/bag.svg",
                                scaledSize: new window.google.maps.Size(25, 25),
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(12.5, 12.5),
                            }}
                            onClick={() => {
                                setSelected(marker);
                            }}
                        />
                    ))}
                    {selected ? (
                        <InfoWindow
                            position={
                                { lat: selected.lat, lng: selected.lng }
                            }
                            onCloseClick={() => {
                                setSelected(null);
                            }}>
                            <div>
                                <h2>Location marked for future travel</h2>
                                <p>Marked {formatRelative(selected.time, new Date())}</p>
                            </div>
                        </InfoWindow>
                    ) : null}
                </GoogleMap>
            </div>
        </div>
    )
}

export default Maps;