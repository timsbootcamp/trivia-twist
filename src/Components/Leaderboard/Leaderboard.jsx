import React from "react";
import { readScoresFromLocalStorage } from "../../Lib/localStorage";
import useSound from "use-sound";
import cheersSfx from "../../Sounds/CheerSound.mp3";
import ClickSound from "../../Sounds/ButtonClickSound.wav";
import "./index.css";

const Leaderboard = () => {
  let scoresPlayers = readScoresFromLocalStorage();

  const topFiveScores = scoresPlayers.slice(0, 5);

  // Function to refresh the page
  function refreshPage() {
    window.location.reload(false);
  }

  // Hook to play cheering sound
  const [playCheers] = useSound(cheersSfx);
  const [clickSound] = useSound(ClickSound);

  //Array of file names for leaderboard badges
  const badgeFiles = [
    "/assets/1st-icon.png",
    "/assets/2nd-icon.png",
    "/assets/3rd-icon.png",
    "/assets/4th-icon.png",
    "/assets/5th-icon.png",
  ];

  return (
    <div className="leaderboard">
      {playCheers()}

      <div class="columns">
        <div class="column is-one-third"></div>

        <div class=" column is-one-third">
          <div className="logoContainer"></div>
          <div className="scoreContainer">
            <h2 className="">Leaderboard</h2>
            <container className="scores">
              <ul>
                {topFiveScores.map((player, index) => (
                  <li
                    key={index}
                    className="scoreDivs"
                    style={{
                      display: "block",
                      textAlign: "center",
                      border: "1px solid black",
                      padding: "10px",
                      marginBottom: "10px",
                      backgroundColor: "#FFF",
                    }}
                  >
                    <img
                      src={badgeFiles[index]}
                      alt={`Badge for ${index + 1}`}
                      className="leaderboardIcons"
                      style={{ marginRight: "10px" }}
                    />{" "}
                    {/* Display badge */}
                    {player.userName} - {player.score}
                  </li>
                ))}
              </ul>
            </container>
            <div>
              <button
                className="button"
                onClick={() => {
                  clickSound(); // Play the click sound
                  setTimeout(refreshPage, 400);
                }}
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
