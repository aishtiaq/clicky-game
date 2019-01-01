import React from "react";
// import "./index.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" ,backgroundImage: `url("assets/pow-star.png")`}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
