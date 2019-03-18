import React, { Component } from "react";
import Game from './pages/Game'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Game />
        <BrowserRouter basename="/" />
      </React.Fragment>
    );
  }
}

export default App;
