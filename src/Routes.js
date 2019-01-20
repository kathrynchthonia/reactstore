import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Home from "./components/Home";

class Routes extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Signin} path="/signin" />
            <Route component={Signup} path="/signup" />
            <Route component={Checkout} path="/checkout" />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Routes;
