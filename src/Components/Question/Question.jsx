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
    onAnswer(option); // Pass the selected option back to QuizApp
    onNext(); // Move to the next question
  };
  

  const handleSubmit = () => {
    onAnswer(selectedOption);
    setSelectedOption('');
    onNext();
  };



  return (
    <>
   <div style={{ display: 'block', border: '1px solid black', backgroundColor:'#D0FF96', padding: '10px', marginBottom: '20px' }}>
   <div className="Question">{decodeHTMLEntities(questionData.question)}</div>

      </div>

      <div>
        {questionData.options.map((option, index) => (
          <div key={index} onClick={() => handleOptionSelect(option)} style={{ display: 'block', border: '1px solid black', padding: '10px', marginBottom: '10px', backgroundColor: '#FFF', cursor: 'pointer' }}>
            {decodeHTMLEntities(option)}
          </div>
        ))}
      </div>
    
    </>
  );
};

export default Question;

