import React from 'react';

const QuizResult = ({ score }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your score: {score}</p>
    </div>
  );
};

export default QuizResult;