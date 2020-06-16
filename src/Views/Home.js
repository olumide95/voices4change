import React, { Component } from "react";

import { Link } from "react-router-dom";
export default class Home extends Component {
  constructor(props) {
    super(props);

    if (this.props.location.pathname !== "/") {
      document.getElementsByTagName("body")[0].style =
        "background-position: center;";
    } else {
      document.getElementsByTagName("body")[0].style =
        "background-position: unset;";
    }
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className="home-text">COMMUNITY OF CONCIOUSNESS</h1>
        <div className="center">
          <h1 className="home-text text-2">AMPLIFYING THE VOICES OF CHANGE</h1>
          <Link to="/speak">
            {" "}
            <button className="btn btn-transparent-home speak">Speak Up</button>
          </Link>
        </div>
      </div>
    );
  }
}
