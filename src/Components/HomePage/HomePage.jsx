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
import useSound from 'use-sound';
import "./HomePage.css";
import ClickSound from "../../Sounds/ButtonClickSound.wav";

function HomePage() {
  const [isHomePageVisible, setIsHomePageVisible] = useState(true);
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleStartClick = () => {
    setIsHomePageVisible(false);
  };


  const handleSelectDifficulty = (url) => {
    setSelectedUrl(url);
  };

  const [clickSound] = useSound(ClickSound);

  return (
    <div className="HomePage">
      {isHomePageVisible ? (
        <>
          {/* <img
            className="BgGraphics"
            src="\assets\2d-main-page-elements.png"
          ></img> */}

          <div className="topContainer">
            {/* <div className="column is-full logoMain"> */}
              <img src="/assets/main-page-logo.png" className="logo"></img>
            </div>
          {/* </div> */}
          

          <div className="contentContainer">
          <div className="cubeContainer">
              <GreyCubeComponent />
            </div>

            <div className="buttonContainer">
              <Button
                className="yellowButton "
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

          {/* <Columns>
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
        </Columns> */}
        </>
      ) : (
        <div>
          {<div>
            {clickSound()}
            <TriviaSelection onSelectDifficulty={handleSelectDifficulty} />
            {selectedUrl && <QuizApp triviaUrl={selectedUrl} />}
          </div>}

        </div>
      )}
    </div>
  );
}

export default HomePage;
