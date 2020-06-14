import React, { Component } from "react";
import Form from "./Form";
import About from "./About";

export default class FormBox extends Component {
  constructor(props) {
    super(props);

    this.state = { showForm: false };
  }

  slideRight() {
    this.setState({ showForm: true });
  }
  slideLeft() {
    this.setState({ showForm: false });
  }
  render() {
    let about = (
      <div
        className={
          this.state.showForm
            ? "form slide-out "
            : " slide-in col-lg-6 col-12  form"
        }
      >
        {this.state.showForm ? "" : <About />}
        {this.state.showForm ? (
          ""
        ) : (
          <div
            onClick={(event) => this.slideRight(event)}
            className="slide-to-form"
          >
            Speak up <i className="fa fa-arrow-right"></i>
          </div>
        )}
      </div>
    );
    let form = (
      <div
        className={
          this.state.showForm
            ? "col-lg-6 col-12 form slide-in "
            : "slide-out col-lg-6"
        }
      >
        <h2>
          VOICES <br /> 4CHANGE.
        </h2>
        <Form />
        {!this.state.showForm ? (
          ""
        ) : (
          <button
            onClick={(event) => this.slideLeft(event)}
            className="btn btn-green slide-to-back"
          >
            <i className="fa fa-arrow-left"></i> {"  "}back
          </button>
        )}
      </div>
    );
    return (
      <div className="form-box">
        <div className="container">
          <div className="row">
            {about}

            <div className="col-lg-6 col-12 background-form">
              <div className="">
                <div className="big-title">
                  <h1>
                    VOICES <br /> 4CHANGE.
                  </h1>
                  <h5>The community of consciousness . </h5>
                </div>

                <p className="info-second">© 2020 Voices4Change</p>
              </div>
            </div>
            {form}
          </div>
        </div>
      </div>
    );
  }
}
