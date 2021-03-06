import React from "react";

export function NavBar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
      <a className="navbar-brand" href="/">Cat Clicker</a>
      <span className="navbar-text" id="message">{props.message}</span>
      <span className="navbar-text">Score: {props.score} | Top Score: {props.topScore}</span>
    </nav>
  )
}

export default NavBar;