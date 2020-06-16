import React, { Component } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { ApiService } from "../Services/Api.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      country: "",
      zipcode: "",
      motivation: "",
      comment: "",
      selectedMotivation: [],
      otherMotivation: "",
      message: "",
      showOtherMotivation: false,
      loading: false,
      commentbox: false,
    };

    this.baseState = this.state;
  }
  resetForm = () => {
    this.setState(this.baseState);
  };
  selectCountry(val) {
    this.setState({ country: val });
    this.setState({ zipcode: "" });
  }
  setZipcode(event) {
    this.setState({ zipcode: event.target.value });
  }
  setName(event) {
    this.setState({ name: event.target.value });
  }

  setEmail(event) {
    this.setState({ email: event.target.value });
  }

  setOtherMotivation(event) {
    this.setState({ otherMotivation: event.target.value });
  }

  setComment(event) {
    this.setState({ comment: event.target.value });
  }
  showCommentBox = () => {
    this.setState({ commentbox: !this.state.commentbox });
  };

  setMotivation = (motivation) => {
    let showOther = false;
    if (motivation) {
      motivation.map((item) => {
        if (item.value === "Other") {
          showOther = true;
        }
        return 1;
      });
    }
    console.log(showOther);
    if (showOther) {
      this.setState({ showOtherMotivation: true });
    } else {
      this.setState({ showOtherMotivation: false });
      this.setState({ otherMotivation: "" });
    }

    this.setState({ motivation });
  };

  setMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit() {
    this.setState({ loading: true });

    let motivation = null;
    if (this.state.motivation) {
      motivation = this.state.motivation.map((item) => {
        if (item.value === "Other") {
          return this.state.otherMotivation;
        }
        return item.value;
      });
    }

    ApiService.submit(
      this.state.name,
      this.state.email,
      this.state.country,
      this.state.zipcode,
      motivation ?? null,
      this.state.message ?? null,
      this.state.comment
    )
      .then((res) => {
        this.resetForm();
        toast.success("Your Submission was successfull!");
      })
      .catch((err) => {
        this.resetForm();
        toast.error("Error summiting response, Try again!");
      });
  }

  render() {
    const { country } = this.state;
    const options = [
      {
        value: "End Police Brutality",
        label: "End Police Brutality",
      },
      {
        value: "Frustrated with the System/Government",
        label: "Frustrated with the System/Government",
      },
      {
        value: "Broken Criminal Justice System",
        label: "Broken Criminal Justice System",
      },
      {
        value: "Speak truth to power",
        label: "Speak truth to power",
      },
      { value: "Other", label: "Other" },
    ];

    let disabled = this.state.loading ? "disabled" : "";
    let spinner = this.state.loading ? (
      <span className="spinner-border spinner-border-sm spin-icon">
        {"     "}
      </span>
    ) : (
      ""
    );
    let showState =
      this.state.country === "United States" ? (
        <div className="form-field">
          <label htmlFor="state" className="select form-label">
            <span className="form-label-content">Post Code</span>
          </label>
          <input
            className="form-control"
            type="text"
            name="zipcode"
            id="zipcode"
            required
            onChange={(event) => this.setZipcode(event)}
            value={this.state.zipcode}
          />
        </div>
      ) : (
        ""
      );

    let otherMotivation = this.state.showOtherMotivation ? (
      <input
        className="form-control"
        type="text"
        name="otherMotivation"
        id="otherMotivation"
        required
        placeholder="Other motivation..."
        onChange={(event) => this.setOtherMotivation(event)}
        value={this.state.otherMotivation}
      />
    ) : (
      ""
    );
    let motivation_section = this.state.commentbox ? (
      ""
    ) : (
      <div>
        <div className="form-field">
          <label htmlFor="motivation" className="select form-label">
            <span className="form-label-content">
              What issue motivated you to go out and protest?
            </span>
          </label>
          <Select
            isMulti={true}
            options={options}
            value={this.state.motivation}
            onChange={this.setMotivation}
            required
          />
        </div>
        {otherMotivation}
        <div className="form-field">
          <label htmlFor="motivation" className="select form-label">
            <span className="form-label-content">
              What message that was on your sign/poster/banner/placard during
              the protests?
            </span>
          </label>
          <textarea
            rows="2"
            cols="40"
            className="form-control"
            type="text"
            name="message"
            id="message"
            placeholder="Type the message that was on your sign/poster/banner/placard during
                the protests"
            onChange={(event) => this.setMessage(event)}
            required
            value={this.state.message}
          ></textarea>
        </div>
      </div>
    );

    let comment_box = this.state.commentbox ? (
      <div className="form-field">
        <label htmlFor="motivation" className="select form-label">
          <span className="form-label-content">What are your thoughts?</span>
        </label>
        <textarea
          rows="2"
          cols="40"
          className="form-control"
          type="text"
          name="comment"
          id="comment"
          placeholder="Type your thoughts"
          onChange={(event) => this.setComment(event)}
          required
          value={this.state.comment}
        ></textarea>
      </div>
    ) : (
      ""
    );
    return (
      <form
        className="formdesg"
        onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit();
        }}
      >
        <div className="inputarea">
          <div className="form-field">
            <label htmlFor="name" className="select form-label">
              <span className="form-label-content" id="fname">
                Name
              </span>
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              required
              value={this.state.name}
              onChange={(val) => this.setName(val)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="name" className="select form-label">
              <span className="form-label-content" id="fname">
                Email
              </span>
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              required
              value={this.state.email}
              onChange={(val) => this.setEmail(val)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="country" className="select form-label">
              <span className="form-label-content">Country</span>
            </label>
            <CountryDropdown
              classes="form-control"
              name="country"
              id="country"
              value={country}
              onChange={(val) => this.selectCountry(val)}
              required
            />
          </div>

          {showState}
          <div className="form-field">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                onChange={this.showCommentBox}
                checked={this.state.commentbox ? true : false}
              />
              <label class="form-check-label" for="exampleCheck1">
                I did not attend a protest but will like to comment
              </label>
            </div>
          </div>

          {motivation_section}

          {comment_box}

          <br />
          <div className="row">
            <div className="col-md-6">
              <ul className="social-network social-circle">
                <li>
                  <a href="#" className="icoYt" title="Youtube">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icoFacebook" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icoGoogle" title="Google +">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="subbtn">
                <button
                  className="btn btn-transparent"
                  type="Submit"
                  disabled={disabled}
                >
                  {spinner} {"     "}
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
