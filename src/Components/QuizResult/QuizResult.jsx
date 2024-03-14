// import React from 'react';

// const QuizResult = ({ score }) => {
//   return (
//     <div>
//       <h2>Quiz Completed!</h2>
//       <p>Your score: {score}</p>
//     </div>
//   );
// };

// export default QuizResult;


import React, { useState } from 'react';

const QuizResult = ({ score }) => {
  const [initials, setInitials] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission of initials
    console.log("Submitted Initials:", initials);
    // You can perform any action here, such as sending data to a server
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
