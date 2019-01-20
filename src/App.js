import React, { Component } from "react";
import "./App.css";
import SelectList from "./components/SelectList";
import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";

import "materialize-css/dist/css/materialize.min.css";

import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        <Navbar />
        <Sidenav />
      </div>
    );
  }
}

export default App;
