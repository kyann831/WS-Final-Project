import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Jumbotron from "./components/Jumbotron";



class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <Jumbotron/>
       
      </div>
    );
  }
}

export default App;
