import React, { useState } from "react";
import AnswerOption from "../AnswerOption/AnswerOption";
import { decodeHTMLEntities } from "../../Lib/formatting";
import "bulma/css/bulma.min.css";
import "./index.css";
import { Container } from "react-bulma-components";

const Question = ({ questionData, onAnswer, onNext }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onAnswer(option); // Pass the selected option back to QuizApp
    onNext(); // Move to the next question
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
    setSelectedOption("");
    onNext();
  };

  return (
    <>
      <img
        className="BgGraphics"
        src="./assets/2D-BG-Elements.png"
      ></img>

      <div className="columns">
        <div className="column logoIcon">
          <img src="/Logo.png"></img>
        </div>
      </div>

      <div className="columns">
        <div className="column is-one-third">
          <img
            className="cubes"
            src="/assets/left side cubes.svg"
          ></img>
        </div>


      <Container className="questionContainer">
        <div className="columns">
          <div className="column is-full">
            <div
              style={{
                display: "block",
                border: "1px solid black",
                backgroundColor: "#D0FF96",
                padding: "10px",
                marginBottom: "20px",
              }}
            >
              <div className="Question">
                {decodeHTMLEntities(questionData.question)}
              </div>
            </div>

            <div className="Options">
              {questionData.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    display: "block",
                    border: "1px solid black",
                    padding: "10px",
                    marginBottom: "10px",
                    backgroundColor: "#FFF",
                    cursor: "pointer",
                  }}
                >
                  {decodeHTMLEntities(option)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="column is-one-third">
        <img
          className="cubes"
          src="/assets/right side cubes.svg"
        ></img>
      </div>
      </div>
    </>
  );
};

export default Question;
