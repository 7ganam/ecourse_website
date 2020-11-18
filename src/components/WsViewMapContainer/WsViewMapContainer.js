import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import LoadScriptOnlyIfNeeded from './LoaderFixComponent'

import { useEffect, useState } from "react";





const MapContainer = (props) => {
    const [selected, setSelected] = useState({});

    const onSelect = item => { setSelected(item); }
    const mapStyles = { height: "100%", width: "100%" };
    const defaultCenter = { lat: props.location.lat, lng: props.location.lng }
    const locations = [
        {
            name: props.name,
            location: {
                lat: props.location.lat,
                lng: props.location.lng
            },
        },
    ];


    return (
        <LoadScriptOnlyIfNeeded
            googleMapsApiKey="AIzaSyD9pK_FiXUZMcg_MI-7Z6OSEdzX4mLfUac"
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
                {
                    locations.map(item => {
                        return (
                            <Marker key={item.name} position={item.location} />
                        )
                    })
                }
                {
                    locations.map(item => {
                        return (
                            <Marker key={item.name}
                                position={item.location}
                                onClick={() => onSelect(item)}
                            />
                        )
                    })
                }
                {
                    selected.location &&
                    (
                        <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        >
                            <div>
                                <img
                                    className="ws_image m-0"
                                    src={require('./ws_logo.png')}
                                />
                                <p>{selected.name}</p>
                            </div>

                        </InfoWindow>
                    )
                }
            </GoogleMap>
        </LoadScriptOnlyIfNeeded>
    )
}

export default MapContainer;