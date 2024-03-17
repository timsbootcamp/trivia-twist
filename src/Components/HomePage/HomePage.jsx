import React, { useState } from "react";
import TriviaSelection from "../TriviaSelection/TriviaSelection";
import QuizApp from "../QuizApp/QuizApp";
import HomePageContent from "./HomePageContent";
import TriviaTwistLogoWithLights from "../../assets/TriviaTwistLogoWithLights.svg";
import { Button } from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import TwoDimComponents from "../../Components/HomePage/TwoDimComponents";
import GreyCubeComponent from "../HomePage/GreyCubeComponent";
import PinkCubeComponent from "../HomePage/PinkCubeComponent";
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
    <div className="container homePage">
      {isHomePageVisible ? (
          <HomePageContent />
      ) : (
        <TriviaSelectionContainer
          onSelectDifficulty={handleSelectDifficulty}
          selectedUrl={selectedUrl}
        />
      )}
      <div className="row">
        <div className="col s4">
          <GreyCubeComponent />
        </div>
        <div className="col s4">
          <PinkCubeComponent />
        </div>
        <div className="col s4">
          <TwoDimComponents />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
