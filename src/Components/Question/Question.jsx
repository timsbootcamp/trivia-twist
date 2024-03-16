// import React, { useState } from 'react';
// import AnswerOption from '../AnswerOption/AnswerOption'; 
// import QuestionContainer from '../Question-Container/QuestionContainer';
// import './index.css'
// import { decodeHTMLEntities } from "../../Lib/formatting";
// import 'bulma/css/bulma.min.css';




// const Question = ({ questionData, onAnswer, onNext }) => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleSubmit = () => {
//     onAnswer(selectedOption);
//     setSelectedOption('');
//     onNext();
//   };

//   return (
//     <>

// <div style={{display: 'block'}}>
//   <Notification color="info">
//     <div className="Question">{decodeHTMLEntities(questionData.question)}</div>
//   </Notification>
// </div>


//   <ul>
//   {questionData.options.map((option, index) => (
//     <AnswerOption
//       key={index}
//       option={option}
//       selected={selectedOption === option}
//       onSelect={handleOptionSelect}
//     />
//   ))}
// </ul>
// <button onClick={handleSubmit}>Submit Answer</button>
// </>
// );
// };

// export default Question;

import React, { useState } from 'react';
import AnswerOption from '../AnswerOption/AnswerOption';
import QuestionContainer from '../Question-Container/QuestionContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { decodeHTMLEntities } from "../../Lib/formatting";

const Question = ({ questionData, onAnswer, onNext }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
    setSelectedOption('');
    onNext();
  };

  return (
    <>
   <div style={{ display: 'block', border: '1px solid black', backgroundColor:'#D0FF96', padding: '10px', marginBottom: '20px' }}>
   <div className="Question">{questionData.question}</div>
   {/* <div className="Question">{decodeHTMLEntities(questionData.question)}</div> */}

      </div>

      <div>
        {questionData.options.map((option, index) => (
          <div key={index}>
            <div style={{ display: 'block', border: '1px solid black', backgroundColor:'#07B4AA', padding: '10px', marginBottom: '10px' }} onClick={() => handleOptionSelect(option)}>
              {decodeHTMLEntities(option)}
            </div>
          </div>
        ))}
      </div>
      {/* <ul>
        {questionData.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            selected={selectedOption === option}
            onSelect={handleOptionSelect}
          />
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit Answer</button> */}
    </>
  );
};

export default Question;

