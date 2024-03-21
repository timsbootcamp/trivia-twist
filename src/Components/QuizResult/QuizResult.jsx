import React, { useState } from "react";
import { WriteScoresToLocalStorage } from "../../Lib/localStorage";
import Leaderboard from "../Leaderboard/Leaderboard";
import "./index.css";

// QuizResult component
const QuizResult = ({ score }) => {
  const [initials, setInitials] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Function to handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    WriteScoresToLocalStorage(initials, score);
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <Leaderboard />
        </div>
      ) : (
        <div>
          <div class="columns">
            <div class="column is-one-third"></div>

            {/* At end of Quiz, display message, score, and allow user to enter initials that get stored in local storage */}
            <div class="column is-one-third">
              <img className="logo" src="/Logo.png"></img>
              <h2>Quiz Completed!</h2>
              <p>Your score: {score}</p>

              <form className="initials-form" onSubmit={handleSubmit}>
                <label>
                  Initials:
                  <input
                    type="text"
                    value={initials}
                    onChange={(e) => setInitials(e.target.value)}
                  />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>

            <div class="column is-one-third"></div>
          </div>
        </div>
      )}
    </div>
  );
};

// Export QuizResult component
export default QuizResult;
