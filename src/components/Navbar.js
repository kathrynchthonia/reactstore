import React, { Component } from "react";

// Import Materialize
import M from "materialize-css";

class Navbar extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <nav className="pink">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Navbar
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a className="active-link" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="solutions.html">Shop</a>
              </li>
              <li>
                <a href="signup.html">Sign Up</a>
              </li>
              <li>
                <a href="#login-modal" className="btn indigo modal-trigger">
                  Login
                </a>
              </li>
              <li>
                <a href="https://facebook.com">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
