import React, { useState } from 'react';
import useSound from 'use-sound';
import "./HomePage.css";
import TriviaSelection from '../TriviaSelection/TriviaSelection';
import QuizApp from '../QuizApp/QuizApp';
import ClickSound from "../../Sounds/ButtonClickSound.wav";

function HomePage() {
  const [isHomePageVisible, setIsHomePageVisible] = useState(true);

  const handleStartClick = () => {
    setIsHomePageVisible(false);
  };

  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleSelectDifficulty = (url) => {
    setSelectedUrl(url);
  };

  const [clickSound] = useSound(ClickSound);

  return (
    <div className="homePage">
      {isHomePageVisible ? (
        <>
          Home Page
          <button onClick={handleStartClick}>Start</button>
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