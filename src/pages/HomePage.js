import axios from "axios";
import React, { useEffect, useState } from "react";
import { Game } from "../components/Game";

export const HomePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const handleGameList = () => {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        headers: {
          "X-RapidAPI-Key":
            "7eb9496bf1mshc3429a52ff09277p122279jsn26643f7e216c",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response) => setGames(response.data))
        .catch((error) => console.log(error));
    };
    handleGameList();
  }, []);

  return (
    <div className="home container">
      {games.map((game, index) => {
        return <Game key={index} game={game} />;
      })}
    </div>
  );
};
