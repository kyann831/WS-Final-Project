import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Jumbotron from "./components/Jumbotron";
import Login from "./containers/Login";





class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <Jumbotron/>
      <Login/>
       
      </div>
    );
  }
}

export default App;
