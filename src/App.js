import React from "react";
import "./App.css";
import Home from "./Views/Home";
import FormBox from "./Components/FormBox";
import AboutBox from "./Components/AboutBox";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
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
          </Switch>

          <ToastContainer />
        </div>
      </Router>
    );
  }
}
