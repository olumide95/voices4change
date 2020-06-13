import React, { Component } from "react";
import Form from "./Form";
export default class FormBox extends Component {
  render() {
    return (
      <div className="form-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 background-form">
              <div className="">
                <div className="big-title">
                  <h1>
                    VOICES <br /> 4CHANGE.
                  </h1>
                </div>
                <p className="info-small">
                  A little note about what voice for change is..... Giving
                  meaning to your voice...
                </p>
                <p className="info-second">© 2020 Voices4Change</p>
              </div>
            </div>
            <div className="col-lg-6   form">
              <h2>
                VOICES <br /> 4CHANGE.
              </h2>

              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
