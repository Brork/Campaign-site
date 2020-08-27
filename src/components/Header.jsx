import React from "react";
import "./Header.css";
import { Link } from "@reach/router";

class Header extends React.Component {
  render() {
    return (
      <div className="header-grid">
        <span className="header">
          <span>
            <h1 className="red-text">N</h1>
            <h1 className="white-text">C News</h1>
          </span>

          {/* <form className="inline searchbar">
          <label className="white-text">
            search
            <input></input>
          </label>
          <button className="searchbutton">
            <img
              src={require("../assets/search_icon.png")}
              alt="Enter"
              height="16"
            />
          </button>
        </form> */}

          <Link to={"/"} className="header-button white-text">
            topics
          </Link>
          <Link to={`/articles`} className="header-button white-text">
            articles
          </Link>
          {this.props.username === null ? (
            <button
              className="header-button white-text"
              onClick={() => {
                this.props.login("jessjelly");
              }}
            >
              <p className="log-button">login</p>
            </button>
          ) : (
            <button
              className="header-button white-text"
              onClick={this.props.logout}
            >
              logout
            </button>
          )}
        </span>
        <p className="username-banner">
          {this.props.username === null ? null : `user: ${this.props.username}`}
        </p>
      </div>
    );
  }
}

export default Header;
