import React, { Component } from "react";

import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="primary-overlay">
          <Navbar />
          <Sidenav />
        </div>
      </header>
    );
  }
}

export default Header;
