import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";

import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
