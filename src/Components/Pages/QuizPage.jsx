import React, { useContext } from 'react';
import VisibilityContext from './VisibilityContext';

function QuizPage() {
 const { setCurrentPage } = useContext(VisibilityContext);

 const navigateToLeaderboard = () => {
    setCurrentPage('leaderboard');
 };

 return (
    <div className="quizPage">
      Quiz Page
      <button onClick={navigateToLeaderboard}>Finish Quiz</button>
    </div>
 );
}

export default QuizPage;