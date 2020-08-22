import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as api from "../api";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

class Leaflet extends React.Component {
  state = {
    markers: [{ x: 13.239945499286312, y: 116.01562500000001, body: "hi" }],
    refObj: {},
  };

  componentDidMount() {
    // // set up leaflet map state
    // const map = L.map("map").setView([0, 0], 1);
    // //add custom tile layer and set properties
    // L.tileLayer(`http://localhost:3000/map/{z}/{x}/{y}.png`, {
    //   attribution: "&copy;",
    //   maxZoom: 4,
    //   continuousWorld: false,
    //   noWrap: true,
    // }).addTo(map);
    // // adding markers from database
    // // api.fetchMarkers().then(({ data }) => {
    // //   this.setState({ markers: data.markers });
    // // });
    // map.on("click", function (e) {
    //   const coord = e.latlng;
    //   console.log(coord);
    // });
    // this.state.markers.forEach((marker, index) => {
    //   console.log("in the loop");
    //   this.state.refObj[index] = L.marker([marker.x, marker.y])
    //     .addTo(map)
    //     .bindPopup(marker.body);
    // });
  }

  componentDidUpdate() {}

  // addMarker = (e) => {
  //   const { markers } = this.state;
  //   markers.pop();
  //   markers.push(e.latlng);
  //   this.setState({ markers });
  // };

  render() {
    return (
      <Map
        center={[0, 0]}
        zoom={1}
        maxZoom={4}
        minZoom={1}
        onClick={(e) => {
          const coord = e.latlng;
          console.log(coord);
        }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          attribution="&copy;"
          url="http://localhost:3000/map/{z}/{x}/{y}.png"
          continuousWorld={false}
          noWrap={true}
        />
        <Marker
          key={`marker-1`}
          position={[19.311143355064655, -21.796875000000004]}
          // icon={L.icon({
          //   iconUrl: icon,
          //   shadowUrl: iconShadow,
          //   iconSize: [38, 95], // size of the icon
          //   shadowSize: [50, 64], // size of the shadow
          //   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          //   shadowAnchor: [4, 62], // the same for the shadow
          //   popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
          // })}
        ></Marker>

        {/* {this.state.markers.map((marker, i) => (
          <Marker key={`marker-${i}`} position={[marker.x, marker.y]}></Marker>
        ))} */}
      </Map>
    );

    // return <div id="map" style={{ height: "100vh" }}></div>;
  }
}

export default Leaflet;
