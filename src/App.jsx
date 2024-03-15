import React, { useState } from 'react';
import TriviaSelection from './Components/TriviaSelection/TriviaSelection';
import QuizApp from './Components/QuizApp/QuizApp';

function App() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleSelectDifficulty = (url) => {
    setSelectedUrl(url);
  };

  return (
    <div>
      <TriviaSelection onSelectDifficulty={handleSelectDifficulty} />     
      {selectedUrl && <QuizApp triviaUrl={selectedUrl} />}
    </div>
  );
}

export default App;
