import React, { useContext } from 'react';
import VisibilityContext from './VisibilityContext';

function HomePage() {
 const { setCurrentPage } = useContext(VisibilityContext);

 const navigateToOptions = () => {
    setCurrentPage('options');
 };

 return (
    <div className="homePage">
      Home Page
      <button onClick={navigateToOptions}>Start</button>
    </div>
 );
}

export default HomePage;