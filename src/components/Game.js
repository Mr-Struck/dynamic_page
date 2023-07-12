import React from "react";
import { Link } from "react-router-dom";

export const Game = ({ game }) => {
  return (
    <div className="game">
      <img src={game.thumbnail} alt="" />
      <Link id="h2" to={`/game/${game.id}`}>
        {game.title}
      </Link>
    </div>
  );
};
