import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "30vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
          <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "25rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged in now. Are you ready?{" "}
                <span style={{ fontFamily: "monospace" }}>Walk Safe</span>👏
              </p>
            </h4>
            <Card content="Strength Exercise" action="Link 1" />
            <Card content="Walk Safe Test" action="Link 2" />
            <Card content="Home Mods" action="Link 3" />
            <br></br>
            <Card content="Flexibility Exercises" action="Link 4" />
            <Card content="Track your results" action="Link 5" />
            <Card content="Home Safety" action="Link 6" />

          </div>
        </div>
      </div>
      
    );
  }
}
class Card extends Component {

render() {
  return(
    
    <div className="col m4">
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content" style={{ padding:'10px', margin: '10px 0' }}> {this.props.content}
        </div>
        <div className="card-action">
          <a href="/">{this.props.action}</a>
        </div>
      </div>
    </div>
  </div>)
}

}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

