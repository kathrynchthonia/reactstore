import React, { Component } from "react";

// Import Materialize
import M from "materialize-css";

import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <nav className="transparent">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              Hecate Rising
            </Link>
            <ul className="right hide-on-med-and-down">
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
            <a href="!#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
