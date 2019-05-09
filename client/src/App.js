import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Videolibrary from "./components/layout/VideoLibrary";
import Test from "./components/layout/Test";
import Tracking from "./components/layout/Tracking";
import HomeMod from "./components/layout/HomeMod";
import Safety from "./components/layout/Safety";
import Strength from "./components/layout/Strength";
import Flexibility from "./components/layout/Flexibility";
import Results from "./components/layout/Results";
import About from "./components/layout/About";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/videolibrary" component={Videolibrary} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/tracking" component={Tracking} />
            <Route exact path="/homemod" component={HomeMod} />
            <Route exact path="/safety" component={Safety} />
            <Route exact path="/strength" component={Strength} />
            <Route exact path="/flexibility" component={Flexibility} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/about" component={About} />

            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
