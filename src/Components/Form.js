import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { ApiService } from "../Services/Api.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      country: "",
      region: "",
      motivation: "",
      otherMotivation: "",
      message: "",
      showOtherMotivation: false,
      loading: false,
    };

    this.baseState = this.state;
  }
  resetForm = () => {
    this.setState(this.baseState);
  };
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  setName(event) {
    this.setState({ name: event.target.value });
  }

  setOtherMotivation(event) {
    this.setState({ otherMotivation: event.target.value });
  }

  setMotivation(event) {
    if (event.target.value === "Other") {
      this.setState({ showOtherMotivation: true });
    } else {
      this.setState({ showOtherMotivation: false });
    }
    this.setState({ motivation: event.target.value });
  }
  setMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit() {
    this.setState({ loading: true });
    let motivation =
      this.state.motivation === "Other"
        ? this.state.otherMotivation
        : this.state.motivation;
    ApiService.submit(
      this.state.name,
      this.state.country,
      this.state.region,
      motivation,
      this.state.message
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
    const { country, region } = this.state;
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
            <span className="form-label-content">State</span>
          </label>
          <RegionDropdown
            classes="form-control"
            name="state"
            id="state"
            country={country}
            value={region}
            onChange={(val) => this.selectRegion(val)}
            required
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
            <label htmlFor="motivation" className="select form-label">
              <span className="form-label-content">
                What issue motivated you to go out to and protest?
              </span>
            </label>

            <select
              className="form-control floating-select"
              name="motivation"
              id="motivation"
              value={this.state.motivation}
              required
              onChange={(event) => this.setMotivation(event)}
            >
              <option value="">Select</option>
              <option value="End Police Brutality">End Police Brutality</option>
              <option value="Against Racial Injustice/Inequality">
                Against Racial Injustice/Inequality
              </option>

              <option value="Frustrated with the System/Government">
                Frustrated with the System/Government
              </option>
              <option value="Broken Criminal Justice System">
                Broken Criminal Justice System
              </option>
              <option value="Speak truth to power">Speak truth to power</option>

              <option value="Other">Other</option>
            </select>
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
              placeholder="Type the message"
              onChange={(event) => this.setMessage(event)}
              required
              value={this.state.message}
            ></textarea>
          </div>

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
      </form>
    );
  }
}
