import React, { useState } from "react";
import { Button, Columns, Container } from "react-bulma-components";
import TriviaTwistLogo from "../../assets/TriviaTwistLogoWithLights.svg";
import TriviaSelection from "../TriviaSelection/TriviaSelection";
import QuizApp from "../QuizApp/QuizApp";
import TwoDimComponents from "../../Components/HomePage/TwoDimComponents";
import GreyCubeComponent from "../HomePage/CubeComponents/GreyCubeComponent";
import PinkCubeComponent from "../HomePage/CubeComponents/PinkCubeComponent";
import PurpleCubeComponent from "../HomePage/CubeComponents/PurpleCubeComponent";
import LogoComponent from "../LogoComponent";
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
    <Container className="homePage">
      {isHomePageVisible ? (
        <Columns>
          <Columns.Column>
            <GreyCubeComponent />
            <PinkCubeComponent />
            <TwoDimComponents />
          </Columns.Column>
          <Columns.Column>
            <Container className="has-text-centered">
              <LogoComponent />
              <Button color="primary" onClick={handleStartClick}>
                Start
              </Button>
            </Container>
          </Columns.Column>
          <Columns.Column>
          <TwoDimComponents />
          </Columns.Column>
        </Columns>
      ) : (
        <TriviaSelectionContainer
          onSelectDifficulty={handleSelectDifficulty}
          selectedUrl={selectedUrl}
        />
      )}
    </Container>
  );
}

export default HomePage;
