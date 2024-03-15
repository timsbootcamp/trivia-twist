import React, { useState } from "react";
import { WriteScoresToLocalStorage } from "../../Lib/localStorage";
import Leaderboard from "../Leaderboard/Leaderboard";

const QuizResult = ({ score }) => {
  const [initials, setInitials] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Initials:" + initials + " " + score);
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
      <h2>Quiz Completed!</h2>
      <p>Your score: {score}</p>
  
    <form onSubmit={handleSubmit}>
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
      )}
    </div>
  );
};

export default QuizResult;
