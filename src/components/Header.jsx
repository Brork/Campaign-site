import React from "react";
import "./Header.css";
import { Link } from "@reach/router";

class Header extends React.Component {
  render() {
    const { pageHeader } = this.props;
    const { updatePageHeader } = this.props;
    return (
      <div className="header">
        <Link
          to={"/"}
          className="header-button white-text"
          onClick={() => {
            if (pageHeader === true) {
              updatePageHeader();
            }
          }}
          //   style={
          //     window.location.pathname === "/"
          //       ? { color: "rgba(0, 0, 0, 0.7)" }
          //       : {}
          //   }
        >
          HOME
        </Link>
        <Link
          to={"/world-map"}
          className="header-button white-text"
          onClick={() => {
            if (pageHeader === false) {
              updatePageHeader();
            }
          }}
          //   style={
          //     window.location.pathname === "/world-map"
          //       ? { color: "rgba(0, 0, 0, 0.7)" }
          //       : {}
          //   }
          id="map-button"
        >
          MAP
        </Link>
      </div>
    );
  }
}

export default Header;
