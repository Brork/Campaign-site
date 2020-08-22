import React from "react";
import "./Marker.css";

function Marker(props) {
  const { marker } = props;
  return (
    <>
      <div
        className="pointer"
        style={{ top: marker.y - 16, left: marker.x - 8 }}
      ></div>
      <div
        className="Marker"
        style={{ top: marker.y - 116, left: marker.x - 35 }}
      >
        {marker.body}
      </div>
    </>
  );
}

export default Marker;
