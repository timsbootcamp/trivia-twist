import React from "react";
import TriviaTwistLogo from "../../assets/TriviaTwistLogoWithLights.svg";
import TwoDimComponents from "./TwoDimComponents";
import GreyCubeComponent from "./GreyCubeComponent";
import "./HomePage.css";

const HomePageContent = ({ onStartClick }) => {
  return (
    <div className="homePageContent">
      <img src={TriviaTwistLogo} alt="Trivia Twist Logo" className="logo" />
      <TwoDimComponents />
      <GreyCubeComponent />
      <button className="startButton" onClick={onStartClick}>
        Start
      </button>
    </div>
  );
};

export default HomePageContent;