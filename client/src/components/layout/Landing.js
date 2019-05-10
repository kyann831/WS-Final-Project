import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card, Col, Row } from "react-materialize";

class Landing extends Component {
  render() {
    return (
      <div className="row" >
    <div className="col s12" >
      <div className="card">
        <div className="card-image"> <img src={this.props.image} alt=""></img></div>


          <span class="card-title"></span>
        
        <div class="card-content">{this.props.content}
        </div>
        <div class="card-action">
          <a href={this.props.href}>{this.props.action}</a>
       
  
      <div style={{ height: "65vh", marginTop:40, paddingBottom: 170, paddingLeft: 120}} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 ">

            <h4>
            Take the test. Watch the videos. Track your results. {" "}
              <span style={{ fontFamily: "monospace" }}></span> 
            </h4>
            <p className="flow-text grey-text text-darken-1">
            <center> Afraid of falling? Try Walk Safe!</center>
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft: 100
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3" 
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginRight: 150
                
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3 right" 
              >
                Log In
              </Link>
              </div>
      </div>
    </div>
  </div>
  
            </div>
          </div>
        </div>
        
      </div>
    
      
    );
  }
}



export default Landing;

