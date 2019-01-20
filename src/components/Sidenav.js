import React, { Component } from "react";

// Import Materialize
import M from "materialize-css";

import { Link } from "react-router-dom";

class Sidenav extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav indigo lighten-3">
          <li>
            <Link className="active-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/solutions">Shop</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="login-modal" className="btn indigo modal-trigger">
              Login
            </Link>
          </li>
          <li>
            <a href="https://facebook.com">
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <i className="fab fa-pinterest" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <i className="fab fa-tumblr" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;
