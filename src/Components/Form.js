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
      to: "",
      country: "",
      motivation: "",
      loading: false,
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
  
  setName(event) {
    this.setState({ name: event.target.value });
  }

  setEmail(event) {
    this.setState({ to: event.target.value });
  }

  setMotivation = (motivation) => {
    this.setState({ motivation });
  };

  handleSubmit() {
    this.setState({ loading: true });

    window.emailjs.send(process.env.REACT_APP_SERVICE_ID, 'template_hme759v', this.state,process.env.REACT_APP_EMAIL_PUB_KEY)
      .then((result) => {
         this.resetForm();
         toast.success("Your Response was successfull!");
          console.log(result.text);
      }, (error) => {
         this.resetForm();
         toast.error("Error summiting response, Try again!");
         console.log(error.text);
      });
  }

  render() {
    const { country } = this.state;
    const options = [
      {
        value: "Would like to sponsor a program",
        label: "Would like to sponsor a program",
      },
      {
        value: "We are a non-profit interested in forging a partnership",
        label: "We are a non-profit interested in forging a partnership",
      },
      {
        value: "Want to lern more about MBEF's objectives",
        label: "Want to lern more about MBEF's objectives",
      },
    ];

    let disabled = this.state.loading ? "disabled" : "";
    let spinner = this.state.loading ? (
      <span className="spinner-border spinner-border-sm spin-icon">
        {"     "}
      </span>
    ) : (
      ""
    );
    // let showState =
    //   this.state.country === "United States" ? (
    //     <div className="form-field">
    //       <label htmlFor="state" className="select form-label">
    //         <span className="form-label-content">Zip Code</span>
    //       </label>
    //       <input
    //         className="form-control"
    //         type="text"
    //         name="zipcode"
    //         id="zipcode"
    //         required
    //         onChange={(event) => this.setZipcode(event)}
    //         value={this.state.zipcode}
    //       />
    //     </div>
    //   ) : (
    //     ""
    //   );

    let motivation_section = (
      <div>
        <div className="form-field">
          <label htmlFor="motivation" className="select form-label">
            <span className="form-label-content">
              How would you like to partner with us?
            </span>
          </label>
          <Select
            options={options}
            value={this.state.motivation}
            onChange={this.setMotivation}
            required
          />
        </div>
        </div>
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
            <label htmlFor="email" className="select form-label">
              <span className="form-label-content" id="femail">
                Email
              </span>
            </label>
            <input
              className="form-control"
              type="email"
              name="to"
              id="email"
              required
              value={this.state.to}
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

          {/* {showState} */}

          {motivation_section}

          <br />
          <div className="row">
            <div className="col-md-6">
              
            </div>
            <div className="col-md-6">
              <div className="subbtn">
                <button
                  className="btn btn-transparent "
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
