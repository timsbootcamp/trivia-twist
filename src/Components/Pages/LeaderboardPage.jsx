import React, { useContext } from 'react';
import VisibilityContext from './VisibilityContext';

function LeaderboardPage() {
 const { setCurrentPage } = useContext(VisibilityContext);

 const navigateToHome = () => {
    setCurrentPage('home');
 };

 return (
    <div className="leaderboardPage">
      Leaderboard Page
      <button onClick={navigateToHome}>Back to Home</button>
    </div>
 );
}

export default LeaderboardPage;