import React, { useState } from 'react';

const QuizResult = ({ score }) => {
  const [initials, setInitials] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Initials:" + initials + " " + score);
  };

  return (
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
  );
};

export default QuizResult;
