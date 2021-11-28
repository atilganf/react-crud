import React from "react"
import compose from "recompose/compose";
import withProps from "recompose/withProps";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { API_KEY } from "./env"

const GoogleMapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY ?? ""}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `330px`, borderRadius: "10px" }} />,
        mapElement: <div style={{ height: `100%`, borderRadius: "7px" }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
)

export default GoogleMapComponent;
