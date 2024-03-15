import React from "react";
import { readScoresFromLocalStorage } from "../../Lib/localStorage";

const Leaderboard = () => {
  let scoresPlayers = readScoresFromLocalStorage();

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {scoresPlayers.map((player, index) => (
          <li key={index}>
            {player.userName} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
