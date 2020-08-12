import React from "react"
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete"
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox"

function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 9.081999, lng: () => 8.675277 },
            radius: 200 * 1000,
        }
    })

    return (
        <div className="map-search">
            <Combobox
                onSelect={async (address) => {
                    setValue(address, false);
                    clearSuggestions();

                    try {
                        const results = await getGeocode({ address });
                        const { lat, lng } = await getLatLng(results[0]);
                        panTo({ lat, lng });
                    } catch (error) {
                        console.log(error)
                    }
                }}
            >
                <ComboboxInput
                    className="map-search-input"
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                    disabled={!ready}
                    placeholder="Enter a country or an address"
                />
                <ComboboxPopover >
                    <ComboboxList>
                        {status === "OK" && data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>

        </div>
    )
}

export default Search
