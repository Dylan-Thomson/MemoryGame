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
      "/assets/images/bowtie.jpeg",
      "/assets/images/bwon.jpg",
      "/assets/images/towelkitten.jpg",
    ]
  }

  updateScore = (key) => {
    if(this.state.clicked.includes(key)) {
      console.log("wrong");
      this.setState({
        score: 0,
        clicked: [],
        message: "Wrong!"
      });
    }
    else {
      console.log("right");
      this.setState({
        score: this.state.score + 1,
        clicked: [...this.state.clicked, key],
        message: "Correct!",
        topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
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
        <div className="d-flex flex-row flex-wrap w-100">
          {this.state.images.map((url, i) => (
            <GameCard 
              key={i} 
              url={url} 
              onClick={() => this.updateScore(i)} 
            />
          ))}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Game;