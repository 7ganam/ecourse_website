import React, { Component } from 'react';
import LocationPicker from "location-picker";
import { Button } from 'reactstrap';


/* Default position */
import "./LocPicker.css"
const defaultPosition = {
    lat: 30.0444,
    lng: 31.2357
};



class LocPicker extends Component {


    componentDidMount() {

        // Get element references
        const google = window.google; // google apis should be included in the index.html file in public folder
        var confirmBtn = document.getElementById('confirmPosition');
        var onClickPositionView = document.getElementById('onClickPositionView');
        var onIdlePositionView = document.getElementById('onIdlePositionView');

        // Initialize locationPicker plugin
        var lp = new LocationPicker('map', {
            setCurrentPosition: true, // You can omit this, defaults to true
        }, {
            zoom: 15 // You can set any google map options here, zoom defaults to 15
        });

        // Listen to button onclick event
        confirmBtn.onclick = function () {
            // Get current location and show it in HTML
            var location = lp.getMarkerPosition();
            onClickPositionView.innerHTML = 'The chosen location is ' + location.lat + ',' + location.lng;
        };

        // Listen to map idle event, listening to idle event more accurate than listening to ondrag event
        google.maps.event.addListener(lp.map, 'idle', function (event) {
            // Get current location and show it in HTML
            var location = lp.getMarkerPosition();
            onIdlePositionView.innerHTML = 'The chosen location is ' + location.lat + ',' + location.lng;
        });

    }

    render() {
        return (
            <div>
                <div id="map"></div>

                <Button id="confirmPosition" color="success" className=" my-1 my-md-0 "  ><span className="fa fa-sign-in fa-lg"></span> Confirm Position</Button>

                <p>On idle position: <span id="onIdlePositionView"></span></p>
                <p>On click position: <span id="onClickPositionView"></span></p>
            </div>

        )
    }
}

export default LocPicker;