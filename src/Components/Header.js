import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <nav className={"navbar navbar-expand-lg "}>
        <a className="navbar-brand" href="#"></a>
        <div className=" my-2 my-lg-0 mobile-nav">
          <Link to="/">
            <button
              className="btn btn-transparent-home  top-btn no-outline mx-2 my-sm-0"
              type="submit"
            >
              HOME
            </button>
          </Link>
          <Link to="/about">
            <button
              className="btn btn-transparent-home  top-btn no-outline mx-2 my-sm-0"
              type="submit"
            >
              ABOUT
            </button>
          </Link>

          <a href={"mailto:info@vocies4change.org"}>
            <button
              className="btn btn-transparent-home  top-btn no-outline mx-2 my-sm-0"
              type="submit"
            >
              PARTNER WITH US
            </button>
          </a>
          <button
            className="btn btn-transparent-home donate  top-btn no-outline my-2 my-sm-0"
            type="submit"
          >
            DONATE
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>

          <div className=" my-2 my-lg-0">
            <Link to="/">
              <button
                className="btn btn-transparent-home  top-btn no-outline mx-2 my-sm-0"
                type="submit"
              >
                HOME
              </button>
            </Link>
            <Link to="/about">
              <button
                className="btn btn-transparent-home  top-btn no-outline mx-2 my-sm-0"
                type="submit"
              >
                ABOUT
              </button>
            </Link>

            <a href={"mailto:info@vocies4change.org"}>
              <button
                className="btn btn-transparent-home  top-btn no-outline mx-2 my-sm-0"
                type="submit"
              >
                PARTNER WITH US
              </button>
            </a>
            <button
              className="btn btn-transparent-home donate  top-btn no-outline my-2 my-sm-0"
              type="submit"
            >
              DONATE
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(Header);
