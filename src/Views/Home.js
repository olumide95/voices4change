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
        <h1 className="home-text">Modesola Bassir</h1>
         <h1 className="home-text">Educational Foundation</h1>
        <div className="center">
          <h2 className="home-text text-2">Transforming lives through community-Centerd Iniftiatives one child at a time</h2>
          <Link to="/speak">
            {" "}
            <button className="btn btn-transparent-home speak">Partner With Us</button>
          </Link>
        </div>
      </div>
    );
  }
}
