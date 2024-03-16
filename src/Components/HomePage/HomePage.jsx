import React, { useState } from "react";
import TriviaSelection from "../TriviaSelection/TriviaSelection";
import QuizApp from "../QuizApp/QuizApp";
import HomePageContent from "./HomePageContent";
import TriviaTwistLogoWithLights from "../../assets/TriviaTwistLogoWithLights.svg";
import TwoDimComponents from "../../Components/HomePage/TwoDimComponents";
import GreyCubeComponent from "../HomePage/GreyCubeComponent";
import "./HomePage.css";
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
        <HomePageContent onStartClick={handleStartClick} />
      ) : (
        <TriviaSelectionContainer
          onSelectDifficulty={handleSelectDifficulty}
          selectedUrl={selectedUrl}
        />
      )}
    </div>
  );
};

export default HomePage;
