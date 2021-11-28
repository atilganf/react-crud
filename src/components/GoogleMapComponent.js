import React from "react"
import compose from "recompose/compose";
import withProps from "recompose/withProps";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GoogleMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places=AIzaSyDJTk3nG9zcwqdZlGqweq9fh2JbYR7v1ls",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `330px`, borderRadius:"10px" }} />,
        mapElement: <div style={{ height: `100%`, borderRadius:"7px" }} />,
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
