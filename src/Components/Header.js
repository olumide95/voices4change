import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <nav className={"navbar navbar-expand-lg "}>
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

          
          <button
            className="btn btn-transparent-home donate no-outline"
            type="submit"
          >
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="business" value="F5SC6HKPK8CWU" />
                <input type="hidden" name="no_recurring" value="0" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" style={{width: "3rem"}} />
                <img alt="" border="0" src="https://www.paypal.com/en_NG/i/scr/pixel.gif" width="1" height="1" />
              </form>
          </button>

          <Link to="/contact-us">
              <button
                className="btn btn-transparent-home  top-btn no-outline mx-2 my-sm-0"
              >
                CONTACT US
              </button>
         </Link>

        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>

          <div className=" my-2 my-lg-0">
            <Link to="/">
              <button
                className="btn btn-transparent-home  top-btn no-outline mx-2 my-sm-0"
              >
                HOME
              </button>
            </Link>
            <Link to="/about">
              <button
                className="btn btn-transparent-home  top-btn no-outline mx-2 my-sm-0"
              >
                ABOUT
              </button>
            </Link>

            <button
              className="btn btn-transparent-home donate top-btn no-outline my-2 my-sm-0"
            >
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="business" value="F5SC6HKPK8CWU" />
                <input type="hidden" name="no_recurring" value="0" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" style={{width: "5rem"}}/>
                <img alt="" border="0" src="https://www.paypal.com/en_NG/i/scr/pixel.gif" width="1" height="1"/>
              </form>
            </button>

            <Link to="/contact-us">
              <button
                className="btn btn-transparent-home  top-btn no-outline mx-2 my-sm-0"
              >
                CONTACT US
              </button>
            </Link>

          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(Header);
