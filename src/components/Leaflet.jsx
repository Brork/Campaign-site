import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Leaflet.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import * as api from "../api";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: "http://localhost:3000/images/orient-city.png",
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  iconSize: [51, 34],
});

class Leaflet extends React.Component {
  state = {
    markers: [
      {
        x: 19.6,
        y: -25,
        body:
          "A huge body containing lots of words to test how big I can make a popup",
        icon: "orient-city",
        zoom: 5,
      },
    ],
    zoom: 1,
  };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const { url, map } = this.props;
    return (
      <Map
        center={[0, 0]}
        zoom={1}
        maxZoom={5}
        minZoom={1}
        onClick={(e, { passive: ture }) => {
          e.preventDefault();
          const coord = e.latlng;
          console.log(coord);
        }}
        onzoomend={(e) => {
          this.setState({ zoom: e.target._zoom });
        }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          attribution="&copy;"
          url={`${url}/images/${map}/{z}/{x}/{y}.png`}
          continuousWorld={false}
          noWrap={true}
        />

        {this.state.markers.map((marker) => {
          return marker.zoom === this.state.zoom ? (
            <Marker
              key={`marker-1`}
              position={[marker.x, marker.y]}
              icon={L.icon({
                iconUrl: `${url}/images/${marker.icon}.png`,
                shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
                iconSize: [51, 34],
              })}
            >
              <Popup>{marker.body}</Popup>
            </Marker>
          ) : null;
        })}
      </Map>
    );
  }
}

export default Leaflet;
