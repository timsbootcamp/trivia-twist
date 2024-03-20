import React, { useState } from "react";
import { WriteScoresToLocalStorage } from "../../Lib/localStorage";
import Leaderboard from "../Leaderboard/Leaderboard";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./index.css";

const QuizResult = ({ score }) => {
  const [initials, setInitials] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    WriteScoresToLocalStorage(initials, score);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Logo section */}
        <div className="col-md-4">
          <img className="logo" src="/Logo.png" alt="Logo" />
        </div>
        <div className="col-md-4">
          {submitted ? (
            <Leaderboard />
          ) : (
            <Card className="quiz-result-card">
              <Card.Body>
                <Card.Title>Quiz Completed!</Card.Title>
                <Card.Text>Your score: {score}</Card.Text>
                <div className="d-flex justify-content-center"> {/* Centering the form */}
                <form className="initials-form" onSubmit={handleSubmit}>
                  <label>
                    Initials:
                    <input
                      type="text"
                      value={initials}
                      onChange={(e) => setInitials(e.target.value)}
                    />
                  </label>
                </form>
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
        <div className="col-md-4">
          {/* right side cubes here */}
        </div>
      </div>
      {!submitted && (
        <div className="row justify-content-center">
          <Button variant="primary" className="submit-button" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizResult;