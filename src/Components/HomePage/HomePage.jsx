import React, { useState } from 'react';
import "./HomePage.css";
import TriviaSelection from '../TriviaSelection/TriviaSelection'
import QuizApp from '../QuizApp/QuizApp';


function HomePage() {
 const [isHomePageVisible, setIsHomePageVisible] = useState(true);

 const handleStartClick = () => {
    setIsHomePageVisible(false);
 };
 
 const [selectedUrl, setSelectedUrl] = useState(null);

 const handleSelectDifficulty = (url) => {
   setSelectedUrl(url);
 };


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
      <TriviaSelection onSelectDifficulty={handleSelectDifficulty} />     
      {selectedUrl && <QuizApp triviaUrl={selectedUrl} />}
    </div>}
       
        </div>
      )}
    </div>
 );
}

export default HomePage;