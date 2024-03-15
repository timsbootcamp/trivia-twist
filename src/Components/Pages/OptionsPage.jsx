import React, { useContext, useState } from 'react';
import VisibilityContext from './VisibilityContext';
import TriviaSelection from '../TriviaSelection/TriviaSelection';
import QuizApp from '../QuizApp/QuizApp';

function OptionsPage() {
 const { setCurrentPage } = useContext(VisibilityContext);

 const navigateToQuiz = () => {
    setCurrentPage('quiz');
 };

 const [selectedUrl, setSelectedUrl] = useState(null);

 const handleSelectDifficulty = (url) => {
   setSelectedUrl(url);
   console.log("Selected URL:", url); 
 };

 return (
    <div className="optionsPage">
      Options Menu
      <div>
      <TriviaSelection onSelectDifficulty={handleSelectDifficulty} />     
      {selectedUrl && <QuizApp triviaUrl={selectedUrl} />}
    </div>
      <button onClick={navigateToQuiz}>Play</button>
    </div>
 );
}

export default OptionsPage;