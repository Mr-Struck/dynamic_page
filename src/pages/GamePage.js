import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const GamePage = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState([]);

  useEffect(() => {
    const handleGameList = () => {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
        params: { id: gameId },
        headers: {
          "X-RapidAPI-Key":
            "7eb9496bf1mshc3429a52ff09277p122279jsn26643f7e216c",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response) => setGame(response.data))
        .catch((error) => console.log(error));
    };
    handleGameList();
  });

  return (
    <div className="game-page">
      <img src={game.thumbnail} alt="" />
      <h1>{game.title}</h1>
      <p>{game.description}</p>
    </div>
  );
};
