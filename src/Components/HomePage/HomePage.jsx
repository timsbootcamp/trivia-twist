import React, { useState } from "react";
import { Button, Columns, Container } from "react-bulma-components";
import TriviaTwistLogo from "/assets/main-page-logo.png";
import TriviaSelection from "../TriviaSelection/TriviaSelection";
import QuizApp from "../QuizApp/QuizApp";
import TwoDimComponents from "../../Components/HomePage/TwoDimComponents";
import GreyCubeComponent from "../HomePage/CubeComponents/GreyCubeComponent";
import PinkCubeComponent from "../HomePage/CubeComponents/PinkCubeComponent";
import PurpleCubeComponent from "../HomePage/CubeComponents/PurpleCubeComponent";
import LogoComponent from "../LogoComponent";
import useSound from "use-sound";
import "./HomePage.css";
import ClickSound from "../../Sounds/ButtonClickSound.wav";

// HomePage component definition
function HomePage() {
  const [isHomePageVisible, setIsHomePageVisible] = useState(true);
  const [selectedUrl, setSelectedUrl] = useState(null);

  // Function to handle start click event
  const handleStartClick = () => {
    setIsHomePageVisible(false);
  };

  // Function to handle difficulty selection
  const handleSelectDifficulty = (url) => {
    setSelectedUrl(url);
  };

    // Hook to use sound
  const [clickSound] = useSound(ClickSound);

  return (
    <div className="HomePage">
      {isHomePageVisible ? (
        <>
          <div className="topContainer">
            <img src="/assets/main-page-logo.png" className="logo"></img>
          </div>

          <div className="contentContainer">
            <div className="cubeContainer">
              <GreyCubeComponent />
            </div>

            <div className="buttonContainer">
              <Button
                className="whiteButton "
                color=""
                onClick={handleStartClick}
              >
                Start
              </Button>
            </div>

            <div className="cubeContainer">
              <GreyCubeComponent />
            </div>
          </div>
        </>
      ) : (
        <div className="flex-Center">
          {
            <div className="flex-Center">
              {clickSound()}
              <TriviaSelection onSelectDifficulty={handleSelectDifficulty} />
              {selectedUrl && <QuizApp triviaUrl={selectedUrl} />}
            </div>
          }
        </div>
      )}
    </div>
  );
}

export default HomePage;
