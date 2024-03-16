import React, { useState } from 'react';
import AnswerOption from '../AnswerOption/AnswerOption'; 
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
    <div>
      <h2>{decodeHTMLEntities(questionData.question)}</h2>
      <ul>
        {questionData.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            selected={selectedOption === option}
            onSelect={handleOptionSelect}
          />
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
};

export default Question;