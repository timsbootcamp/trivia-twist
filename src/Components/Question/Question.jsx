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
        src="src\assets\Categories-Page-Elements\2D-BG-Elemnts.png"
      ></img>

      <div class="columns">
        <div class="column logoIcon">
          <img src="src\assets\Categories-Page-Elements\Logo.png"></img>
        </div>
      </div>

      <div class="columns">
        <div class="column is-one-third">
          <img
            className="cubes"
            src="src\assets\Categories-Page-Elements\left side cubes.svg"
          ></img>
        </div>


      <Container className="questionContainer">
        <div class="columns">
          <div class="column is-full">
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

      <div class="column is-one-third">
        <img
          className="cubes"
          src="src\assets\Categories-Page-Elements\right side cubes.svg"
        ></img>
      </div>
      </div>
    </>
  );
};

export default Question;
