import React, { Component } from "react";
import ContactUsForm from "./ContactUsForm";
export default class ContactUs extends Component {
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
      <div className="about form-box">
        <div className="container">
          <div className="row">
            <div className={"col-lg-12 col-12"}></div>
          </div>
          <div className="row">
            <div className={"col-lg-12 col-12 form"}>
              <h2>Contact Us</h2>
              <ContactUsForm />
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}