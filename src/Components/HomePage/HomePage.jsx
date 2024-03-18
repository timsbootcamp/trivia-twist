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
import "./HomePage.css";

function HomePage() {
  const [isHomePageVisible, setIsHomePageVisible] = useState(true);
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleStartClick = () => {
    setIsHomePageVisible(false); // Set isHomePageVisible to false when Start button is clicked
  };

  const handleSelectDifficulty = (url) => {
    setSelectedUrl(url);
  };

  return (
    <div className="HomePage">
      {isHomePageVisible ? (
        <>
           <img
            className="BgGraphics"
            src="\assets\2d-main-page-elements.png"
          ></img>

          <div className="columns">
            <div className="column is-full logoMain">
              <img src='/assets/main-page-logo.png'></img>
            </div>
          </div>

      
          <div className="columns">
          <div className="column is-one-third">
              <div></div>
            </div>

            <div className="column is-one-third">
            <Button className="btn is-rounded " color="" onClick={handleStartClick}>
                Start
              </Button>
            </div>

            <div className="column is-one-third">
              <div></div>
            </div>
         

     
            </div>

      

          
          <div className="columns">
            <div className="column is-two-quarters">
              
                <GreyCubeComponent/>
              
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
      <TriviaSelection onSelectDifficulty={handleSelectDifficulty} />     
      {selectedUrl && <QuizApp triviaUrl={selectedUrl} />}
    </div>}
       
        </div>
      )}
    </div>
 );
}

export default HomePage;
