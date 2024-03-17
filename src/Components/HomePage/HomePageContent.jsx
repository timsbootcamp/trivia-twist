import React from "react";
import { Button } from "materialize-css";
import TriviaTwistLogo from "../../assets/TriviaTwistLogoWithLights.svg";
import "./HomePage.css";

const HomePageContent = ({ onStartClick }) => {
  return (
    <div className="container center-align">
      <div className="logo-container">
      <img src={TriviaTwistLogo} alt="Trivia Twist Logo" className="logo" />
      </div>
      <Button
        node="button"
        waves="light"
        className="btn-large"
        onClick={onStartClick}
      >
        Start
      </Button>
    </div>
  );
};

export default HomePageContent;
