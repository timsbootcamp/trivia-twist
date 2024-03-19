import React, { useState } from "react";
import { WriteScoresToLocalStorage } from "../../Lib/localStorage";
import Leaderboard from "../Leaderboard/Leaderboard";
import './index.css'

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
        {/* <img className="background-elements" src="src\assets\Main-Page-Elements\Fuchsia and Pink Trivia Night Instagram Story (Website) (3).png"></img> */}
        <div class="columns">
         <div class="column is-one-third">
          {/* <img src="src\asset\Final-Score-Page\left side cubes.svg"></img> */}
          </div>

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
          <button  type="submit">Submit</button>
        </form>
        </div>


       <div class="column is-one-third">
          {/* <img src="src\assets\Final-Score-Page\right side cubes.svg"></img> */}
       </div>
       </div>
       </div>

      
      )}
    </div>
  );
};

//   return (
//     <div>
//       {submitted ? (
//         <div>
//           <Leaderboard />
//         </div>
//       ) : (
//       <div>  
//       <h2>Quiz Completed!</h2>
//       <p>Your score: {score}</p>
  
//     <form onSubmit={handleSubmit}>
//           <label>
//             Initials:
//             <input
//               type="text"
//               value={initials}
//               onChange={(e) => setInitials(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//         </div>
//       )}
//     </div>
//   );
// };

export default QuizResult;
