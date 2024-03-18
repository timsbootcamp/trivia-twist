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
       <img className="background-elements" src="src\assets\Elements\Final-Score-Page\2d elements.png"></img>
        <div class="columns">
         <div class="column is-one-third">
          <img src="src\assets\Elements\Final-Score-Page\left side cubes.svg"></img>
          </div>

<div class="column is-one-third">
<img className="logo" src="src\assets\Elements\Final-Score-Page\Logo.png"></img>
      <h2>Leaderboard</h2>
      <ul>
        {topFiveScores.map((player, index) => (
          <li key={index}>
            {player.userName} - {player.score}
          </li>
        ))}
      </ul>
      <div><button onClick={refreshPage}>Go Home</button></div>
    </div>
    </div>
    </div>
  );
};

export default Leaderboard;
