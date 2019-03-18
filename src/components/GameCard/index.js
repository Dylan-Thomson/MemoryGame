import React from "react";
import "./style.css";

export function GameCard(props) {
  return (
    <div role="img" className="game-card img-thumbnail m-2" style={{ backgroundImage : `url(${props.url})` }} alt="Game Image" onClick={props.onClick}></div>
  )
}

export default GameCard;