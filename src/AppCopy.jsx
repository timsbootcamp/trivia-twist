import React, { useState } from 'react';
import VisibilityContext, { VisibilityProvider } from './Components/Pages/VisibilityContext';
import HomePage from './Components/Pages/HomePage';
import OptionsPage from './Components/Pages/OptionsPage';
import QuizPage from './Components/Pages/QuizPage';
import LeaderboardPage from './Components/Pages/LeaderboardPage';

function App() {
 const [currentPage, setCurrentPage] = useState('home');

 return (
    <VisibilityProvider value={{ currentPage, setCurrentPage }}>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'options' && <OptionsPage />}
      {currentPage === 'quiz' && <QuizPage />}
      {currentPage === 'leaderboard' && <LeaderboardPage />}
    </VisibilityProvider>
 );
}

export default App;
