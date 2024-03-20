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
      {/* <img
        className="BgGraphics"
        src="./assets/2D-BG-Elements.png"
      ></img> */}

    
        <div className="logoIcon">
          <img src="/Logo.png"></img>
        </div>
   

       <div className="columns">
        {/* <div className="column is-one-third">
          <img
            className="cubes"
            src="/assets/left side cubes.svg"
          ></img>
        </div>  */}


      {/* <Container className="questionContainer"> */}
        
          <div className="questionChoices">
            <div 
              style={{
                // display: "block",
                border: "1px solid black",
                backgroundColor: "#D0FF96",
                padding: "10px",
                marginBottom: "20px",
                width: "90%",
                margin: "20vh auto 0",
              }}
            >
              <h1 className="Q">
                {decodeHTMLEntities(questionData.question)}
              </h1>
            </div>

            <div className="Options">
              {questionData.options.map((option, index) => (
                <div className="Option"
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    

                  }}
                >
                  {decodeHTMLEntities(option)}
                </div>
              ))}
            </div>
          </div>

      {/* </Container> */}

       {/* <div className="column is-one-third">
        <img
          className="cubes"
          src="/assets/right side cubes.svg"
        ></img>
      </div> */}
      </div> 
    </>
  );
};

export default Question;
