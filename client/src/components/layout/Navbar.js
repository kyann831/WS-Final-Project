import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed"> 
        <nav className="z-depth-0">
          <div className="nav-wrapper blue accent 3">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                marginLeft: 20
                
              }}
              className="col s5 brand-logo black-text" 
            >
              Walk Safe
              <i className="material-icons">directions_walk</i>

            </Link>
            <Link
              to="/about"
              style={{
                fontFamily: "monospace",
                paddingLeft: 20,
                marginLeft: 240

                
              }}
              className="col s5 brand-logo black-text" 
            >
              About
            </Link>
            <Link
              to="/videolibrary"
              style={{
                fontFamily: "monospace",
                paddingRight: 20

                
              }}
              className="col s5 brand-logo left black-text right" 
            >
              Video Library
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
