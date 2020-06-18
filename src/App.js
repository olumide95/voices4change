import React from "react";
import "./App.css";
import Home from "./Views/Home";
import FormBox from "./Components/FormBox";
import AboutBox from "./Components/AboutBox";
import { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import Marquee from "./Components/Marquee";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/speak" component={FormBox} />
            <Route exact path="/about" component={AboutBox} />
            <Redirect to="/" />
          </Switch>
          <Marquee />
          <ToastContainer />
        </div>
      </Router>
    );
  }
}
