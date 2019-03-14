import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {
  // Setting the component's initial state
  state = {
    score: 0,
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Clicky Game</a>
      </nav>
      
    );
  }
}

export default NavBar;
