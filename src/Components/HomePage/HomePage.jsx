import React, { useState } from "react";
import "./HomePage.css";
import TriviaTwistLogoWithLights from "../../assets/TriviaTwistLogoWithLights.svg";
import TriviaSelection from "../TriviaSelection/TriviaSelection";
import QuizApp from "../QuizApp/QuizApp";
import TwoDimComponents from "../../Components/HomePage/TwoDimComponents";

function HomePage() {
  const [isHomePageVisible, setIsHomePageVisible] = useState(true);
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleStartClick = () => {
    setIsHomePageVisible(false);
  };
  const handleSelectDifficulty = (url) => {
    setSelectedUrl(url);
  };

  return (
    <div className="homePage">
      {isHomePageVisible ? (
        <div className="homePageContent">
          <img
            src={TriviaTwistLogoWithLights}
            alt="Trivia Twist Logo With Lights"
            className="logo"
          />
          <TwoDimComponents />
          <button onClick={handleStartClick}>Start</button>
        </div>
      ) : (
        <div>
          <TriviaSelection onSelectDifficulty={handleSelectDifficulty} />
          {selectedUrl && <QuizApp triviaUrl={selectedUrl} />}
        </div>
      )}
    </div>
  );
}

export default HomePage;
