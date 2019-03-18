import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GameCard from "../components/GameCard";
class Game extends Component {
  state = {
    score: 0,
    message: "Click any image to begin!",
    topScore: 0,
    clicked: [],
    images: [
      "/images/bowtie.jpeg",
      "/images/bwon.jpg",
      "/images/towelkitten.jpg",
      "/images/leo.jpg",
      "/images/white.jpg",
      "/images/aurora.jpg",
      "/images/fold.jpg",
      "/images/pounce.jpg",
    ]
  }

  updateScore = (key) => {
    if(this.state.clicked.includes(key)) {
      this.setState({
        score: 0,
        clicked: [],
        message: "Your Guess Was Wrong!",
        images: this.state.images.sort(() => 0.5 - Math.random())
      });
    }
    else {
      this.setState({
        score: this.state.score + 1,
        clicked: [...this.state.clicked, key],
        message: "Your Guess Was Correct!",
        topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore,
        images: this.state.images.sort(() => 0.5 - Math.random())
      });
    }
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="container d-flex flex-row flex-wrap mx-auto justify-content-center my-5">
          {this.state.images.map((url, i) => (
            <GameCard 
              key={i} 
              url={url} 
              onClick={() => this.updateScore(url)} 
            />
          ))}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Game;