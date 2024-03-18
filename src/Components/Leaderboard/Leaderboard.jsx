import React from "react";
import { readScoresFromLocalStorage } from "../../Lib/localStorage";

const Leaderboard = () => {
  let scoresPlayers = readScoresFromLocalStorage();
  
  const topFiveScores = scoresPlayers.slice(0, 5);

 function refreshPage() {
  window.location.reload(false);
}

  return (
    <div>
       <img className="background-elements" src="./assets/2D-BG-Elements.png"></img>
        <div class="columns">
         <div class="column is-one-third">
          <img src="\assets\left side cubes.svg"></img>
          </div>

<div class="column is-one-third">
<img className="logo" src="/Logo.png"></img>
      <h2>Leaderboard</h2>
      <ul>
        {topFiveScores.map((player, index) => (
          <li key={index}>
            {player.userName} - {player.score}
          </li>
        ))}
      </ul>
      <div><button className="btn is-rounded" onClick={refreshPage}>Go Home</button></div>
    </div>
    </div>
    </div>
  );
};

export default Leaderboard;
