// Question component
import React, { useState } from "react";
import AnswerOption from "../AnswerOption/AnswerOption"; // Importing AnswerOption component
import { decodeHTMLEntities } from "../../Lib/formatting"; // Importing decodeHTMLEntities function for HTML decoding
import "bulma/css/bulma.min.css"; // Importing Bulma CSS framework
import "./index.css"; // Importing custom CSS for Question component
import { Container } from "react-bulma-components"; // Importing Container component from React Bulma Components library

/**
 * Question component displays a single question with its answer options.
 * @param {Object} props - Properties passed to the Question component.
 * @param {Object} questionData - Object containing data for the current question.
 * @param {Function} onAnswer - Callback function triggered when an answer is selected.
 * @param {Function} onNext - Callback function triggered when moving to the next question.
 */

const Question = ({ questionData, onAnswer, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected answer option

  /**
   * Handles the selection of an answer option.
   * @param {string} option - The selected answer option.
   */
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onAnswer(option); // Pass the selected option back to QuizApp
    onNext(); // Move to the next question
  };

  /**
   * Handles the submission of the answer.
   * Resets selectedOption state and triggers onNext callback.
   */
  const handleSubmit = () => {
    onAnswer(selectedOption); // Pass the selected option back to QuizApp
    setSelectedOption(""); // Reset selected option
    onNext(); // Move to the next question
  };

  // Render Question and Answer options
  return (
    <>
      <div className="logoIcon">
        <img src="/Logo.png"></img>
      </div>

      <div className="columns">
        <div className="questionChoices">
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "#D0FF96",
              padding: "10px",
              marginBottom: "20px",
              width: "90%",
              margin: "20vh auto 0",
            }}
          >
            <h1 className="Q">{decodeHTMLEntities(questionData.question)}</h1>
          </div>

          <div className="Options">
            {questionData.options.map((option, index) => (
              <div
                className="Option"
                key={index}
                onClick={() => handleOptionSelect(option)}
                style={{}}
              >
                {decodeHTMLEntities(option)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Export Question component
export default Question;
