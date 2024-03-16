import React, { useState } from 'react';
import AnswerOption from '../AnswerOption/AnswerOption'; 
import QuestionContainer from '../Question-Container/QuestionContainer';
import './index.css'


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
  <QuestionContainer>

</QuestionContainer>
<text><h2 className="Question">{questionData.question}</h2></text>
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
</>
);
};

export default Question;
