import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class ContactUsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      loading: false,
    };

    this.baseState = this.state;
  }
  resetForm = () => {
    this.setState(this.baseState);
  };
  setName(event) {
    this.setState({ name: event.target.value });
  }

  setEmail(event) {
    this.setState({ email: event.target.value });
  }

  setMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit() {
    this.setState({ loading: true });
    window.emailjs.send(process.env.REACT_APP_SERVICE_ID, 'template_mve8lsx', this.state,process.env.REACT_APP_EMAIL_PUB_KEY)
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
    
    let disabled = this.state.loading ? "disabled" : "";
    let spinner = this.state.loading ? (
      <span className="spinner-border spinner-border-sm spin-icon">
        {"     "}
      </span>
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
            <label htmlFor="email" className="select form-label">
              <span className="form-label-content" id="femail">
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
            <label htmlFor="name" className="select form-label">
              <span className="form-label-content" id="fname">
                Message
              </span>
            </label>
            <input
              className="form-control"
              type="text"
              name="message"
              id="message"
              required
              value={this.state.message}
              onChange={(val) => this.setMessage(val)}
            />
          </div>
         
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
