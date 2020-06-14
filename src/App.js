import React from "react";
import "./App.css";
import Home from "./Views/Home";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <ToastContainer />
      </div>
    );
  }
}
