import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    ><h1>Take the test. Watch the videos. Track your results.</h1>
      {children}
    </div>
  );
}

export default Jumbotron;
