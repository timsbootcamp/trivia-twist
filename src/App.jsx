import React from 'react'; // Importing React library for JSX usage
import HomePage from './Components/HomePage/HomePage.jsx'; // Importing the HomePage component
import './App.css'; // Importing the CSS file for styling

// Functional component for the main application
function App() {
  return (
    <div className='app'> {/* Main container div with CSS class 'app' */}
      <HomePage /> {/* Rendering the HomePage component */}
    </div>
  );
}

export default App; // Exporting the App component for use in other parts of the application
